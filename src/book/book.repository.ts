import * as AWS from 'aws-sdk';
import { InternalServerErrorException } from '@nestjs/common';
import { CreateBookDTO } from './book.dto';
import { BookId } from 'src/entities/bookId.entity';
import { Book } from 'src/entities/book.entity';
import { BookRepositoryInterface } from './book.repository.interface';

export class BookRepository implements BookRepositoryInterface {
  private bookTable = process.env.BOOK_TABLE_NAME;
  private sequencesTable = process.env.SEQUENCE_TABLE_NAME;
  private dynamoDbClient;

  constructor() {
    let options = {};

    // オフラインでの実行時のみ、ローカルに接続
    if (process.env.IS_OFFLINE) {
      options = {
        region: 'ap-northeast-1',
        endpoint: 'http://dynamodb-local:8000',
      };
    }

    this.dynamoDbClient = new AWS.DynamoDB.DocumentClient(options);
  }

  async insert(book: CreateBookDTO): Promise<BookId> {
    const id = await this.getId();
    try {
      await this.dynamoDbClient
        .put({
          TableName: this.bookTable,
          Item: {
            id: id,
            title: book.title,
            isbn: book.isbn,
            author: book.author,
          },
        })
        .promise();
      return id;
    } catch (error) {
      // TODO:ちゃんとした例外を定義
      throw new InternalServerErrorException(error);
    }
  }

  async findAll(): Promise<Book[]> {
    const bookFindResult = await this.dynamoDbClient
      .scan({
        TableName: this.bookTable,
      })
      .promise();
    return bookFindResult.Items;
  }

  // TODO:別関数に切り分け
  async getId(): Promise<number> {
    const sequenceData = await this.dynamoDbClient
      .update({
        TableName: this.sequencesTable,
        ReturnValues: 'ALL_NEW',
        Key: {
          name: 'booklog-book-table',
        },
        UpdateExpression: 'ADD #current_number :incr',
        ExpressionAttributeNames: {
          '#current_number': 'current_number',
        },
        ExpressionAttributeValues: {
          ':incr': 1,
        },
      })
      .promise();
    return +sequenceData['Attributes']['current_number'];
  }
}

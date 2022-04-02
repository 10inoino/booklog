import { DynamoDB } from 'aws-sdk';
import { InternalServerErrorException } from '@nestjs/common';
import { CreateBookDTO } from './book.dto';

export class BookRepository {
  private tableName = process.env.BOOK_TABLE_NAME;

  async insert(
    book: CreateBookDTO,
  ): Promise<AWS.DynamoDB.DocumentClient.PutItemOutput> {
    console.log(book.title);
    console.log(book.isbn);
    console.log(book.author);
    try {
      return await new DynamoDB.DocumentClient()
        .put({
          TableName: this.tableName,
          Item: {
            // TODO:シーケンステーブルの値に置き換え
            id: Math.random(),
            title: book.title,
            isbn: book.isbn,
            author: book.author,
          },
        })
        .promise();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async find(): Promise<DynamoDB.DocumentClient.ScanOutput> {
    return await new DynamoDB.DocumentClient()
      .scan({
        TableName: this.tableName,
      })
      .promise();
  }
}

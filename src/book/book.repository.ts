import * as AWS from 'aws-sdk';
import { InternalServerErrorException } from '@nestjs/common';
import { CreateBookDTO } from './book.dto';

export class BookRepository {
  private bookTable = process.env.BOOK_TABLE_NAME;
  private sequencesTable = process.env.SEQUENCE_TABLE_NAME;

  async insert(
    book: CreateBookDTO,
  ): Promise<AWS.DynamoDB.DocumentClient.PutItemOutput> {
    const id = await this.getId();
    try {
      return await new AWS.DynamoDB.DocumentClient()
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
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async find(): Promise<AWS.DynamoDB.DocumentClient.ScanOutput> {
    return await new AWS.DynamoDB.DocumentClient()
      .scan({
        TableName: this.bookTable,
      })
      .promise();
  }

  async getId(): Promise<number> {
    const sequenceData = await new AWS.DynamoDB.DocumentClient()
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

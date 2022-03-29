import * as AWS from 'aws-sdk';
import { InternalServerErrorException } from '@nestjs/common';

export class BookRepository {
  private tableName = process.env.BOOK_TABLE_NAME;

  async insert(book): Promise<AWS.DynamoDB.DocumentClient.UpdateItemOutput> {
    let updateExpression = 'set ';
    const expressionAttributeValues = {} as any;
    const expressionAttributeNames = {} as any;
    for (const [key, value] of Object.entries(book)) {
      if (!(key === 'id')) {
        updateExpression += `#${key} = :${key}, `;
        expressionAttributeValues[`:${key}`] = value;
        expressionAttributeNames[`#${key}`] = `${key}`;
      }
    }
    updateExpression = updateExpression.slice(0, -2);

    try {
      return await new AWS.DynamoDB.DocumentClient()
        .update({
          TableName: this.tableName,
          Key: {
            id: book.id,
          },
          UpdateExpression: updateExpression,
          ExpressionAttributeValues: expressionAttributeValues,
          ExpressionAttributeNames: expressionAttributeNames,
          ReturnValues: 'ALL_NEW',
        })
        .promise();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async find(): Promise<AWS.DynamoDB.DocumentClient.ScanOutput> {
    return await new AWS.DynamoDB.DocumentClient()
      .scan({
        TableName: this.tableName,
      })
      .promise();
  }
}

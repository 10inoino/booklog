import { Context, Handler } from 'aws-lambda';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Server } from 'http';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as serverless from 'aws-serverless-express';
import * as express from 'express';
import { ValidationPipe } from '@nestjs/common';

let cachedServer: Server;

async function bootstrapServer(): Promise<Server> {
  const expressApp = express();
  const adapter = new ExpressAdapter(expressApp);
  const app = await NestFactory.create(AppModule, adapter);
  app.enableCors();
  await app.init();
  // FIXME:initの後で大丈夫だよね？
  app.useGlobalPipes(new ValidationPipe());
  return serverless.createServer(expressApp);
}

export const handler: Handler = async (event: any, context: Context) => {
  if (!cachedServer) {
    const server = await bootstrapServer();
    cachedServer = server;
  }
  return serverless.proxy(cachedServer, event, context, 'PROMISE').promise;
};

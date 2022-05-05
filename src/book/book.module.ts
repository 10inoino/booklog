import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { BookRepository } from './book.repository';
import { ConstantTokens } from './book.constants';

@Module({
  controllers: [BookController],
  providers: [
    {
      provide: BookService,
      useClass: BookService,
    },
    {
      provide: ConstantTokens.DB,
      useClass: BookRepository,
    },
  ],
})
export class BookModule {}

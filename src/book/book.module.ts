import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { Book } from 'src/entities/book.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [BookController],
  imports: [TypeOrmModule.forFeature([Book])],
  providers: [BookService],
})
export class BookModule {}

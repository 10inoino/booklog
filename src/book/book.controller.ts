import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from 'src/entities/book.entity';
import { CreateBookDTO, UpdateBookDto } from './book.dto';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async getBookList(): Promise<Book[]> {
    return await this.bookService.findAll();
  }

  @Post()
  async addBook(@Body() book: CreateBookDTO): Promise<InsertResult> {
    return await this.bookService.create(book);
  }

  @Get(':id')
  async getBook(@Param('id') id: string): Promise<Book> {
    return await this.bookService.find(Number(id));
  }

  @Put(':id/update')
  async updateBook(
    @Param('id') id: string,
    @Body() newBookData: UpdateBookDto,
  ): Promise<UpdateResult> {
    return await this.bookService.update(Number(id), newBookData);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id: string): Promise<DeleteResult> {
    return await this.bookService.delete(Number(id));
  }
}

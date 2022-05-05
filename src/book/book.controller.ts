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
import { CreateBookDTO, UpdateBookDto } from './book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async getBookList(): Promise<string> {
    return await this.bookService.findAll();
  }

  @Post()
  async addBook(@Body() book: CreateBookDTO): Promise<string> {
    return await this.bookService.create(book);
  }

  @Get(':id')
  async getBook(@Param('id') id: string): Promise<string> {
    return await this.bookService.find(Number(id));
  }

  @Put(':id/update')
  async updateBook(
    @Param('id') id: string,
    @Body() newBookData: UpdateBookDto,
  ): Promise<string> {
    return await this.bookService.update(Number(id), newBookData);
  }

  @Delete(':id/delete')
  async deleteBook(@Param('id') id: string): Promise<string> {
    return await this.bookService.delete(Number(id));
  }
}

import { Injectable } from '@nestjs/common';
import { Book } from 'src/entities/book.entity';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBookDTO } from './book.dto';
import { BookRepository } from './book.repository';
import { BookRepositoryInterface } from './book.repository.interface';

@Injectable()
export class BookService {
  constructor(
    // @InjectRepository(Book)
    private readonly bookRepository: BookRepository,
  ) {}

  // FIXME:bookの配列を返せるようにリポジトリのインターフェースを作成
  async findAll(): Promise<string> {
    const result = await this.bookRepository.findAll();
    return JSON.stringify(result);
  }

  // FIXME:作成結果を返せるようにリポジトリのインターフェースを作成
  async create(book: CreateBookDTO): Promise<string> {
    const result = await this.bookRepository.insert(book);
    return JSON.stringify(result);
  }

  // async find(id: number): Promise<Book> | null {
  //   return await this.bookRepository.findOne({ id: id });
  // }

  // async update(id: number, book: CreateBookDTO): Promise<UpdateResult> {
  //   return await this.bookRepository.update(id, book);
  // }

  // async delete(id: number): Promise<DeleteResult> {
  //   return await this.bookRepository.delete(id);
  // }
}

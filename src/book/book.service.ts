import { Injectable } from '@nestjs/common';
import { Book } from 'src/entities/book.entity';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBookDTO } from './book.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async findAll(): Promise<Book[]> {
    return await this.bookRepository.find();
  }

  async create(book: CreateBookDTO): Promise<InsertResult> {
    return await this.bookRepository.insert(book);
  }

  async find(id: number): Promise<Book> | null {
    return await this.bookRepository.findOne({ id: id });
  }

  async update(id: number, book: CreateBookDTO): Promise<UpdateResult> {
    return await this.bookRepository.update(id, book);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.bookRepository.delete(id);
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { CreateBookDTO } from './book.dto';
import { BookRepositoryInterface } from './book.repository.interface';
import { ConstantTokens } from './book.constants';

@Injectable()
export class BookService {
  constructor(
    @Inject(ConstantTokens.DB)
    private readonly bookRepository: BookRepositoryInterface,
  ) {}

  // TODO:責務としてはJSONで返すのがよいのか？？
  async findAll(): Promise<string> {
    const result = await this.bookRepository.findAll();
    return JSON.stringify(result);
  }

  // TODO:責務としてはJSONで返すのがよいのか？？
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

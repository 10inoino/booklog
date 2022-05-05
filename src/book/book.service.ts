import { Inject, Injectable } from '@nestjs/common';
import { CreateBookDTO } from './book.dto';
import { BookRepositoryInterface } from './book.repository.interface';
import { ConstantTokens } from './book.constants';
import { BookId } from 'src/entities/bookId.entity';

@Injectable()
export class BookService {
  constructor(
    @Inject(ConstantTokens.DB)
    private readonly bookRepository: BookRepositoryInterface,
  ) {}

  // TODO:責務としてはJSONで返すのがよいのか？？(他も含めて要検討) 
  async findAll(): Promise<string> {
    const result = await this.bookRepository.findAll();
    return JSON.stringify(result, null, '  ');
  }

  async create(book: CreateBookDTO): Promise<string> {
    const result = await this.bookRepository.insert(book);
    return JSON.stringify(result, null, '  ');
  }

  async find(id: BookId): Promise<string> {
    const result = await this.bookRepository.find(id);
    return JSON.stringify(result, null, '  ');
  }

  async update(id: BookId, book: CreateBookDTO): Promise<string> {
    const result = await this.bookRepository.update(id, book);
    return JSON.stringify(result, null, '  ');
  }

  async delete(id: number): Promise<string> {
    const result = await this.bookRepository.delete(id);
    return JSON.stringify(result, null, '  ');
  }
}

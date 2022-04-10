import { CreateBookDTO, UpdateBookDto } from './book.dto';
import { Book } from '../entities/book.entity';
import { BookId } from '../entities/bookId.entity';

export interface BookRepositoryInterface {
  insert(createBookDto: CreateBookDTO): BookId;
  findAll(): Book[];
  find(bookId: BookId): Book;
  update(updateBookDto: UpdateBookDto): BookId;
  delete(bookId: BookId): boolean;
}

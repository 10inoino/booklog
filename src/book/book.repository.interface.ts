import { CreateBookDTO, UpdateBookDto } from './book.dto';
import { Book } from '../entities/book.entity';
import { BookId } from '../entities/bookId.entity';

export interface BookRepositoryInterface {
  insert(createBookDto: CreateBookDTO): Promise<BookId>;
  findAll(): Promise<Book[]>;
  find(bookId: BookId): Promise<Book>;
  update(bookId: BookId, updateBookDto: UpdateBookDto): Promise<BookId>;
  delete(bookId: BookId): Promise<BookId>;
}

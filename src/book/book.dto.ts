import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBookDTO {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  isbn: string;

  @IsNotEmpty()
  @IsString()
  author: string;
}

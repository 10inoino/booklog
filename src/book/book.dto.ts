import {
  IsNotEmpty,
  IsNumberString,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateBookDTO {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsNumberString()
  @MaxLength(13)
  isbn: string;

  @IsNotEmpty()
  @IsString()
  author: string;
}

export class UpdateBookDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsNumberString()
  @MaxLength(13)
  isbn: string;

  @IsNotEmpty()
  @IsString()
  author: string;
}

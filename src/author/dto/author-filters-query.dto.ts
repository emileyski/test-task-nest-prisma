import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsInt,
  IsNumber,
  IsOptional,
  IsEmail,
  IsPhoneNumber,
  Matches,
} from 'class-validator';
import { SortOrder } from 'src/core/enums';

export class AuthorFiltersDto {
  @ApiProperty({
    description: 'The name of the Author',
    example: ['John'],
    required: false,
    type: [String],
  })
  @IsOptional()
  name?: string[];

  @ApiProperty({
    description: 'The surname of the Author',
    example: ['Doe'],
    required: false,
    type: [String],
  })
  @IsOptional()
  surname?: string[];

  @ApiProperty({
    description: 'The emails of the Author',
    example: ['author@mail.com'],
    required: false,
    type: [String],
  })
  @IsOptional()
  @IsEmail({}, { each: true }) // Проверка на валидность электронных адресов
  email?: string[];

  @ApiProperty({
    description: 'The phone numbers of the Author',
    example: ['+3801234567890'],
    required: false,
    type: [String],
  })
  @IsOptional()
  @Matches(/^(\+\d+)$/, { each: true })
  // @IsPhoneNumber('UA', { each: true })
  phoneNumber?: string[];

  @ApiProperty({
    description:
      "Sort the items in ascending or descending by the author's name",
    required: false,
    enum: SortOrder,
    example: SortOrder.ASC,
  })
  @IsOptional()
  sortByName: SortOrder;

  @ApiProperty({
    description:
      "Sort the items in ascending or descending by the author's surname",
    required: false,
    enum: SortOrder,
    example: SortOrder.ASC,
  })
  @IsOptional()
  sortBySurname: SortOrder;

  @ApiProperty({
    description:
      "Sort the items in ascending or descending by the author's email",
    required: false,
    enum: SortOrder,
    example: SortOrder.ASC,
  })
  @IsOptional()
  sortByEmail: SortOrder;

  @ApiProperty({
    description:
      "Sort the items in ascending or descending by the author's phone number",
    required: false,
    enum: SortOrder,
    example: SortOrder.ASC,
  })
  @IsOptional()
  sortByPhoneNumber: SortOrder;

  @ApiProperty({
    description: 'The page number',
    required: false,
    type: Number,
    example: 1,
  })
  @IsOptional()
  @IsInt()
  @Transform(({ value }) => (value ? Number(value) : 1))
  page: number;

  @ApiProperty({
    description: 'The number of items per page',
    required: false,
    type: Number,
    example: 10,
  })
  @IsOptional()
  @IsInt()
  @Transform(({ value }) => (value ? Number(value) : 10))
  limit: number;
}

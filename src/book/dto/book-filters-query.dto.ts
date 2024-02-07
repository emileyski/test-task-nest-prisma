import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class BookFiltersDto {
  @ApiProperty({
    description: 'The name of the book',
    example: ['Book 1', 'Book 2'],
    required: false,
    type: [String],
  })
  @IsOptional()
  name?: string[];

  @ApiProperty({
    description: 'The content of the book',
    example: ['Content 1', 'Content 2'],
    required: false,
    type: [String],
  })
  @IsOptional()
  content?: string[];

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

  @ApiProperty({
    description: 'Include the author of the book',
    example: false,
    required: false,
  })
  withAuthor?: boolean;

  @ApiProperty({
    description: 'Include the content of the book',
    example: false,
    required: false,
  })
  withContent?: boolean;
}

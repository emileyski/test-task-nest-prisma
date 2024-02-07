import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt, IsNumber, IsOptional } from 'class-validator';

export class AuthorFiltersDto {
  @ApiProperty({
    description: 'The name of the Author',
    required: false,
    type: [String],
  })
  name?: string[];

  @ApiProperty({
    description: 'The surname of the Author',
    required: false,
    type: [String],
  })
  surname?: string[];

  @ApiProperty({
    required: false,
  })
  @Transform(({ value }) => (value ? Number(value) : 1))
  @IsOptional()
  @IsInt()
  @IsNumber()
  page: number;

  @ApiProperty({
    required: false,
  })
  @Transform(({ value }) => (value ? Number(value) : 10))
  @IsOptional()
  @IsInt()
  @IsNumber()
  perPage: number;
}

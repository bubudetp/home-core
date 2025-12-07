import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsOptional } from 'class-validator';

export class CreateToolDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty()
  @IsInt()
  moduleId: number;
}
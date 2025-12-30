import { IsOptional, IsArray, IsString } from 'class-validator';

export class FixturesSyncDto {
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  sports?: string[];
}
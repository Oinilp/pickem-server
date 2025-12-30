import { IsOptional, IsString } from 'class-validator';

export class FixturesQueryDto {
  @IsOptional()
  @IsString()
  sport?: string;

  @IsOptional()
  @IsString()
  competition_id?: string;

    @IsOptional()
  @IsString()
  sport_alias?: string;
 
  @IsOptional()
  @IsString()
  status?: string;
}

import { Injectable } from '@nestjs/common';
import { FixturesRepository } from './fixtures.repository';
import { FixturesQueryDto } from './dto/fixtures.query.dto';

@Injectable()
export class FixturesService {
  constructor(private repo: FixturesRepository) {}

  async getFixtures(query: FixturesQueryDto) {
    const fixtures = await this.repo.findMany({
      sport: query.sport,
      competition_id: query.competition_id
        ? BigInt(query.competition_id)
        : undefined,
    });

     return fixtures.map(f => ({
      ...f,
      id: f.id.toString(),
      competition_id: f.competition_id.toString(),
      scheduled_start_time: f.scheduled_start_time?.toString(),
      start_time: f.start_time?.toString(),
      end_time: f.end_time?.toString(),
      winner_id: f.winner_id?.toString(),
      participants0_id: f.participants0_id?.toString(),
      participants1_id: f.participants1_id?.toString(),
    }));
  }
}

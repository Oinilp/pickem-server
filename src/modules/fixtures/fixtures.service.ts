import { Injectable } from '@nestjs/common';
import { FixturesRepository } from './fixtures.repository';
import { FixturesQueryDto } from './dto/fixtures.query.dto';

@Injectable()
export class FixturesService {
  constructor(private repo: FixturesRepository) {}
async getFixtures(query: FixturesQueryDto) {
  const fixtures = await this.repo.findMany({
    sport_alias: query.sport_alias,

    competition_id: query.competition_id
      ? BigInt(query.competition_id)
      : undefined,

    status: query.status,

     participants0_name: {
      notIn: ['TBD', 'tbd', ''],
    },
    participants1_name: {
      notIn: ['TBD', 'tbd', ''],
    },
  });



    return fixtures.map(f => ({
      id: f.id.toString(),
      competition_id: f.competition_id.toString(),
      competition_name: f.competition_name,
      sport_alias: f.sport_alias,
      sport_name: f.sport_name,
      status: f.status,
      scheduled_start_time:
        f.scheduled_start_time?.toString() ?? null,
      start_time: f.start_time?.toString() ?? null,
      end_time: f.end_time?.toString() ?? null,
      participants0_id:
        f.participants0_id?.toString() ?? null,
      participants0_name: f.participants0_name,
      participants0_score: f.participants0_score,
      participants1_id:
        f.participants1_id?.toString() ?? null,
      participants1_name: f.participants1_name,
      participants1_score: f.participants1_score,
    }));
  }
}
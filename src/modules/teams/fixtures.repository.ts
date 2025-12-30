import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';

export type UpsertFixture = {
  id: bigint;

  competition_id: bigint;
  competition_name?: string | null;

  sport_alias: string;
  sport_name?: string | null;

  status?: string | null;

  scheduled_start_time?: bigint | null;
  start_time?: bigint | null;
  end_time?: bigint | null;

  tie?: number | null;
  winner_id?: bigint | null;

  participants0_id?: bigint | null;
  participants0_name?: string | null;
  participants0_score?: number | null;

  participants1_id?: bigint | null;
  participants1_name?: string | null;
  participants1_score?: number | null;

  hs_description?: string | null;
  rr_description?: string | null;

  manual_override?: number | null;
  manual_updated_at?: Date | null;
};

@Injectable()
export class FixturesRepository {
  constructor(private prisma: PrismaService) {}

  upsert(data: UpsertFixture) {
    return this.prisma.fixture.upsert({
      where: { id: data.id },
      create: data,
      update: data,
    });
  }

  findMany(params: {
    sport?: string;
    competition_id?: bigint;
  }) {
    return this.prisma.fixture.findMany({
      where: {
        ...(params.sport && { sport_alias: params.sport }),
        ...(params.competition_id && {
          competition_id: params.competition_id,
        }),
      },
      orderBy: { start_time: 'asc' },
    });
  }
}

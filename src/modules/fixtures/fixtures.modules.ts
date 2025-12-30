import { Module } from '@nestjs/common';
import { FixturesController } from './fixtures.controller';
import { FixturesService } from './fixtures.service';
import { FixturesRepository } from './fixtures.repository';
import { FixturesSyncService } from './sync/fixtures.sync.service';

@Module({
  controllers: [FixturesController],
  providers: [
    FixturesService,
    FixturesRepository,
    FixturesSyncService,
  ],
})
export class FixturesModule {}

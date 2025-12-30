import { Module } from '@nestjs/common';
import { CompetitionsController } from './competitions.controller';
import { CompetitionsService } from './competitions.service';
import { CompetitionsRepository } from './competitions.repository';
import { CompetitionsSyncService } from './sync/competitions.sync.service';

@Module({
  controllers: [CompetitionsController],
  providers: [
    CompetitionsService,
    CompetitionsRepository,
    CompetitionsSyncService,
  ],
})
export class CompetitionsModule {}

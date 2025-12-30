import { Injectable, NotFoundException } from '@nestjs/common';
import { CompetitionsRepository } from './competitions.repository';
import { CompetitionsQueryDto } from './dto/competitions.query.dto';

@Injectable()
export class CompetitionsService {
  constructor(private repo: CompetitionsRepository) {}

  async list(q: CompetitionsQueryDto) {
    const where: any = {};
    if (q.sport) where.sportAlias = q.sport;
    if (q.status) where.status = q.status.toLowerCase();

    const [items, total] = await Promise.all([
      this.repo.findMany(where, q.limit ?? 50, q.offset ?? 0),
      this.repo.count(where),
    ]);

    return { items, total, limit: q.limit, offset: q.offset };
  }

  async getById(id: number) {
    const item = await this.repo.findById(BigInt(id));
    if (!item) throw new NotFoundException('Competition not found');
    return item;
  }
}

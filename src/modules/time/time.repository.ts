import { Repository } from '@mikro-orm/core';
import { EntityRepository } from '@mikro-orm/mysql';
import { TimeEntity } from './time.entity';

@Repository(TimeEntity)
export class TimeRepository extends EntityRepository<TimeEntity> {

}
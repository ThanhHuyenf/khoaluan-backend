import { Module } from '@nestjs/common';
import { TimeService } from './time.service';
import { TimeController } from './time.controller';
import {MikroOrmModule} from "@mikro-orm/nestjs";
import {TimeEntity} from "./time.entity";

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [TimeEntity] })],
  providers: [TimeService],
  controllers: [TimeController]
})
export class TimeModule {}

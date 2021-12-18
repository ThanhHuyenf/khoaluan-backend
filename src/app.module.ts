import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import {MikroORM} from "@mikro-orm/core";
import {MikroOrmModule} from "@mikro-orm/nestjs";
import {config} from "./config/secrets";
import { TimeModule } from './modules/time/time.module';

@Module({
  imports: [MikroOrmModule.forRoot(config),UsersModule, TimeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

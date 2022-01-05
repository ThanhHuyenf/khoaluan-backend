import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './modules/users/users.module'
import { TimeModule } from './modules/time/time.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import {
  MYSQL_DATABASE,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_ROOT_PASSWORD,
  MYSQL_ROOT_USER,
} from './config/secrets'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: MYSQL_HOST,
      port: +MYSQL_PORT,
      username: MYSQL_ROOT_USER,
      password: MYSQL_ROOT_PASSWORD,
      database: MYSQL_DATABASE,
      entities: ['dist/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    TimeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

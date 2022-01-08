import { Module } from '@nestjs/common'
import { DetailUsersService } from './detail-users.service'
import { DetailUsersController } from './detail-users.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DetailUsers } from './detail-users.entity'

@Module({
  imports: [TypeOrmModule.forFeature([DetailUsers])],
  providers: [DetailUsersService],
  controllers: [DetailUsersController],
})
export class DetailUsersModule {}

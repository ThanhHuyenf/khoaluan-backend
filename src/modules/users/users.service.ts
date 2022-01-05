import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateUsersDto } from './dto/create-users.dto'
import { Users } from './users.entity'
import { Role } from './users.enum'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  public async createUser(dto: CreateUsersDto): Promise<Users> {
    const users = {
      ...dto,
      role: Role.Student,
    }
    return this.usersRepository.save(users)
  }
}

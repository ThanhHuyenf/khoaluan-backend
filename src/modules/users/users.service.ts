import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
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

  public async getById(id: number) {
    const user = await this.usersRepository.findOne(id)
    if (user) {
      return user
    }
    throw new HttpException(
      'User with this email does not exist',
      HttpStatus.NOT_FOUND,
    )
  }

  public async getRole(id: string) {
    const user = await this.usersRepository.findOne(id)
    if (user) {
      return user.role
    }
    throw new HttpException(
      'User with this email does not exist',
      HttpStatus.NOT_FOUND,
    )
  }
}

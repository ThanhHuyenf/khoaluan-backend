import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { Role } from './users.enum'

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  userID: number

  @Column()
  name: string

  @Column()
  password: string

  @Column()
  email: string

  @Column({ type: 'enum', enum: Role })
  role: Role

  @Column()
  imageUrls: string

  @Column()
  createdAt: string

  @Column()
  updatedAt: string
}

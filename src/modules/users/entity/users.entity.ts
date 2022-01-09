import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm'
import { Role } from '../users.enum'

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  userID: number

  @Column()
  password: string

  @Column({ unique: true })
  email: string

  @Column({ type: 'enum', enum: Role })
  role: Role

  @Column({ nullable: true })
  imageUrls: string

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date
}

import { Users } from 'src/modules/users/entity/users.entity'
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  RelationId,
} from 'typeorm'

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  departmentId: number

  @Column({ type: 'nvarchar', length: '50' })
  departmentName: string

  @Column({ type: 'nvarchar', length: '50' })
  information: string

  @ManyToOne(() => Users, (users) => users.departments)
  @JoinColumn()
  departmentAdmin: Users

  @RelationId((depart: Department) => depart.departmentAdmin)
  departmentAdminUserID: number

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

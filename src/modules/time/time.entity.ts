import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Time {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  namHoc: string

  @Column()
  maHK: number

  @Column()
  tgSV: string

  @Column()
  tgLT: string

  @Column()
  tgGV: string

  @Column()
  tgK: string

  constructor(
    namHoc: string,
    maHK: number,
    tgSV: string,
    tgLT: string,
    tgGV: string,
    tgK: string,
  ) {
    this.namHoc = namHoc
    this.maHK = maHK
    this.tgSV = tgSV
    this.tgLT = tgLT
    this.tgGV = tgGV
    this.tgK = tgK
  }
}

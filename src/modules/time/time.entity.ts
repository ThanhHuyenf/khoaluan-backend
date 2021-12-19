import {Entity, EntityRepositoryType, PrimaryKey, Property} from "@mikro-orm/core";
import {TimeRepository} from "./time.repository";


@Entity()
export class TimeEntity {
    [EntityRepositoryType]?: TimeRepository;

    @PrimaryKey()
    id: number

    @Property()
    namHoc: string

    @Property()
    maHK: number

    @Property()
    tgSV: string

    @Property()
    tgLT: string

    @Property()
    tgGV: string

    @Property()
    tgK: string

    @Property()
    created_at= new Date()

    @Property({ onUpdate: () => new Date() })
    updatedAt = new Date();

    constructor(namHoc: string,maHK: number, tgSV: string, tgLT: string,tgGV: string, tgK: string) {
        this.namHoc = namHoc
        this.maHK = maHK
        this.tgSV = tgSV
        this.tgLT = tgLT
        this.tgGV = tgGV
        this.tgK = tgK
    }
}
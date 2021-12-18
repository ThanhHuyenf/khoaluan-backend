import {Entity, EntityRepositoryType, PrimaryKey, Property} from "@mikro-orm/core";
import {TimeRepository} from "./time.repository";


@Entity()
export class TimeEntity {
    [EntityRepositoryType]?: TimeRepository;

    @PrimaryKey()
    id: number

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
}
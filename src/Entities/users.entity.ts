import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity() // = tabla
export class TblUsers {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "text" })
    uid: string;

    @Column({ type: "varchar", length: 150, nullable: false })
    name: string;

    @Column({ default: "manager" })
    role: string;

    @Column({ default: 1 })
    status: number;
}

import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Answer {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column('text')
    group:string;

    @Column('text')
    diagnosis:string;

    @Column('text')
    exams:string;

    @Column('text')
    arguments:string;

    @Column({ type: 'text', nullable: true })
    professor_name?: string;
}

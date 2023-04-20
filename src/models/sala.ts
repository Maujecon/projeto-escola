import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
//import { Aluno } from "./aluno";

@Entity("salas")
export class Sala {

  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'text', nullable: true })
  nome: string;

  @Column({ type: 'int', nullable: true })
  numero: number;

}

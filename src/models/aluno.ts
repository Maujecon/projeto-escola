// import { salas } from "./sala"
// import { Sexo } from "./sexo"

// // export interface Aluno {
// //   id?: String
// //   nome: String,
// //   disciplina: String,
// //   dataInclusao: Date,
// //   telefone?: string,
// //   status: String,
// //   sala: Sala,
// //   sexo: Sexo
// // }

// import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

// @Entity('Alunos')
// export class Aluno {
//   @PrimaryGeneratedColumn()
//   id: string;

//   @Column({ type: 'text' })
//   nome: string;

//   @Column({ type: 'text' })
//   disciplina: String;

//   @Column({ type: 'date' })
//   dataInclusao: Date;

//   @Column({ type: 'number', nullable: true })
//   telefone?: string;

//   @Column({ type: 'text' })
//   status_do_aluno: String;

//   @OneToOne(() => salas, sala => sala.id)
//   @JoinColumn({ name: "sala_id" })
//   sala: salas;

//   @Column({ type: 'text' })
//   sexo: Sexo
// }


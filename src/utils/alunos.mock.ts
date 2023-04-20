import { Aluno } from "../models/aluno";
import { Sexo } from "../models/sexo";
export const listaAlunosMock: Aluno[] = [
  {
    id: "01",
    dataInclusao: new Date(),
    disciplina: "disc x",
    nome: "joao",
    status: "ativo",
    sala: {
        id: "1",
        nome: "sala a",
        numero: 1
    },
    sexo: Sexo.Masculino,
  },
  {
    id: "02",
    dataInclusao: new Date(),
    disciplina: "disc y",
    nome: "maria",
    status: "ativo",
    telefone: "(11) 99999-9999",
    sala: {
        id: "2",
        nome: "sala b",
        numero: 2
    },
    sexo: Sexo.Feminino,

  },
  {
    id: "03",
    dataInclusao: new Date(),
    disciplina: "disc y",
    nome: "pedro",
    status: "ativo",
    sala: {
        id: "3",
        nome: "sala c",
        numero: 3
    },
    sexo: Sexo.Masculino,

  },
  {
    id: "04",
    dataInclusao: new Date(),
    disciplina: "disc y",
    nome: "gomes",
    status: "ativo",
    sala: {
        id: "1",
        nome: "sala a",
        numero: 1
    },
    sexo: Sexo.Masculino,

  },
  {
    id: "05",
    dataInclusao: new Date(),
    disciplina: "disc y",
    nome: "josué",
    status: "ativo",
    sala: {
        id: "2",
        nome: "sala b",
        numero: 2
    },
    sexo: Sexo.Masculino,
  },
  {
    id: "06",
    dataInclusao: new Date(),
    disciplina: "disc y",
    nome: "Lucas",
    status: "ativo",
    sala: {
        id: "2",
        nome: "sala b",
        numero: 2
    },
    sexo: Sexo.Masculino,
  },
  {
    id: "07",
    dataInclusao: new Date(),
    disciplina: "disc y",
    nome: "Joseane",
    status: "ativo",
    sala: {
        id: "3",
        nome: "sala c",
        numero: 3
    },
    sexo: Sexo.Feminino,
  },
  {
    id: "08",
    dataInclusao: new Date(),
    disciplina: "disc y",
    nome: "Jéssica",
    status: "ativo",
    sala: {
        id: "3",
        nome: "sala c",
        numero: 3
    },
    sexo: Sexo.Feminino,
  },
  {
    id: "09",
    dataInclusao: new Date(),
    disciplina: "disc y",
    nome: "Larissa",
    status: "ativo",
    sala: {
        id: "1",
        nome: "sala a",
        numero: 1
    },
    sexo: Sexo.Feminino,
  },
  {
    id: "10",
    dataInclusao: new Date(),
    disciplina: "disc y",
    nome: "Ricardo",
    status: "ativo",
    sala: {
        id: "2",
        nome: "sala b",
        numero: 2
    },
    sexo: Sexo.Masculino,
  },
];

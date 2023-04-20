// import express from 'express'
// import { Aluno } from '../models/aluno';
// import { Sexo } from '../models/sexo';
// import { listaAlunosMock } from '../utils/alunos.mock';
// import { listaSalaMock } from '../utils/salas.mock';

// const alunosRouter = express.Router()

// //criar um novo aluno
// alunosRouter.post('/alunos/add', (req, res) => {
//     const aluno = req.body
//     const sala = listaSalaMock.find(sala => sala.id === aluno.sala.id)

//     if (sala){
//         listaAlunosMock.push(aluno);
//         res.status(200).json(aluno);
//     } else{
//         res.status(500).json("Sala invalida");
//     }
// })
// //retorna todos os alunos criados
// alunosRouter.get('/alunos', (req, res) => {
//     res.json(listaAlunosMock)
// })
// //retorna o aluno pelo id
// alunosRouter.get('/alunos/:id', (req, res) => {
//     const { id } = req.params
//     const aluno = listaAlunosMock.find(aluno => aluno.id === id)

//     if (!aluno)
//         res.status(404).json({ error: true, message: "Aluno não existe"})

//     res.status(200).json(aluno)

// })
// // retorna alunos pelo id da sala
// alunosRouter.get('/alunos/sala/:id', (req, res) => {
//     const { id  } = req.params;
//     console.log("Buscando a sala id: ", id);
//     const sala = listaSalaMock.find(sala => sala.id === id)
//     console.log("Sala encontrada: ", sala);
//     if (!sala){
//         console.log("sala não existente", sala);
//         res.status(404).json({ error: true, message: "Sala não existe"});
//     }else{
//         console.log("Filtrando aluno por sala: ", sala);
//         const alunos = listaAlunosMock.filter(aluno => aluno.sala.id === id);
//         console.log("Retorno do filtro de alunos: ", alunos);
//         if(alunos.length > 0){
//             console.log("Resposta com os alunos: ", alunos);
//             res.status(200).json(alunos);
//         }else{
//             console.log("Resposta sem os alunos: ", alunos);
//             res.status(200).json({ error: true, message: "Não existe alunos na sala selecionada."})
//         }
//     }
// });
// // retorna alunos pelo nome da sala
// alunosRouter.get('/alunos/sala/por-nome/:nome', (req, res) => {
//     const { nome } = req.params;
//     console.log("Buscando a sala pelo nome: ", nome);
//     const sala = listaSalaMock.find(sala => sala.nome === nome)
//     console.log("Sala encontrada: ", sala);
//     if (!sala){
//         console.log("sala não existente", sala);
//         res.status(404).json({ error: true, message: "Sala não existe"});
//     }else{
//         console.log("Filtrando aluno por sala: ", sala);
//         const alunos = listaAlunosMock.filter(aluno => aluno.sala.nome === nome);
//         console.log("Retorno do filtro de alunos: ", alunos);
//         if(alunos.length > 0){
//             console.log("Resposta com os alunos: ", alunos);
//             res.status(200).json(alunos);
//         }else{
//             console.log("Resposta sem os alunos: ", alunos);
//             res.status(200).json({ error: true, message: "Não existe alunos na sala selecionada."})
//         }
//     }
// });
// //retorna todos alunos pelo nome do aluno
// alunosRouter.get('/alunos/sala/pelo-nome/aluno/:nome', (req, res) => {
//     const { nome } = req.params;
//     console.log("Buscando a alunos pelo nome: ", nome);
//     const alunos = listaAlunosMock.filter(alunos => alunos.nome === nome)
//     console.log("Alunos encontradas: ", alunos);
//     //validando se existe aluno com o nome fornecido
//     if (alunos.length === 0){
//         console.log("Não existe o aluno", alunos);
//         res.status(404).json({ error: true, message: "Não existe nenhum aluno com o nome fornecido"});
//     //se existir o aluno
//     }else{
//         console.log("Filtrando aluno por sala: ");
//         const alunos = listaAlunosMock.filter(alunos => alunos.nome === nome);
//         console.log("Retorno do filtro de alunos: ", alunos);
//         res.status(200).json(alunos);
//     }
// });
// //retorna alunos do sexo x:
// alunosRouter.get('/alunos/sala/pelo-sexo/alunos/:sexo', (req, res) => {
//     const { sexo } = req.params;
//     console.log("Buscando a alunos pelo sexo: ", sexo);
//     const alunos = listaAlunosMock.filter(alunos => alunos.sexo === sexo)
//     console.log("Alunos encontradas: ", alunos);
//     if(sexo !== Sexo.Masculino && sexo !== Sexo.Feminino)
//         res.status(404).json({ error: true, message: "Erro ao informar sexo do aluno, favor verificar"});

//     res.status(200).json(alunos)

// });
// //retorna os alunos do sexo x na sala x
// alunosRouter.get('/alunos/sala/pelo-sexo-sala/alunos/:id/:sexo', (req, res) => {
//     try {
//         const { id } = req.params;
//         const { sexo } = req.params;
//         console.log("Buscando a sala id: ", id);
//         const sala = listaSalaMock.find(sala => sala.id === id);
//         console.log("Sala encontrada: ", sala);
//         if (!sala){
//             res.status(404).json({ error: true, message: "Sala não existe"});
//             throw ("Houve um erro ao inserir a sala");
//         }else{
//             console.log("Buscando a alunos do sexo: ", sexo);
//             const alunos = listaAlunosMock.filter(alunos => alunos.sala.id === id && alunos.sexo === sexo)
//             console.log("Alunos encontrados: ", alunos);
//             if(sexo !== Sexo.Masculino && sexo !== Sexo.Feminino || alunos.length === 0){
//                 res.status(404).json({ error: true, message: "Erro ao informar sexo do aluno ou não existe aluno desse sexo na sala. favor verificar"});
//                 throw ("Houve um erro ao inserir o sexo do aluno");
//             }
//             res.status(200).json(alunos)
//         }
//     } catch (error) {
//         res.statusCode = 404
//         console.log(error)
//     }

// })
// //edita aluno criado
// alunosRouter.put('/alunos/:id', (req, res) => {
//     const { id } = req.params
//     const {nome, disciplina, dataInclusao, status } = req.body
//     const aluno: any = listaAlunosMock.find(aluno => aluno.id === id)

//     if (!aluno)
//         res.status(404).json({ error: true, message: "Aluno não existe"})

//     Object.assign(aluno, {
//         nome,
//         disciplina,
//         dataInclusao,
//         status
//     })
//     res.status(200).json(aluno)

// })
// //apaga aluno pela id
// alunosRouter.delete('/alunos/:id', (req, res) => {
//     const { id } = req.params
//     const indice: number = listaAlunosMock.findIndex(aluno => aluno.id === id)
//     console.log(indice)
//     if (indice < 0)
//         res.status(404).json({ error: true, message: "Aluno não existe, favor digitar um ID válido"})
//     else{
//         listaAlunosMock.splice(indice, 1);
//         res.status(200).json(`O aluno do id ${id} foi excluido com sucesso`);
//     }
//     res.status(204).send()
// })

// export default alunosRouter

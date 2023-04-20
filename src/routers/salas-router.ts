import express from 'express'
import { SalasController } from '../controllers/SalasController'
import Container from 'typedi';

const salaService = express.Router();

salaService.get('/salas', (req, res) => {
  const controller = Container.get<SalasController>("SalasController");
  controller.listarSalas.bind(controller);
  console.log("router salas");
  res.status(200).json();
})


// //retorna todas as salas

// //retorna sala pelo id
// salaRouter.get('/salas/:id', (req, res) => {

//   const { id } = req.params
//   const sala = listaSalaMock.find(sala => sala.id === id)

//   if (!sala)
//     res.status(404).json({ error: true, message: "Sala não existe" })

//   res.status(200).json(sala)
// })
// salaRouter.delete('/salas/:id', (req, res) => {
//   const { id } = req.params

//   const indice: number = listaSalaMock.findIndex(sala => sala.id == id);
//   console.log(indice)

//   if (indice < 0)
//     res.status(404).json({ error: true, message: "Sala não existe, favor digitar um ID válido" })
//   else {
//     listaSalaMock.splice(indice, 1);
//     res.status(200).json(`A sala do id ${id} foi excluida com sucesso`);
//   }
// })


export default salaService;

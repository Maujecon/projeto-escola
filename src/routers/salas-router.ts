import express from 'express'
import { SalasController } from '../controllers/SalasController'
import Container, { Inject } from 'typedi';
import { SalaRepository } from '../repositories/salaRepository'

const salaService = express.Router();

// public constructor(@Inject("salaRepository") private salaRepository: SalaRepository){ }

salaService.get('/salas', (req, res) => {
  // const controller = Container.get<SalasController>("SalasController");
  //exports.handler = controller.listarSalas.bind(controller);
  // SalaRepository.
    res.status(200).json("Sala controller");
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

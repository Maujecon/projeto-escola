import Container from "typedi";
import { getManager, getRepository } from "typeorm";
import { Sala } from "./models/sala";
import { SalasController } from './controllers/SalasController'

Container.set("entityManager", getManager());
Container.set("salasController", getRepository(Sala));
Container.set("SalasController", SalasController);


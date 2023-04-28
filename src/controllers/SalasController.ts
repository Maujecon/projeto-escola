import { SalaRepository } from '../repositories/salaRepository';
import { Inject, Service } from "typedi";
import { Request, Response } from "express";


@Service("SalasController")
export class SalasController {
  // constructor(@Inject("SalaRepository") private salaRepository: SalaRepository) { }

  public async listarSalas(req: Request, res: Response): Promise<void> {
    try {
      res.status(200).json("Sala controller");
    } catch (error) {

    }
    console.log("salas controler")
    // const salas = await this.salaRepository.listarSalas();

  }
}




import { SalaRepository } from '../repositories/salaRepository';
import { Inject, Service } from "typedi";



@Service("SalasController")
export class SalasController {
  // constructor(@Inject("SalaRepository") private salaRepository: SalaRepository) { }

  public async listarSalas() {
    console.log("salas controler")
    // const salas = await this.salaRepository.listarSalas();
    return "salas";
  }
}




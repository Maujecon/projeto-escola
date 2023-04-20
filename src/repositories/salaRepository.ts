import { EntityRepository, Repository } from "typeorm";
import { Sala } from "../models/sala";
import { Service } from "typedi";

@Service("SalaRepository")
export class SalaRepository extends Repository<Sala> {

  public async listarSalas(): Promise<Sala[]> {
    const teste = await this.manager.query("SELECT * FROM salas");
    console.log("salas repository", teste);
    return [];
  };
}

import { getManager } from "typeorm";
import { Sala } from "../models/sala";

export class AlunosController {
  async create(sala: Sala) {
    const salaSalva = await getManager().save(sala);
    return salaSalva
  }
}

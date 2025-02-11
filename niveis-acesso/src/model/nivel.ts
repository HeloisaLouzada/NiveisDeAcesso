import { type IEntidade } from "./modelGeneric/entity";

export interface INivel extends IEntidade {
  nivelAcesso: string;
}

export class Nivel implements INivel {
  id: string;
  nome: string;
  nivelAcesso: string;

  constructor(id: string, nome: string, nivelAcesso: string) {
    this.id = id;
    this.nome = nome;
    this.nivelAcesso = nivelAcesso;
  }
}

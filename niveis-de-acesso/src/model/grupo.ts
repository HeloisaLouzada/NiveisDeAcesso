import { type IEntidade } from "./modelGeneric/entity";

export interface IGrupo extends IEntidade {
  id: string;
  nome: string;
}

export class Grupo implements IGrupo {
  id: string;
  nome: string;

  constructor(id: string, nome: string) {
    this.id = id;
    this.nome = nome;
  }
}

import {type IEntidade} from './modelGeneric/entity';

export interface IEdital extends IEntidade {
  descricao: string;
}

export class Edital implements IEdital {
  id: string;
  nome: string;
  descricao: string;

  constructor(id: string, nome: string, descricao: string) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
  }
}

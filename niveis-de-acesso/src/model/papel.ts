import {type IEntity} from './modelGeneric/entity';

export interface IPapel extends IEntity {
  papelNivel: string;
}

export class Papel implements IPapel{
  id: string;
  nome: string;
  papelNivel: string;

  constructor(id: string, nome: string, papelNivel: string) {
    this.id = id;
    this.nome = nome;
    this.papelNivel = papelNivel;
  }
}

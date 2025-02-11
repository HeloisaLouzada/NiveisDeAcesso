import {type IEntidade} from './modelGeneric/entity';

export interface IUsuario extends IEntidade {
  cpf: string;
  usuarioPapel: string;
}

export class Usuario implements IUsuario {
  id: string;
  nome: string;
  cpf: string;
  usuarioPapel: string;

  constructor(id: string, nome: string, cpf: string, usuarioPapel: string) {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.usuarioPapel = usuarioPapel;
  }
}

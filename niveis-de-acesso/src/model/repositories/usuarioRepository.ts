// src/repositories/CidadeRepository.ts
import api from '@/services/api';
import type { IUsuario } from '../usuario';
import { Usuario } from '../usuario';
import UsuarioRoutes from './apiRoutes/usuarioRoute';

export default class CidadeRepository {
  apiClient;

  constructor() {
    this.apiClient = api;
  }

  createBaseRoute() {
    return new UsuarioRoutes({}).entity;
  }

  createDeleteRoute(id: string) {
    return new UsuarioRoutes({ id }).delete;
  }

  createUpdateRoute(id: string) {
    return new UsuarioRoutes({ id }).update;
}

  async fetchAllUsuario() {
    try {
      const baseRoute = this.createBaseRoute();
      const response = await this.apiClient.get(baseRoute);

      if (!response.data || !response.data.value) {
        console.warn("Nenhum dado válido retornado do servidor.");
        return [];
      }

      return response.data.value
        .filter((usuario: IUsuario) => usuario.id && usuario.nome)
        .map((usuario: IUsuario) => new Usuario(usuario.id, usuario.nome, usuario.cpf, usuario.usuarioPapel));

    } catch (error) {
      console.error("Erro ao buscar usuarios:", error);
      return [];
    }
  }

  async createUsuario(form: IUsuario) {
    try {
      const baseRoute = this.createBaseRoute();
      const response = await this.apiClient.post(baseRoute, form);

      return response.data || null;
    } catch (error) {
      console.error("Erro ao criar usuario:", error);
      return null;
    }
  }

  async updateUsuario(id: string, form: IUsuario) {
    try {
        const updateRoute = this.createUpdateRoute(id);
        const response = await this.apiClient.put(updateRoute, form);
        return response.data || null;
    } catch (error) {
        console.error("Erro ao atualizar usuario:", error);
        return null;
    }
}

  async deleteUsuario(id: string) {
    try {
      const deleteRoute = this.createDeleteRoute(id);
      const response = await this.apiClient.delete(deleteRoute);

      return response.status === 204;
    } catch (error) {
      console.error("Erro ao excluir usuario:", error);
      return false;
    }
  }

  async login(cpf: string, senha: string) {
    try {
      const baseRoute = this.createBaseRoute();
      const response = await this.apiClient.post(baseRoute, { cpf, senha });

      return response.data || null;
    } catch (error) {
      console.error("Erro ao logar usuario:", error);
      return null;
    }
  }
}

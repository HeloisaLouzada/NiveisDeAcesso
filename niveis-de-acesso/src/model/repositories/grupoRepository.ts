// src/repositories/CidadeRepository.ts
import api from '@/services/api';
import type { IGrupo } from '../grupo';
import { Grupo } from '../grupo';
import GrupoRoutes from './apiRoutes/grupoRoute';

export default class CidadeRepository {
  apiClient;

  constructor() {
    this.apiClient = api;
  }

  createBaseRoute() {
    return new GrupoRoutes({}).entity;
  }

  createDeleteRoute(id: string) {
    return new GrupoRoutes({ id }).delete;
  }

  createUpdateRoute(id: string) {
    return new GrupoRoutes({ id }).update;
}

  async fetchAllGrupo() {
    try {
      const baseRoute = this.createBaseRoute();
      const response = await this.apiClient.get(baseRoute);

      if (!response.data || !response.data.value) {
        console.warn("Nenhum dado válido retornado do servidor.");
        return [];
      }

      return response.data.value
        .filter((grupo: IGrupo) => grupo.id && grupo.nome)
        .map((grupo: IGrupo) => new Grupo(grupo.id, grupo.nome));

    } catch (error) {
      console.error("Erro ao buscar Grupos:", error);
      return [];
    }
  }

  async createGrupo(form: IGrupo) {
    try {
      const baseRoute = this.createBaseRoute();
      const response = await this.apiClient.post(baseRoute, form);

      return response.data || null;
    } catch (error) {
      console.error("Erro ao criar Grupo:", error);
      return null;
    }
  }

  async updateGrupo(id: string, form: IGrupo) {
    try {
        const updateRoute = this.createUpdateRoute(id);
        const response = await this.apiClient.put(updateRoute, form);
        return response.data || null;
    } catch (error) {
        console.error("Erro ao atualizar Grupo:", error);
        return null;
    }
}

  async deleteGrupo(id: string) {
    try {
      const deleteRoute = this.createDeleteRoute(id);
      const response = await this.apiClient.delete(deleteRoute);

      return response.status === 204;
    } catch (error) {
      console.error("Erro ao excluir Grupo:", error);
      return false;
    }
  }
}

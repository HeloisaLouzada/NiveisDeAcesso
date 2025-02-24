import type { IGrupo} from '../model/grupo';
import GrupoRepository from '../model/repositories/grupoRepository';

export default class GrupoController {
  grupoRepository;
  constructor() {
    this.grupoRepository = new GrupoRepository();
  }

  async getAll() {
    return await this.grupoRepository.fetchAllGrupo();
  }

  async create(form: IGrupo) {
    if (import.meta.env.VITE_MOCK === "true") return
    return await this.grupoRepository.createGrupo(form);
  }

  async update(id: string, item: IGrupo) {
    if (import.meta.env.VITE_MOCK === "true") return
    return await this.grupoRepository.updateGrupo(id, item);
  }

  async delete(id: string) {
    if (import.meta.env.VITE_MOCK === "true") return
    return await this.grupoRepository.deleteGrupo(id);
  }
}

import type { IUsuario} from '../model/usuario';
import UsuarioRepository from '../model/repositories/usuarioRepository';

export default class UsuarioController {
  usuarioRepository;
  constructor() {
    this.usuarioRepository = new UsuarioRepository();
  }

  async getAll() {
    return await this.usuarioRepository.fetchAllUsuario();
  }

  async create(form: IUsuario) {
    if (import.meta.env.VITE_MOCK === "true") return
    return await this.usuarioRepository.createUsuario(form);
  }

  async update(id: string, item: IUsuario) {
    if (import.meta.env.VITE_MOCK === "true") return
    return await this.usuarioRepository.updateUsuario(id, item);
  }

  async delete(id: string) {
    if (import.meta.env.VITE_MOCK === "true") return
    return await this.usuarioRepository.deleteUsuario(id);
  }
}

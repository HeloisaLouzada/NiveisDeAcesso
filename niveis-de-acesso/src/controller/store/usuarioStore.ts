import {GenericStore} from './generic/genericStore.ts';
import {Usuario} from '../../model/usuario.ts';
import UsuarioController from '../usuarioController.ts';
import api from '@/services/api';

const usuarioController = new UsuarioController();
const genericStore = new GenericStore<Usuario>('usuario');

export const useUsuarioStore = genericStore.createStore(usuarioController);

// export const login = async (cpf: string, senha: string) => {
//   try {
//       const response = await api.post('http://localhost:3000/login', { cpf, senha });//tirar daqui

//       if (response.data.token) {
//           localStorage.setItem('token', response.data.token);
//           useUsuarioStore.usuario = response.data.usuario;
//           return response.data;
//       } else {
//           throw new Error('Credenciais inválidas');
//       }
//   } catch (error) {
//       console.error('Erro ao fazer login:', error);
//       throw error;
//   }
// };

// export const logout = () => {
//   localStorage.removeItem('token');
//   useUsuarioStore.usuario = null;
// };

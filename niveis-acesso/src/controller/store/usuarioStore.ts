import {GenericStore} from './generic/genericStore.ts';
import {Usuario} from '../../model/usuario.ts';
import UsuarioController from '../usuarioController.ts';

const usuarioController = new UsuarioController();
const genericStore = new GenericStore<Usuario>('usuario');

export const usuarioStore = genericStore.createStore(usuarioController);

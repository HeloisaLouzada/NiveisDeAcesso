import {GenericStore} from './generic/genericStore.ts';
import {Grupo} from '../../model/grupo.ts';
import GrupoController from '../grupoController.ts';
// import api from '@/services/api';

const grupoController = new GrupoController();
const genericStore = new GenericStore<Grupo>('Grupo');

export const useGrupoStore = genericStore.createStore(GrupoController);

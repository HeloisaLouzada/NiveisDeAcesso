import {GenericStore} from './generic/genericStore.ts';
import type {IGrupo} from '../../model/grupo.ts';
import GrupoController from '../grupoController.ts';
// import api from '@/services/api';

const grupoController = new GrupoController();
const genericStore = new GenericStore<IGrupo>('grupo');

export const useGrupoStore = genericStore.createStore(grupoController);

<script lang="ts">
import { onMounted, ref } from 'vue';

import { useGrupoStore } from '@/controller/store/grupoStore';
import { Grupo } from '@/model/grupo';
import NavbarBase from '@/components/NavbarBase.vue';

onMounted(async() => {
    await getPosts();

});

const Grupos = ref();
async function getPosts() {
    await useGrupoStore.fetch('');
    Grupos.value = useGrupoStore.items;
}

const header = ref([
    { title: 'NOME', key: 'Nome' },
    { title: 'AÇÕES', key: 'actions' }
]);

const showModal = ref(false);
const isEditing = ref(false);

const newGrupo = ref<Grupo>({
    id: '',
    nome: ''
});

async function createGrupo() {
    try {
        await useGrupoStore.save(newGrupo.value);
        showModal.value = false;
        getPosts();
    } catch (error) {
        console.error(error);
    }
}

async function salvarGrupo() {
    if (isEditing.value) await submitEditGrupo();
    else await createGrupo();
}

function editGrupo(item: Grupo) {
    const Grupo = item;
    newGrupo.value = { ...Grupo };
    isEditing.value = true;
    showModal.value = true;
}

async function submitEditGrupo() {
    try {
        await useGrupoStore.updateItem(newGrupo.value.id, newGrupo.value)
        showModal.value = false;
        getPosts();
    } catch (error) {
        console.error(error);
    }
}

async function deleteGrupo(item: unknown) {
    try {
        await useGrupoStore.deleteItem(item.id);
        getPosts();
    } catch (error) {
        console.error(error);
    }
}
</script>

<template>
  <div>
    <NavbarBase/>
  </div>
        <v-row>
            <v-col cols="2" class="d-flex justify-start">
                <v-btn @click="() => { showModal = true; isEditing = false; newGrupo = { id: '', Nome: '' } }"
                    class="custom-width-2"
                    color="primary"
                    variant="flat"
                >
                    Cadastrar Grupo
                </v-btn>
            </v-col>
        </v-row>
        <v-data-table :headers="header" :items="Grupos">
          <template #item.actions="{ item }">
                    <v-btn @click="editGrupo(item)" color="primary" icon>
                      <mdicon name="pencil"></mdicon>
                    </v-btn>
                    <v-btn @click="deleteGrupo(item)" color="red" icon>
                      <mdicon name="delete"></mdicon>
                    </v-btn>
                </template>

            <template v-slot:no-data>
                <v-label>Sem dados!</v-label>
            </template>
        </v-data-table>

    <!-- Modal de Cadastro/Edição -->
    <v-dialog v-model="showModal" max-width="500">
        <v-card>
            <v-card-title>
                {{ isEditing ? 'Editar Resolução' : 'Cadastrar Resolução' }}
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field
                        label="Nome"
                        v-model="newGrupo.Nome"
                        required
                    ></v-text-field>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn @click="showModal = false" >Cancelar</v-btn>
                <v-btn @click="salvarGrupo" color="primary" >Salvar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

</script>

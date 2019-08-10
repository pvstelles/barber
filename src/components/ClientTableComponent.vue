<template>
    <table-component>
        <template v-slot:thead>
            <th>Foto</th>
            <th>Nome</th>
            <th>Ações</th>
        </template>
        <template v-slot:tbody>
            <tr :key="client.id" v-for="client in clients">
                <td><img src="@/assets/user.png" alt="" class="img-fluid img-thumbnail rounded-circle img-table"></td>
                <td class="item-table">{{ client.name }}</td>
                <td class="item-table"><router-link to="/clients/1"><font-awesome-icon icon="bars" class="icon-table mt-1"/></router-link></td>
            </tr>
        </template>
    </table-component>
</template>
<script>
import TableComponent from '@/components/TableComponent.vue'
export default {
  name: 'client-table',
  props: ['clients'],
  components: { TableComponent }
}
</script>

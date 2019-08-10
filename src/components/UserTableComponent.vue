<template>
    <table-component>
        <template v-slot:thead>
            <th>Foto</th>
            <th>Nome</th>
            <th>Ações</th>
        </template>
        <template v-slot:tbody>
            <tr :key="user.id" v-for="user in users">
                <td><img src="@/assets/user.png" alt="" class="img-fluid img-thumbnail rounded-circle img-table"></td>
                <td class="item-table">{{ user.name }}</td>
                <td class="item-table"><router-link :to="'/users/' + user.id"><font-awesome-icon icon="bars" class="icon-table mt-1"/></router-link></td>
            </tr>
        </template>
    </table-component>
</template>
<script>
import TableComponent from '@/components/TableComponent'
export default {
  name: 'user-table',
  props: ['users'],
  components: { TableComponent }
}
</script>

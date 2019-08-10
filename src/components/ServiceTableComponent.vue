<template>
    <table-component>
        <template v-slot:thead>
            <th>Serviço</th>
            <th>Valor</th>
            <th>Ações</th>
        </template>
        <template v-slot:tbody>
            <tr :key="service.id" v-for="service in services">
                <td>{{ service.name }}</td>
                <td>R$ {{ service.price }}</td>
                <td class="text-center">
                    <router-link :to="'/services/' + service.id">
                        <font-awesome-icon icon="bars" class="icon-table"></font-awesome-icon>
                    </router-link>
                </td>
            </tr>
        </template>
    </table-component>
</template>
<script>
import TableComponent from '@/components/TableComponent.vue'
export default {
  name: 'service-table',
  props: [ 'services' ],
  components: { TableComponent }
}
</script>

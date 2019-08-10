<template>
    <table class="table table-striped">
        <thead>
        <tr>
            <td>Dia</td>
            <td>Horario</td>
            <td>Qtd</td>
        </tr>
        </thead>
        <tbody>
        <tr class="table-success">
            <td>30/07/2019</td>
            <td>09:00</td>
            <td>2</td>
        </tr>
        <tr :key="x" v-for="x in 5">
            <td>22/04/2019</td>
            <td>09:00</td>
            <td>2</td>
        </tr>

        </tbody>

    </table>
</template>
<script>
export default {
  name: 'client-schedule-table'
}
</script>

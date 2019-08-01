<template>
    <span>
        <div class="row">
            <div class="col-12">
                <h1 class="float-left"><strong>Serviços</strong></h1>
                <router-link class="btn btn-outline-dark float-right" to="/home">Voltar</router-link>
            </div>
            <div class="col-12">
                <router-link class="btn btn-success mt-3" to="/services/create">Add</router-link>
            </div>
            <div class="col-12">
                <table class="table table-striped mt-5">
                    <thead>
                    <tr>
                        <th>Serviço</th>
                        <th>Valor</th>
                        <th>Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr :key="x" v-for="x in 5">
                        <td>Serviço ({{ x }})</td>
                        <td>R$ 15,00</td>
                        <td class="text-center">
                            <router-link :to="'/services/' + x">
                                <font-awesome-icon icon="bars" class="icon-table"></font-awesome-icon>
                            </router-link>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </span>
</template>
<script>
export default {
  name: 'service-list'
}
</script>
<style>
.icon-table {
    font-size: 25px;
}
</style>

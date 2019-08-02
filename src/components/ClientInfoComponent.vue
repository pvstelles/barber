<template>
    <span>
        <div class="card mt-5">
            <div class="card-body">
                <div class="mx-auto text-center mb-5">
                    <img src="@/assets/user.png" alt="" class="img-fluid img-thumbnail rounded-circle">
                </div>
                <div class="form-group">
                    <label>Nome:</label>
                    <p><strong>{{ client.name }}</strong></p>
                </div>
                <div class="form-group">
                    <label>Tel:</label>
                    <p><strong>{{ this.client.phone }}</strong></p>
                </div>
                <div class="form-group">
                    <button class="btn btn-outline-dark">Editar</button>
                </div>
            </div>
        </div>

        <div class="my-5">
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
        </div>
    </span>
</template>
<script>
export default {
  name: 'client-info',
  props: ['client']
}
</script>

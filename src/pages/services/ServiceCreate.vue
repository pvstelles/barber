<template>
    <span>
        <div class="row">
            <div class="col-12">
                <h1 class="float-left"><strong>Serviços</strong></h1>
                <router-link class="btn btn-outline-dark float-right" to="/services">Voltar</router-link>
            </div>
            <div class="col-12 mt-5">
                <form action="">
                    <div class="form-group">
                        <label for="">Serviço:</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="">Valor:</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary">Cadastrar</button>
                        <router-link class="btn btn-outline-primary" to="/services">Voltar</router-link>
                    </div>
                </form>
            </div>
        </div>
    </span>
</template>
<script>
export default {
  name: 'service-create'
}
</script>

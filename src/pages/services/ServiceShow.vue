<template>
    <span>
        <div class="row">
            <div class="col-12">
                <h1 class="float-left"><strong>Serviços</strong></h1>
                <router-link class="btn btn-outline-dark float-right" to="/services">Voltar</router-link>
            </div>
            <div class="col-12 mt-5">
                <div class="card">
                    <div class="card-body text-center">
                        <h1>Serviço ({{ id }})</h1>
                        <div class="text-left mt-5 vl-service">
                            <label for=""><strong>Valor:</strong></label>
                            <p class="text-info"><strong>R$ 15,00</strong></p>
                        </div>
                        <div class="w-100 mt-3 text-left">
                            <button class="btn btn-primary">Editar</button>
                            <router-link class="btn btn-outline-primary" to="/services">
                                Voltar
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </span>
</template>
<script>
export default {
  name: 'service-show',
  data () {
    return {
      id: ''
    }
  },
  created () {
    this.id = this.$route.params.id
    console.log(this.id)
  }
}
</script>
<style>
.vl-service label {
    font-size: 25px;
}
.vl-service p {
    font-size: 32px;
}
</style>

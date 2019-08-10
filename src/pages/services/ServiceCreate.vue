<template>
    <span>
        <div class="row">
            <div class="col-12">
                <h1 class="float-left"><strong>Serviços</strong></h1>
                <router-link class="btn btn-outline-dark float-right" to="/services">Voltar</router-link>
            </div>
            <div class="col-12 mt-5">
                <service-form action="addService" btn-back="/services"/>
            </div>
        </div>
    </span>
</template>
<script>
import ServiceForm from '@/components/ServiceFormComponent.vue'
export default {
  name: 'service-create',
  components: { ServiceForm }
}
</script>

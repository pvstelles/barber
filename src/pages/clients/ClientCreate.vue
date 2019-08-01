<template>
    <span>
        <h1><strong>Cliente (novo)</strong></h1>
        <client-form>
            <div class="form-group">
                <button class="btn btn-primary">Confirmar</button>
                <router-link to="/clients" class="btn btn-outline-primary">Voltar</router-link>
            </div>
        </client-form>
    </span>
</template>
<script>
import ClientForm from '@/components/ClientFormComponent.vue'
export default {
  name: 'client-create',
  components: { ClientForm }
}
</script>

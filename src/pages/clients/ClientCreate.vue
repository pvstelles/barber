<template>
    <span>
        <h1><strong>Cliente (novo)</strong></h1>
        <client-form action="addClient"/>
    </span>
</template>
<script>
import ClientForm from '@/components/ClientFormComponent.vue'
export default {
  name: 'client-create',
  components: { ClientForm }
}
</script>

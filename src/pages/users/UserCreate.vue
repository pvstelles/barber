<template>
    <span>
        <h1><strong>Barbeiro (novo)</strong></h1>
        <user-form action="addUser"/>
    </span>
</template>
<script>
import UserForm from '@/components/UserFormComponent.vue'
export default {
  name: 'user-create',
  components: { UserForm }
}
</script>

<template>
    <span>
        <form action="">
            <div class="form-group">
                <label for="name">Nome:</label>
                <input type="text" name="name" id="name" class="form-control">
            </div>
            <div class="form-group">
                <label for="tel">Telefone:</label>
                <input type="text" class="form-control" name="tel" id="tel">
            </div>
            <slot></slot>
        </form>
    </span>
</template>
<script>
export default {
  name: 'client-form'
}
</script>

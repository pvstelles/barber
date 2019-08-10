<template>
    <table class="table table-hover table-striped mt-3">
        <thead>
        <tr>
            <slot name="thead"></slot>
        </tr>
        </thead>
        <tbody>
            <slot name="tbody"></slot>
        </tbody>
    </table>
</template>
<script>
export default {
  name: 'table-component'
}
</script>

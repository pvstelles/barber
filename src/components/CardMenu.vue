<template>
    <div class="d-flex align-items-center">
        <div class="card flex-fill shadow">
            <div class="card-body">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'card-menu'
}
</script>
<style>
.icon-card {
  font-size: 90px;
}
.card {
    border-left: 2pt solid black;
    border-bottom: 2pt solid black;
    border-right: 1pt dashed #6cb2eb;
    border-top: 1pt dashed #6cb2eb;
}
</style>

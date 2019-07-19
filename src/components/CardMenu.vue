<template>
    <div class="d-flex align-items-center">
        <div class="card flex-fill">
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

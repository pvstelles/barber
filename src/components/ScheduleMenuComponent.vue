<template>
    <div class="position-fixed schedule-menu bg-white" style="z-index: 9999">
        <div class="row ml-2 p-2 pt-3 shadow rounded-lg bg-white" >
            <div class="">
                <div @click.prevent="actionToggle" class="bg-white">
                    <img src="@/assets/user.png" alt="" class="img-fluid img-thumbnail rounded-circle img-table">
                    <br>
                    <p class="badge badge-dark m-1">Fulando de tal</p>
                </div>
                <div class="icon text-dark mt-5">
                    <font-awesome-icon icon="calendar-alt"></font-awesome-icon>
                </div>
            </div>
            <div class="d-block bg-dark text-white-50 rounded-lg shadow p-3" v-if="menuToggle" style="min-width: 300px">
                <div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input" id="customSwitch1">
                    <label class="custom-control-label" for="customSwitch1"><strong class="ml-3">Paulo Victor</strong></label>
                </div>
                <div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input" id="customSwitch2">
                    <label class="custom-control-label" for="customSwitch2"><strong class="ml-3">Leandro</strong></label>
                </div>
                <div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input" id="customSwitch3">
                    <label class="custom-control-label" for="customSwitch3"><strong class="ml-3">Bruno</strong></label>
                </div>
                <div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input" id="customSwitch4">
                    <label class="custom-control-label" for="customSwitch4"><strong class="ml-3">Juliano</strong></label>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'schedule-menu',
  data () {
    return {
      menuToggle: false
    }
  },
  methods: {
    actionToggle () {
      this.menuToggle = !this.menuToggle
    }
  }
}
</script>
<style>
.schedule-menu {
    top: 190px;
    z-index: 9999;
}
.schedule-menu img {
    width: 60px;
    margin-left: 22px;
}
.schedule-menu .icon {
    font-size: 60px;
    margin-left: 25px;
}
.custom-switch label {
    width: 100%;
    font-size: 30px;
}
.custom-switch label::before {
    width: 2rem !important;
    margin-top: 10px;
}
.custom-switch label::after {
    margin-top: 10px;
}
</style>

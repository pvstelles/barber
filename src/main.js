// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faUserAlt, faClock, faTasks, faChartBar, faIdCardAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add({faUserSecret, faUserAlt, faClock, faTasks, faChartBar, faIdCardAlt})

Vue.component('font-awesome-icon', FontAwesomeIcon)

window.$ = window.jquery = require('jquery')
require('bootstrap')
require('bootstrap/dist/css/bootstrap.min.css')
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

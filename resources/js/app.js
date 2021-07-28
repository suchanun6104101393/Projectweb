require('./bootstrap');

window.Vue = require('vue').default;
window.axios = require('axios');
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('user', require('./components/User.vue').default);

const app = new Vue({
    el: '#app',
});

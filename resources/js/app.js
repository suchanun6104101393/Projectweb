require('./bootstrap');

window.Vue = require('vue').default;
window.axios = require('axios');
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('user', require('./components/User.vue').default);
Vue.component('create', require('./components/Create.vue').default);

const app = new Vue({
    el: '#app',
});

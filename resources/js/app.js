require('./bootstrap');

window.Vue = require('vue').default;

let axios = require('axios');

Vue.component('contacts', require('./components/Contacts.vue').default);

const app = new Vue({
    el: '#app',
});
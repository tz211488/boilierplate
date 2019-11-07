import Vue from 'vue';
import '../sass/main.scss';
import App from './components/App';

Vue.component('main-app', App);

(() =>
  new Vue({
    el: '#app',
  }))();

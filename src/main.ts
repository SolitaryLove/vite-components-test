import { createApp } from 'vue'
import './style.css'
import App from './App.vue';

const app = createApp(App);

import Loading from './components/Loading';
app.use(Loading);

import lazyload from './directives/lazyload';
app.directive('lazy',lazyload);
import Draggable from './directives/draggable';
app.directive('drag',Draggable);
import Ripple from './directives/ripple';
app.directive('ripple',Ripple);

app.mount('#app');

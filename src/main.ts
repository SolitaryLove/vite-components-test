import { createApp } from 'vue'
import './style.css'
import App from './App.vue';

import CanUI from '../modules/can-ui';

const app = createApp(App);
app.use(CanUI);

/* import Loading from './components/Loading';
app.use(Loading); */

import lazyload from './directives/lazyload';
app.directive('lazy',lazyload);
import Draggable from './directives/draggable';
app.directive('drag',Draggable);
import Ripple from './directives/ripple';
app.directive('ripple',Ripple);

app.mount('#app');

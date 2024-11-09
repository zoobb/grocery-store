import {createMemoryHistory, createRouter} from 'vue-router';
import PageHome from './components/views/HomePage.vue';

const router = createRouter({
  'history': createMemoryHistory(),
  'routes': [
    {
      'path': '/',
      'component': PageHome
    }
    ],
});

export default router;

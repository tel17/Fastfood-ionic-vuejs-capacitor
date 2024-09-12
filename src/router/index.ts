import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/Home.vue';
import Foodsummary from '../views/Foodsummary.vue';
import PlaceOrder  from '../views/Placeorder.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/foodsummary',
    name: 'Foodsummary',
    component: Foodsummary
  },
  {
    path: '/placeorder', // Add route for PlaceOrder
    name: 'PlaceOrder',
    component: PlaceOrder
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;

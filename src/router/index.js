import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import Ebook from '../views/Ebook.vue'
import MovieList from '../views/MovieList.vue'
const routes = [
  {path:'/login',component:Login},
  {path:'/',component:Index},
  {path:'/ebook',component:Ebook},
  {path:'/movieList',component:MovieList}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

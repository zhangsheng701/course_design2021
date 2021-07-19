import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import Ebook from '../views/Ebook.vue'
import MovieList from '../views/MovieList.vue'
import MovieDetail from '../views/MovieDetail.vue'
const routes = [
  {path:'/login',component:Login},
  {path:'/1',component:Index},
  {path:'/ebook',component:Ebook},
  {path:'/movieList',component:MovieList},
  {path:'/',component:MovieDetail}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

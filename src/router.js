import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index'
import Register from './views/register'
import Login from './views/login'
import Home from './views/Home'
import Notfound from './views/404'
import InfoShow from './views/InfoShow'
import Workers from './views/Workers'
import Editor from './views/Editor'
import Dialog from './views/Dialog'
import MonitoringInformation from './views/MonitoringInformation'
import Lsk from './views/Lsk'
import Ssqxt from './views/Ssqxt'
import Aqjypx from './views/Aqjypx'
import Rytj from './views/Rytj'
import Sslxx from './views/Sslxx'
import Jljl from './views/Jljl'
import Current from './views/Current'

Vue.use(Router)

const router  = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '*', name: '/404', component: Notfound },
    { path: '/', redirect: '/index' },
    { path: '/register', name: 'register', component: Register },
    { path: '/login', name: 'login', component: Login },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        { path: '', component: Home },
        { path: '/home', name: 'home', component: Home },
        { path: '/infoshow', name: 'infoshow', component: InfoShow },
        { path: '/dialog', name: 'dialog', component: Dialog },
        { path: '/editor', name: 'editor', component: Editor },
        { path: '/workers', name: 'workers', component: Workers },
        { path: '/current', name: 'current', component: Current },
        { path: '/monitoringInformation', name: 'monitoringInformation', component: MonitoringInformation },
        { path: '/lsk', name: 'lsk', component: Lsk },
        { path: '/rytj', name: 'rytj', component: Rytj },
        { path: '/sslxx', name: 'sslxx', component: Sslxx },
        { path: '/jljl', name: 'jljl', component: Jljl },
        { path: '/aqjypx', name: 'aqjypx', component: Aqjypx },
        { path: '/ssqxt', name: 'ssqxt', component: Ssqxt },
      ]
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})

// 添加路由守卫
/*router.beforeEach((to, from, next) => {
  const isLogin = localStorage.eleToken ? true : false;
  if (to.path == "/login" || to.path == "/register") {
    next();
  } else {
    isLogin ? next() : next("/login");
  }
})*/

export default router;

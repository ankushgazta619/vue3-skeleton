import { createRouter, createWebHistory } from 'vue-router'

const routes = [

  //LAYOUT FOR LANDING PAGES
  {
      path: '/',
      name: 'LandingPageLayout',
      component: () => import('@/layouts/LandingPageLayout.vue'),
      children: [
          {
              path: '/',
              name: 'Home',
              component: () => import('@/views/Home.vue'),
              meta: {auth:false}
          }
      ]
  },

  //LAYOUT FOR AUTH ROUTES
  {
      path: '/',
      name: 'AuthLayout',
      component: () => import('@/layouts/AuthLayout.vue'),
      children: [
          {
              path: '/login',
              name: 'Login',
              component: () => import('@/views/auth/Login.vue'),
              meta: {auth:false}
          },
          {
              path: '/register',
              name: 'Register',
              component: () => import('@/views/auth/Register.vue'),
              meta: {auth:false}
          }
      ]
  },

    //LAYOUT WITHOUT ANY SIDEBAR BUT HAS HEADER AND FOOTER
    {
      path: '/',
      name: 'AppLayout',
      component: () => import('@/layouts/AppLayout.vue'),
      children: [
          {
              path: '/dashboard',
              name: 'Dashboard',
              component: () => import('@/views/Dashboard.vue'),
              meta: {auth:true}
          }
      ]
  },

  //LAYOUT FOR APPLICATION WITH SIDEBAR
  {
    path: '/',
    name: 'SidebarLayout',
    component: () => import('@/layouts/SidebarLayout.vue'),
    children: [
        {
            path: '/dash',
            name: 'Dash',
            component: () => import('@/views/Dashboard.vue'),
            meta: {auth:true}
        }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to);
    let isAuthenticated = true;
    if( to.meta.auth && !isAuthenticated ) {
        next({ name: 'Login' })
    } else {
        next()
    }
})

export default router

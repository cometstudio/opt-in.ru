import { createRouter, createWebHistory } from 'vue-router'
import auth from './auth'
import senders from './senders'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AppIndexView from '@/views/app/AppIndex_v2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'app',
      redirect: {
        name: 'app.index'
      },
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'app.index',
          component: AppIndexView
        },
        {
          path: 'about',
          name: 'app.about',
          component: () => import('@/views/app/AppAbout.vue'),
        },
        {
          path: 'agreement',
          name: 'app.agreement',
          component: () => import('@/views/app/AppAgreement.vue'),
        },
        {
          path: 'affiliates',
          name: 'app.affiliates',
          component: () => import('@/views/app/AppAffiliates.vue'),
        },
      ]
    },
    ...auth,
    ...senders,
  ]
})

export default router

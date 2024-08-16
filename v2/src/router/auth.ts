import DefaultLayout from '@/layouts/DefaultLayout.vue'

export default [
  {
    path: '/auth',
    name: 'auth',
    redirect: {
      name: 'auth.login'
    },
    component: DefaultLayout,
    children: [
      {
        path: 'login',
        name: 'auth.login',
        component: () => import('@/views/auth/AuthLogin.vue'),
        children: [

        ]
      },
    ]
  },
]

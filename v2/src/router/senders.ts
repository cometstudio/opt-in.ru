import DefaultLayout from '@/layouts/DefaultLayout.vue'

export default [
  {
    path: '/senders',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'senders',
        component: () => import('@/views/senders/Senders.vue'),
      },
      {
        path: ':id(\\d+)',
        name: 'sender',
        component: () => import('@/views/senders/Sender_v2.vue'),
        props: true
      }
    ]
  },
]

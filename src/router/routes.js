export default [
  {
    path: '/',
    name: 'index',
    component: () => import('@/pages/index/index'),
    meta: {
      title: 'index'
    }
  },
  {
    path: '/json',
    name: 'json',
    component: () => import('@/pages/json/index'),
    meta: {
      title: 'json'
    }
  },
  {
    path: '/money',
    name: 'money',
    component: () => import('@/pages/money/index'),
    meta: {
      title: 'money'
    }
  },
  {
    path: '/date',
    name: 'datetime',
    component: () => import('@/pages/datetime/index'),
    meta: {
      title: 'datetime'
    }
  },
  {
    path: '/id',
    name: 'id',
    component: () => import('@/pages/id/index'),
    meta: {
      title: 'id'
    }
  },
  {
    path: '/password',
    name: 'password',
    component: () => import('@/pages/password/index'),
    meta: {
      title: 'password'
    }
  },
  {
    path: '/url',
    name: 'url',
    component: () => import('@/pages/url/index'),
    meta: {
      title: 'url'
    }
  },
  {
    path: '/base64',
    name: 'base64',
    component: () => import('@/pages/base64/index'),
    meta: {
      title: 'base64'
    }
  },
  {
    path: '/md5',
    name: 'md5',
    component: () => import('@/pages/md5/index'),
    meta: {
      title: 'md5'
    }
  }
]

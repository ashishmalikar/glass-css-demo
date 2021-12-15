import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/Icons",
    name: "Icons",
    component: () => import("../views/Icons.vue"),
  },
];

let cmpRoutes = {
  path: "/Components",
  name: "Components",
  component: () => import("../views/components/Index.vue"),
  children: [
    {
      path: "ActionBarDemo",
      name: "ActionBarDemo",
      component: () => import("../views/components/ActionBarDemo.vue")
    },
    {
      path: "AccordionDemo",
      name: "AccordionDemo",
      component: () => import("../views/components/AccordionDemo.vue")
    },
    {
      path: "AlertsDemo",
      name: "AlertsDemo",
      component: () => import("../views/components/AlertsDemo.vue")
    },
    {
      path: "BreadcrumbDemo",
      name: "BreadcrumbDemo",
      component: () => import("../views/components/BreadcrumbDemo.vue")
    },
    {
      path: "ButtonDemo",
      name: "ButtonDemo",
      component: () => import("../views/components/ButtonDemo.vue")
    },
    {
      path: "ShellbarDemo",
      name: "ShellbarDemo",
      component: () => import("../views/components/ShellbarDemo.vue")
    },
    {
      path: "HeaderDemo",
      name: "HeaderDemo",
      component: () => import("../views/components/HeaderDemo.vue")
    },
    {
      path: "DateTimePickerDemo",
      name: "DateTimePickerDemo",
      component: () => import("../views/components/DateTimePickerDemo.vue")
    },
    {
      path: "CalendarDemo",
      name: "CalendarDemo",
      component: () => import("../views/components/CalendarDemo.vue")
    },
    {
      path: 'SpinnerDemo',
      name: 'SpinnerDemo',
      component: () => import("../views/components/SpinnerDemo.vue")
    }
  ]
}

routes.push(cmpRoutes)

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

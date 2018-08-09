import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/components/Home')
const About = () => import('@/components/About')
const Contact = () => import('@/components/Contact')
const Give = () => import('@/components/Give')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/give',
      name: 'give',
      component: Give
    }
  ]
})

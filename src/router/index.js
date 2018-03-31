import Vue from 'vue'
import Router from 'vue-router'
import ContactUs from '@/components/ContactUs'
import Gallery from '@/components/Gallery'
import HelloWorld from '@/components/HelloWorld'
import Testimonials from '@/components/Testimonials'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/contact-us',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/Gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/testimonials',
      name: 'Testimonials',
      component: Testimonials
    }
  ]
})

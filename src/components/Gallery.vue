<template>
    <div>
      <Header
        message='gallery'
      >
      </Header>
      <Nav></Nav>
        <div id="page">
          <carousel :perPage="1" :perPageCustom="[[480, 1], [768, 1]]">
            <slide>
                <img alt="stairs before" src="http://res.cloudinary.com/ymb/image/upload/c_scale,q_auto,w_250/v1522498053/stairs_before.png" draggable="false"/>
                <img alt="stairs after" src="http://res.cloudinary.com/ymb/image/upload/c_scale,q_auto,w_250/v1522498053/stairs_after.png" draggable="false"/>
            </slide>
            <slide>
                <img alt="stairs before" src="http://res.cloudinary.com/ymb/image/upload/c_scale,q_auto,w_250/v1522498053/stairs_before.png" draggable="false"/>
                <img alt="stairs after" src="http://res.cloudinary.com/ymb/image/upload/c_scale,q_auto,w_250/v1522498053/stairs_after.png" draggable="false"/>
            </slide>
            <slide>
                <img alt="stairs before" src="http://res.cloudinary.com/ymb/image/upload/c_scale,q_auto,w_250/v1522498053/stairs_before.png" draggable="false"/>
                <img alt="stairs after" src="http://res.cloudinary.com/ymb/image/upload/c_scale,q_auto,w_250/v1522498053/stairs_after.png" draggable="false"/>
            </slide>
            <slide>
                <img alt="stairs before" src="http://res.cloudinary.com/ymb/image/upload/c_scale,q_auto,w_250/v1522498053/stairs_before.png" draggable="false"/>
                <img alt="stairs after" src="http://res.cloudinary.com/ymb/image/upload/c_scale,q_auto,w_250/v1522498053/stairs_after.png" draggable="false"/>
            </slide>
          </carousel>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import Header from './Header'
import Logo from './Logo'
import Nav from './Nav'
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'Gallery',
  components: {
    Header,
    Logo,
    Nav,
    Carousel,
    Slide
  }
}
</script>

<style scoped>

.VueCarousel-slide {
  position: relative;
  color: #fff;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  min-height: 100px;
}

@media screen and (max-width: 750px) {
  img {
    width: 100px;
  }
}

@media screen and (min-width: 751px) {
  .img {
    width: 300px;
  }
}

</style>

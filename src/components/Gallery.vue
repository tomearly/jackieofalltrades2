<template>
    <div>
      <Header
        message='gallery'
      >
      </Header>
      <br>
      <br>
      <Nav></Nav>
        <div id="page">
          <carousel :speed="2000" :loop="true" :perPage="1" :perPageCustom="[[480, 1], [768, 1]]">
            <slide>
                <img alt="stairs before" src="https://res.cloudinary.com/ymb/image/upload/v1524933357/stairs_before_dab14i.jpg" draggable="false"/>
                <img alt="stairs after" src="https://res.cloudinary.com/ymb/image/upload/v1524933357/stairs_after_l86sjc.jpg" draggable="false"/>
            </slide>
            <slide>
                <img alt="decorating before" src="https://res.cloudinary.com/ymb/image/upload/v1524933357/Decorating_1_Before_fotruv.jpg" draggable="false"/>
                <img alt="decorating after" src="https://res.cloudinary.com/ymb/image/upload/v1524933357/Decorating_1_After_vcceiu.jpg" draggable="false"/>
            </slide>
            <slide>
                <img alt="decorating example" src="https://res.cloudinary.com/ymb/image/upload/v1524933357/Decorating_2_e7gj7w.jpg" draggable="false"/>
            </slide>
            <slide>
                <img alt="decorating example" src="https://res.cloudinary.com/ymb/image/upload/v1524933357/Decorating_3_si5tz6.jpg" draggable="false"/>
            </slide>
          </carousel>
        </div>
      <Footer></Footer>
    </div>
</template>

<script>
import Footer from './Footer'
import Header from './Header'
import Logo from './Logo'
import Nav from './Nav'
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'Gallery',
  components: {
    Footer,
    Header,
    Logo,
    Nav,
    Carousel,
    Slide
  },
  metaInfo: {
    title: 'gallery'
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

@media screen and (max-width: 450px) {
  img {
    width: 150px;
  }
}

@media screen and (min-width: 451px) and (max-width: 750px) {
  img {
    width: 200px;
  }
}

@media screen and (min-width: 751px) and (max-width: 1000px) {
  .img {
    width: 300px;
  }
}

@media screen and (min-width: 1001px) {
  .img {
    width: 350px;
  }
}

</style>

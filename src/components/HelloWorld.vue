<template>
    <div>
      <Header
        message='home page'>
      </Header>
      <br>
      <br>
      <Nav></Nav>
      <p class="desc">

      Based in Northampton
      <br/>
      Female, qualified painters and decorators with 30 years of experience
      <br/>
      Call 07976520954 for your free estimate.
      </p>

      <p>See our <a href="#/testimonials">testimonials</a> and <a href="#/gallery">gallery</a></p>

      <div class="profile">
        <div><img alt="Home Image 1" src="https://res.cloudinary.com/ymb/image/upload/v1524993556/woman_ijbmbs.jpg"></div>
        <div>Kerry</div>
      </div>
      <div class="profile">
        <div class="name">Deborah</div>
        <div><img alt="Home Image 2" src="https://res.cloudinary.com/ymb/image/upload/v1524993556/woman_ijbmbs.jpg"></div>
      </div>
    </div>
</template>

<script>
import Header from './Header'
import Logo from './Logo'
import Nav from './Nav'

export default {
  name: 'HelloWorld',
  components: {
    Header,
    Logo,
    Nav
  },
  metaInfo: {
    title: 'jackie of all trades 2',
    meta: [ {
      vmid: 'description', name: 'description', content: this.description
    } ]
  }
}
</script>

<style scoped>
  .profile {
    padding: 20px 0;
  }
  .profile div {
    display: inline-block;
  }
  .profile .name {
    vertical-align: center;
  }
  .desc {
    padding: 5px 10px;
  }

  img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
</style>

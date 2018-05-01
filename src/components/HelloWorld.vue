<template>
    <div>
      <Header
        message='home page'>
      </Header>
      <br>
      <br>
      <Nav></Nav>
      Female, qualified painters and decorators with 30 years of experience

      Call 07976520954 for your free estimate.

      <p>See our <a href="#/testimonials">testimonials</a> and <a href="#/gallery">gallery</a></p>

      <div class="profile">
        <div><img src="https://res.cloudinary.com/ymb/image/upload/v1524993556/woman_ijbmbs.jpg"></div>
        <div>Person One</div>
      </div>
      <div class="profile">
        <div class="name">Person Two</div>
        <div><img src="https://res.cloudinary.com/ymb/image/upload/v1524993556/woman_ijbmbs.jpg"></div>
      </div>
      <Footer>
      </Footer>
    </div>
</template>

<script>
import Footer from './Footer'
import Header from './Header'
import Logo from './Logo'
import Nav from './Nav'

export default {
  name: 'HelloWorld',
  components: {
    Footer,
    Header,
    Logo,
    Nav
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

  img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }
</style>

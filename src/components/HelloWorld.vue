<template>
    <div>
      <Header
        message='home page'>
      </Header>
      <br>
      <br>
      <Nav></Nav>
      Female, qualified painters and decorators with 30 years of experience

      <p>See our <a href="#/testimonials">testimonials</a> and <a href="#/gallery">gallery</a></p>

      <div>
        <img src="https://i.pinimg.com/originals/4d/2b/fd/4d2bfd788d499e30ddce9cdfc2098b7c.jpg">
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

</style>

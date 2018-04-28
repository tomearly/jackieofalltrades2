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
  }
}
</script>

<template>
    <div>
      <Header
        message='contact'
      >
      </Header>
      <br>
      <br>
      <Nav></Nav>
        <div>
        <div>Contact Details: <p>07956 403736</p> <p>07976 520954</p></div>
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
  name: 'ContactUs',
  components: {
    Footer,
    Header,
    Logo,
    Nav
  }
}
</script>

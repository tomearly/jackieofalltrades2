<template>
    <div>
      <Header
        message='test'
      >
      </Header>
      <Nav></Nav>
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

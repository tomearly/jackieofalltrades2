<template>
    <div>
      <Logo/>
      <Header
        message='test'
      >
      </Header>
    </div>
</template>

<script>
import Header from './Header'
import Logo from './Logo'

export default {
  name: 'HelloWorld',
  components: {
    Header,
    Logo
  }
}
</script>

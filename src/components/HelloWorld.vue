<template>
    <div>
      <Header
        message='test'
      >
      </Header>
    </div>
</template>

<script>
import Header from './Header'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Header
  }
}
</script>

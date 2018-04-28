<template>
    <div class='header'>
      <span
        class='vertical-align-content'
        ><Logo/>
      </span>
    </div>
</template>

<script>
import Logo from '@/components/Logo'

export default {
  props: ['message'],
  name: 'Header',
  components: {
    Logo
  }
}
</script>

<style scoped>
.header {
    align-items: center;
    background-color: white;
    display: flex;
    height: 60px;
    justify-content: center;
    margin-bottom: 20px;
}
</style>

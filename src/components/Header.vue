<template>
    <div class='header'>
      <span
        class='vertical-align-content'
        >{{message}}
      </span>
    </div>
</template>

<script>
export default {
  props: ['message'],
  name: 'Header'
}
</script>

<style scoped>
.header {
    align-items: center;
    background-color: yellow;
    display: flex;
    height: 60px;
    justify-content: center;
}
</style>

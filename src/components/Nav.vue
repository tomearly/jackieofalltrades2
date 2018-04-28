<template>
    <div>
      <router-link to="testimonials">testimonials</router-link>
      <router-link to="contact-us">contact</router-link>
      <router-link to="gallery">gallery</router-link>
    </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped>
    div {
        width: calc(100vw);
        height: 50px;
    }
</style>

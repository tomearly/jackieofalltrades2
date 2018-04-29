<template>
    <div>
      <router-link to="/"><h1>home</h1></router-link>
      <router-link to="testimonials"><h1>testimonials</h1></router-link>
      <router-link to="contact-us"><h1>contact</h1></router-link>
      <router-link to="gallery"><h1>gallery</h1></router-link>
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
    h1 {
        display: inline;
        font-size: 16px;
        padding: 0 10px;
        color: dimgray;
    }

</style>

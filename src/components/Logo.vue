<template>
    <div class='header-logo' v-bind:style="{ 'background-image': 'url(' + image + ')'}">

    </div>
</template>

<script>

export default {
  name: 'Logo',
  data: function () {
    return {
      image: 'http://res.cloudinary.com/ymb/image/upload/v1523817045/joat4-small_fskxhe_d35bpa.png'
    }
  }
}
</script>

<style scoped>
.header-logo {
    left: 0px;
        padding-left: 20px;
        position: absolute;
        height: 100px;
        width: 200px;
            background-repeat:  no-repeat;
    margin: 0 20px 0 20px;
    }
.header-logo:after {
    content:  'Jackie of \A All Trades 2';
    position: relative;
}
</style>

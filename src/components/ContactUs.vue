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
          <div><br/><br/>Contact Details:<br/><br/> <p>07956 403736</p> <p>07976 520954</p></div>
        </div>
    </div>

</template>

<script>
import Header from './Header'
import Logo from './Logo'
import Nav from './Nav'

export default {
  name: 'ContactUs',
  components: {
    Header,
    Logo,
    Nav
  },
  metaInfo () {
    return {
      title: 'contact us'
    }
  }
}
</script>

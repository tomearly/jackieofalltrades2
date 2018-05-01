<template>
    <div>
      <Header
        message='testimonials'
      >
      </Header>
      <br>
      <br>
      <Nav></Nav>
        <div class="quotes">
          <div class="testimonial-quote">Lucy Poole - March 2018 - Where do I start with this amazing team!! From quote to room being completed Jackie of all trades 2 have done a fantastic job redecorating my boys room, it looks amazing, done in great time and such a friendly team, well worth recommending as I couldn't ask for more. Clean and very professional job done xx thank you from the bottom of my heart xx</div>
          <div class="testimonial-quote">Clara Sam - March 2018 - Very happy 11 year old with his newly decorated bedroom thank you</div>
          <div class="testimonial-quote">Lauren Price - February 2018 - Absolute fab job on our new fence! Can’t fault, got rid of the old one, worked so hard in freezing conditions to get the new one in! Fantastic service, would highly recommend to anyone!!</div>
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
  name: 'Testimonials',
  components: {
    Footer,
    Header,
    Logo,
    Nav
  }
}
</script>

<style scoped>
  .testimonial-quote {
    max-width: 400px;
    padding: 20px;
  }
</style>

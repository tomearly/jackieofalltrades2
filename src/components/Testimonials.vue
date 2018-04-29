<template>
    <div>
      <Header
        message='testimonials'
      >
      </Header>
      <br>
      <br>
      <Nav></Nav>
        <div>
          <div class="testimonial-quote">Lorem ipsum dolor sit amet, vim ut liber platonem reprimique. Has duis probo reprehendunt et, atomorum pericula iracundia vis ad. Quem dictas iudicabit ea mei, duo ad reque singulis interesset.</div>
          <div class="testimonial-quote">Mel scripta fabulas copiosae at. Ad iisque facilis perfecto vel, dicant nonumy percipitur at pro. Cu nec unum voluptua. Aliquip vituperatoribus cu est, brute summo et mea, ei vide sale.</div>
          <div class="testimonial-quote">Ea partiendo patrioque eos, in liber expetendis his, vim ut iriure docendi. Ius iudico phaedrum ut. Eos officiis maluisset deterruisset id. Tamquam maiestatis argumentum nec no. Tacimates pertinacia duo te.</div>
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

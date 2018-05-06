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

@media screen and (min-width: 451px) and (max-width: 750px) {
  .quotes {
    display: table;
    margin: 0 auto;
    width: 90%;
  }
}

@media screen and (min-width: 751px) {
  .quotes {
    display: table;
    margin: 0 auto;
    width: 60%;
  }
}

.testimonial-quote:nth-child(odd)
{
  display: block;
  margin: 50px;
  font-size: 12pt;
position: relative;
height: auto;
padding: 20px;
background: #F7DCDC;
-webkit-border-radius: 10px;
-moz-border-radius: 10px;
border-radius: 10px;
border: #7F7F7F solid 1px;
}

.testimonial-quote:nth-child(odd):after
{
content: '';
position: absolute;
border-style: solid;
border-width: 21px 15px 0;
border-color: #F7DCDC transparent;
display: block;
width: 0;
z-index: 1;
margin-left: -15px;
bottom: -21px;
left: 75%;
}

.testimonial-quote:nth-child(odd):before
{
content: '';
position: absolute;
border-style: solid;
border-width: 21px 15px 0;
border-color: #7F7F7F transparent;
display: block;
width: 0;
z-index: 0;
margin-left: -15px;
bottom: -22px;
left: 75%;
}

.testimonial-quote:nth-child(even)
{
  display: block;
  color:white;
position: relative;
height: auto;
margin: 50px;
padding: 20px;
background: #696969;
-webkit-border-radius: 10px;
-moz-border-radius: 10px;
border-radius: 10px;
border: #ffffff solid 1px;
}

.testimonial-quote:nth-child(even):after
{
content: '';
position: absolute;
border-style: solid;
border-width: 21px 15px 0;
border-color: #696969 transparent;
display: block;
width: 0;
z-index: 1;
margin-left: -15px;
bottom: -21px;
left: 25%;
}

.testimonial-quote:nth-child(even):before
{
content: '';
position: absolute;
border-style: solid;
border-width: 21px 15px 0;
border-color: #ffffff transparent;
display: block;
width: 0;
z-index: 0;
margin-left: -15px;
bottom: -22px;
left: 25%;
}
</style>

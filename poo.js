var  Spider=require('spider-spa')
 
Spider.get('http://joat2.tomearly.co.uk').then(function(data){
  console.log(data)
});

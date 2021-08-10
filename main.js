// $('.btn').click(function(){
//     console.log("clicked")
// 	var i=0
// 	var array=["habmurger.jpeg","pizzas.jpg","tacos.jpeg"]
// 	setInterval(function(){
// 		display(array,i++)
// 	},300)

// });
 
// function display(array,i=0){
//     i=i%3
//     console.log(i)
//     $('.btn').html('')
//     $(`<img class="mySlides" src="${array[i]}">`).appendTo($('.btn'))
// }


// function Peak(name,price,url){
//     var food={}
  
//     food.name=name;
//     food.price=price;
//     food.url=url;
//     return food
// }

  
//   var food1=Peak('pizza','  30$', 'pizzas.jpg')
//   var food2=Peak('tacos',' 30$','tacos.jpeg' )
//   var foods= [food1,food2]



  var $carrd1=$('#card1')
  $('.btn1').click(function(){
    $('.btn1').html("<ul class='ul'><li>pizza</li><li>Cheese</li><li>tomato</li><li>pepper</li><li>onion</li><li>Price:20DT</li></ul>");
  
  
});
var $carrd2=$('#card2')
$('.btn2').click(function(){
  $('.btn2').html("<ul class='ul'><li>Humberguer</li><li>Cheese</li><li>Tomato</li><li>Pepper</li><li>Onion</li><li>Meat</li><li>Price:10DT</li></ul>");
  $('.btn2').click().hide

});
var $carrd3=$('#card3')
$('.btn3').click(function(){
  $('.btn3').html("<ul class='ul'><li>tacos</li><li>cheese sauce</li><li>tomato</li><li>onion</li><li>cutlet</li><li>Price:12DT</li></ul>");



});
var $carrd4=$('#card4')
$('.btn4').click(function(){
$('.btn4').html("<ul class='ul'><li>chiken</li><li>Price:18DT</li></ul>");


});
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


function Peak(name,price,url){
    var food={}
  
    food.name=name;
    food.price=price;
    food.url=url;
    return food
}

  
  var food1=Peak('pizza','  30$', 'pizzas.jpg')
  var food2=Peak('tacos',' 30$','tacos.jpeg' )
  var foods= [food1,food2]



var $carrd1=$('#card1')
$carrd1.click(function(){
    $carrd1.hide()

});


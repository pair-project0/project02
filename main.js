

































































var $carrd1=$('#card1')
$carrd1.click(function(){
    $carrd1.hide()

});


$(document).ready(function(){


// order confirmed

    $("#confirm_order").click(function(){
        alert("Your order is confirmed.");
    });

// button search in navbar


$("#srch").val()
console.log($("#srch").val())
$("#btnsearch").click(function(){
    var rslt;
  foods.filter(function(elem ){ document.getElementById("srch").value  === elem.name;})
  
   //$("#srch").click(function(){
   // $("").hide();
  //  $("").show();
  //});
})  
//append or hide, show
    
});

function Peak(name,price,url){
     var food={}
    
   food.name  =name;
    food.price=price;
    food.url  =url;
    return food;
   
}

var food1 = Peak('pizza','30$', 'pizza.jpg');

var food2 = Peak('hamburger','30$','burger2.jpg');

var food3 = Peak('tacos','30$','guacamole.jpg');

var food4 = Peak('chicken','30$','chiken.jpg');

var foods= [food1,food2,food3,food4];



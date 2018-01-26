//Business Logic
function Pizza(size, toppings, sodas, extras) {
  this.size = size;
  this.toppings = toppings;
  this.sodas = sodas;
  this.extras = extras;
}

function pizzaOrder() {
  var size = $("#size").val();
  var toppings = $("#toppings").val();
  var sodas = $("#sodas").val();
  var extras = $("#extras").val();
  var newPizza = new Pizza(pize, toppings, sodas, extras)

  return newPizza;
}

    Pizza.prototype.fullPizza = function() {
      if (this.size === "Large") {
        $("#hello").show();

    }

    }





//User Interface
$(document).ready(function(){
  $("form#userInput").submit(function(event) {
    event.preventDefault();




  });
});

// Business Logic
function Pizza(size, toppings, extras, sodas) {
    this.size = size;
    this.toppings = toppings;
    this.extras = extras;
    this.sodas = sodas;
}
function Pizzacost() {
  var size = $("#size").val();
  var toppings = $("#toppings").val();
  var extras = $("#extras").val();
  var sodas = $("#sodas").val();
  var newCost = new Pizza(size, toppings, extras, sodas);

  return newCost
}


Pizza.prototype.cost = function() {
  var cost = 0;
  if (this.size === 'medium' || this.size === 'small') {
      cost = cost + 5;
  } else {
      cost = cost + 9;
  };
  if (this.toppings === 'peperoni' || this.toppings === 'artichoke') {
      cost = cost + 2;
  } else {
      cost = cost + 0;
  };
  if (this.extras === 'Cheese' || this.extras === 'Dessert') {
      cost = cost + 3;
  } else {
      cost = cost + 0;
  };
  if (this.sodas === 'sprite' || this.sodas === 'coke') {
      cost = cost + 5;
  } else {
      cost = cost + 0;
  };

  return cost;

}
//User Interface
$(document).ready(function(){
  $("#pizza").submit(function(event){
    event.preventDefault();
    var answer = Pizzacost();

    $("#result").text("your total cost is: " + answer.cost ());
  });
});

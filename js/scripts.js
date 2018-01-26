function Pizza(size, toppings) {
    this.size = size;
    this.toppings = toppings;

}

function chosenPizza() {
  var size = $("#size").val();
  var toppings = $("#toppings").val();
  var newCost = new Pizza(size, toppings);

  return newCost
}


Pizza.prototype.cost = function(){
  var cost = 0;
 if (this.size === "small" || this.size === "medium"){
  cost = 10;
  } else {
    cost = 20;
  }
if (this.toppings === "cheese" || this.toppings === "peperoni" || this.toppings === "artichoke"|| this.toppings === "anchovy"){
    cost = cost + 1
} else {
  cost = 0
}
  return cost;
}
$(document).ready(function(){
  $("#pizza").submit(function(event){
    event.preventDefault();
    var answer = chosenPizza();

    $("#result").text("your total cost is " + answer.cost());
  });
});

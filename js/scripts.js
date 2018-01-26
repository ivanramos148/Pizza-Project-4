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

    }

    }





//User Interface
$(document).ready(function(){
  $("form#userInput").submit(function(event) {
    event.preventDefault();




  });
});

function Ticket(movie, time, age, status) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.status = status;
}

/*function ticketMaker() {
  var movie = $("#movie").val();
  var time = $("#time").val();
  var age = $("#age").val();
  var status = $("#status").val();
  var newTicket = new Ticket(movie, time, age, status)

  return newTicket;
}

Ticket.prototype.price = function(){
  var cost = 0;
  if (this.movie === "Lady Bird") {
    cost = 15;
  } else {
    cost = 10;
  }
  if (this.time === "11:45 AM" || this.time === "2:30 PM") {
    cost = cost - 2;
  } else if(this.time === "6:30 PM" || this.time === "7:00 PM"){
    cost = cost + 1;
  }
  if (this.age === "56-80" ) {
    cost = cost -2;
  }else if(this.age === "81+"){
    return 0;
  }
  if (this.status === "None") {
    return cost;
  }
  return cost - 1;
}

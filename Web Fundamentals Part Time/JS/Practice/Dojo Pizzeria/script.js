// Pizza Oven Function
function pizzaOven(crustType, sauceType, cheeses, toppings) {
  var pizza = {
      crustType: crustType,
      sauceType: sauceType,
      cheeses: cheeses,
      toppings: toppings
  };
  return pizza;
}

// Create Pizzas
var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var pizza3 = pizzaOven("thin crust", "barbecue", ["cheddar", "parmesan"], ["chicken", "red onions", "pineapple"]);
var pizza4 = pizzaOven("stuffed crust", "alfredo", ["provolone", "gouda"], ["ham", "spinach", "artichokes"]);

// Print Pizzas
console.log("Pizza 1:", pizza1);
console.log("Pizza 2:", pizza2);
console.log("Pizza 3:", pizza3);
console.log("Pizza 4:", pizza4);

// Bonus Challenge: Random Pizza Generator
function randomPizza() {
  var crustTypes = ["deep dish", "hand tossed", "thin crust", "stuffed crust"];
  var sauceTypes = ["traditional", "marinara", "barbecue", "alfredo"];
  var cheeseOptions = [["mozzarella"], ["mozzarella", "feta"], ["cheddar", "parmesan"], ["provolone", "gouda"]];
  var toppingOptions = [
      ["pepperoni", "sausage"], 
      ["mushrooms", "olives", "onions"], 
      ["chicken", "red onions", "pineapple"], 
      ["ham", "spinach", "artichokes"]
  ];

  var randomCrust = crustTypes[Math.floor(Math.random() * crustTypes.length)];
  var randomSauce = sauceTypes[Math.floor(Math.random() * sauceTypes.length)];
  var randomCheeses = cheeseOptions[Math.floor(Math.random() * cheeseOptions.length)];
  var randomToppings = toppingOptions[Math.floor(Math.random() * toppingOptions.length)];

  return pizzaOven(randomCrust, randomSauce, randomCheeses, randomToppings);
}

// Generate and Print Random Pizza
var randomPizza1 = randomPizza();
var randomPizza2 = randomPizza();
console.log("Random Pizza 1:", randomPizza1);
console.log("Random Pizza 2:", randomPizza2);

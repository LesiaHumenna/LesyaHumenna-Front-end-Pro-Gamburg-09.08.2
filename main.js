const SIZE_SMALL = { price: 50, calories: 20 };
const SIZE_BIG = { price: 100, calories: 40 };
const STUFFING_CHEESE = { price: 10, calories: 20 };
const STUFFING_SALATH = { price: 20, calories: 5 };
const STUFFING_POTATIONS = { price: 15, calories: 10 };
const TOPPING_SPICE = { price: 15, calories: 0 };
const TOPPING_MAYO = { price: 20, calories: 5 };
class Hamburger {
  constructor(size, stuffing, topping) {
    this.size = size;
    this.stuffing = stuffing;
    this.topping = topping;
    this.additivesProd = [];
  }
  addProd() {
    this.additivesProd.push(this.topping);
  };
  calculateTotalPrice() {
    let totalPrice = this.size.price + this.stuffing.price;

    for (let toppings of this.additivesProd) {
        totalPrice += toppings.price;
    }
    return totalPrice;
  };
  calculateTotalCalories() {
    let totalCalories = this.size.calories + this.stuffing.calories;
    for (let toppings of this.additivesProd) {
        totalCalories += toppings.calories;
    }
    return totalCalories;
}
};
// hamburger1
const hamburger1 = new Hamburger (SIZE_SMALL, STUFFING_CHEESE, STUFFING_SALATH, STUFFING_POTATIONS, [this.additivesProd]);
console.log(hamburger1) ;
hamburger1.addProd(TOPPING_MAYO);
console.log("Calories: " + hamburger1.calculateTotalCalories());
console.log("Price: " + hamburger1.calculateTotalPrice());
hamburger1.addProd(TOPPING_SPICE);
console.log("Price with sauce: " + hamburger1.calculateTotalPrice());
//hamburger2
const hamburger2 = new Hamburger (SIZE_BIG, STUFFING_CHEESE, STUFFING_SALATH, [this.additivesProd]);
console.log(hamburger2) ;
hamburger2.addProd(TOPPING_MAYO);
console.log("Calories: " + hamburger2.calculateTotalCalories());
console.log("Price: " + hamburger2.calculateTotalPrice());
hamburger2.addProd(TOPPING_SPICE);
console.log("Price with sauce: " + hamburger2.calculateTotalPrice());
//hamburger3
const hamburger3 = new Hamburger (SIZE_BIG, STUFFING_CHEESE, STUFFING_SALATH, STUFFING_POTATIONS, [this.additivesProd]);
console.log(hamburger3) ;
hamburger3.addProd(TOPPING_SPICE);
console.log("Calories: " + hamburger3.calculateTotalCalories());
console.log("Price: " + hamburger3.calculateTotalPrice());
console.log("Price with sauce: " + hamburger3.calculateTotalPrice());
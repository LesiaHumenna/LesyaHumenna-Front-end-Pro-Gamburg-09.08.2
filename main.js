const SIZE_SMALL = { price: 50, calories: 20 };
const SIZE_BIG = { price: 100, calories: 40 };
const STUFFING_CHEESE = { price: 10, calories: 20 };
const STUFFING_SALATH = { price: 20, calories: 5 };
const STUFFING_POTATIONS = { price: 15, calories: 10 };
const TOPPING_SPICE = { price: 15, calories: 0 };
const TOPPING_MAYO = { price: 20, calories: 5 };
class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.additivesProd = [];
  }
 setaddProd(topping) {
    this.additivesProd.push(topping);
  };
 
  calculateTotalPrice() {
    let totalPrice = this.size.price + this.stuffing.price;

    for (let topping of this.additivesProd) {
        totalPrice += topping?.price || 0;
    }
    return totalPrice;
  };
  calculateTotalCalories() {
    let totalCalories = this.size.calories + this.stuffing.calories;
    for(let topping of this.additivesProd) {
        totalCalories += topping?.calories || 0;
    }
    return totalCalories;
}
};
// hamburger1
const hamburger1 = new Hamburger (SIZE_SMALL, STUFFING_CHEESE);
console.log(hamburger1) ;
hamburger1.setaddProd(TOPPING_MAYO);
console.log("Calories: " + hamburger1.calculateTotalCalories());
console.log("Price: " + hamburger1.calculateTotalPrice());
hamburger1.setaddProd(TOPPING_SPICE);
console.log("Price with sauce: " + hamburger1.calculateTotalPrice());
//hamburger2
const hamburger2 = new Hamburger (SIZE_BIG, STUFFING_SALATH);
console.log(hamburger2) ;
hamburger2.setaddProd(TOPPING_MAYO);
console.log("Calories: " + hamburger2.calculateTotalCalories());
console.log("Price: " + hamburger2.calculateTotalPrice());
hamburger2.setaddProd(TOPPING_SPICE);
console.log("Price with sauce: " + hamburger2.calculateTotalPrice());
//hamburger3
const hamburger3 = new Hamburger (SIZE_BIG, STUFFING_POTATIONS);
console.log(hamburger3) ;
hamburger3.setaddProd(TOPPING_SPICE);
console.log("Calories: " + hamburger3.calculateTotalCalories());
console.log("Price: " + hamburger3.calculateTotalPrice());
console.log("Price with sauce: " + hamburger3.calculateTotalPrice());
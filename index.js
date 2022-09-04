// Write your code here

class Breakfast {
    constructor(food, drink) {
      this.food = food;
      this.drink = drink;
    }
  }

  let meal = new Breakfast ("eggs", "milk")
  meal;

  class Lunch {
    constructor(salad,soup, drink) {
      this.salad = salad;
      this.soup = soup;
      this.drink = drink;
    }
  }

  let meal1 = new Lunch ("bone soup", "sprite")
  meal1;

  class Dinner {
    #dessert;
    constructor(salad, soup, entree, dessert) {
      this.salad = salad;
      this.soup = soup;
      this.entree = entree;
      this.#dessert = dessert;
    }
  }

  let meal2 = new Dinner ("mixed", "mushroom soup", "Shrimp" , "icecream")
  meal2;

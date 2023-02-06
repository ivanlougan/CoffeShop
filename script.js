

class Drink {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    
    get drinksPrice() {
        return this.price;
    }
    
    get drinksName() {
        return this.name;
    }
 
    set drinksPrice (price) {
        this.price = price;
    }
}  

let beer = new Drink("beer", 5);
let pepsi = new Drink("pepsi", 4);
let water = new Drink("water", 3);
let wine = new Drink("wine", 7);

let drinks = [ beer, pepsi, water, wine ];

class ShopTill {
    constructor(drinkName) {
        this.drinkName = drinkName;
    }
    
    sumUp() {
    let totalCost = 0;
    for (let i = 0; i < this.drinkName.length; i++) {    

        drinks.forEach(drink => {
            // console.log(drink.drinksName, this.drinkName.drinksName);
            if (drink.drinksName === this.drinkName[i].drinksName) {
                totalCost += drink.drinksPrice;
            }
    });
    }
        return totalCost;    
    }
}

const order1 = new ShopTill( [drinks[0], drinks[1], drinks[3]] );

console.log(order1);
console.log(`Total cost of your order: ${order1.sumUp()}£`);
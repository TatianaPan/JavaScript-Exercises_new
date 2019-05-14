class  Restaurant {
    constructor () {
        this.orders = [];
    }
    orderDish(dish, client) {
        this.orders.push({
            client: client,
            dish: dish
        })
    }
    printOrders() {
        for (let order of this.orders) {
            console.log(`# ${this.orders.indexOf(order)}: ${order.dish.name}`);
        }
    }

    printCheck(customer) {
        let sum = 0;
        let num = 0;
        console.log(`${customer.name}`)
        for (let order of this.orders) {
            if (customer.id === order.client.id) {
                console.log(`# ${num}: ${order.dish.name} - ${order.dish.price}`);
                num++;
                sum += order.dish.price;
            }
        }
        console.log(`Total: ${sum}`);
    }
}

class Dish {
    constructor(name, price, ingredients) {
        this.name = name;
        this.price = price;
        this.ingredients = ingredients;
    }
    cost() {
        let total = 10;
        
        for (let i = 0; i < this.ingredients.length; i++) {
            total += this.ingredients[i].cost;
        }
        return total;
    }

    profit() {
        let profit = this.price - this.cost();
        return profit;
    }

}

class Ingredient {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}


const restaurant = new Restaurant();
const cheese = new Ingredient('Cheese', 5);
const pepperoni = new Ingredient('Pepperoni', 2);
const dough = new Ingredient('Dough', 3);
const lettuce = new Ingredient('Lettuce', 1);
const tomato = new Ingredient('Tomato', 2);
const pizza = new Dish('Pizza', 25, [cheese, pepperoni, dough]);
const salad = new Dish('Salad', 22, [lettuce, cheese, tomato]);

const pluto = {
    name: 'Pluto',
    id: 1
  };

const goofy = {
    name: 'Goofy',
    id: 2
  };

restaurant.orderDish(pizza, goofy);
restaurant.orderDish(salad, pluto);
restaurant.orderDish(pizza, pluto);
console.log(restaurant.orders);
restaurant.printCheck(pluto);
restaurant.printOrders();
//salad.profit();
//console.log(restaurant.printCheck(goofy));



class  Restaurant {
    constructor () {
        this.clients = [];
    }
    orderDish(dish, client) {
        clientFind(client => {

           const clientFound = this.clients.find(function(cl){
              return cl.id === client.id
           })
           if (clientFound){
               clientFound.dishes.push(dish)
           }else{
               client.dishes = [dish]
               this.clients.push(client)
           }
        })
        
        //this.clients.push(dish);
    }
    printOrders() {
        this.clients.forEach(dish => {
            console.log(`# ${this.clients.indexOf(dish)}: ${dish.name}`)
        })
    }

    printCheck(customer) {
        let sum = 0;
        console.log(`${customer.name}`)
        for (let i = 0; i < this.clients.length; i++) {
            
            console.log(`# ${i}: ${this.clients[i].name} - ${this.clients[i].prise}`);
            sum += this.clients[i].prise;
        }
        console.log(`Total: ${sum}`);
    }
}

class Dish {
    constructor(name, prise, ingredients) {
        this.name = name;
        this.prise = prise;
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
        let profit = this.prise - this.cost();
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
//restaurant.printOrders();
salad.profit();
console.log(restaurant.printCheck(goofy));



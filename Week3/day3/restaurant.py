class Dish:
    def __init__(self, name, price, ingredients):
        self.name = name
        self.price = price
        self.ingredients = ingredients

    def __str__(self):
        return str(self.name)

    def cost(self):
        total = 10
        for item in self.ingredients:
            total += item.cost
        return total

    def profit(self):
        profit = self.price - self.cost()
        return profit


class Ingredients:
    def __init__(self, name, cost):
        self.name = name
        self.cost = cost


class Client:
    def __init__(self, name, number):
        self.name = name
        self.number = number

    def __str__(self):
        return str(self.name)


class Restaurant:

    def __init__(self):
        self.orders = []

    def order_dish(self, dish, name):
        self.orders.append((dish, name))

    def print_orders(self):
        num = 0
        for order in self.orders:
            print(f"Order #{num}: {order[0].name}")
            num += 1

    def print_check(self, client):
        sum = 0
        num = 1

        print(f'Customer: {client}')
        for order in self.orders:
            if client.number == order[1].number:
                print(f'Order {num}: {order[0].name} - {float(order[0].price)}. -')
                num += 1
                sum += order[0].price
        if num > 1:
            print(f'Total: {float(sum)}. -')
        else:
            print(f'{client} has no orders!')


restaurant = Restaurant()

cheese = Ingredients('Cheese', 12)
pepperoni = Ingredients('Pepperoni', 6)
dough = Ingredients('Dough', 5)
lettuce = Ingredients('Lettuce', 4)
tomato = Ingredients('Tomato', 5)

pizza = Dish("Pizza", 35, [cheese, pepperoni, dough])
salad = Dish("Salad", 37, [lettuce, cheese, tomato])

goofy = Client('Goofy', 1)
pluto = Client('Pluto', 2)
donald = Client('Donald', 3)

restaurant.order_dish(pizza, goofy)
restaurant.order_dish(salad, goofy)
restaurant.order_dish(pizza, pluto)
restaurant.order_dish(salad, goofy)
# restaurant.print_orders()
restaurant.print_check(pluto)

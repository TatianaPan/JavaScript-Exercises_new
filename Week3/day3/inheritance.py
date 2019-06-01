class Shape:
    def __init__(self, x, y):
        self.center = (x, y)

    def get_area(self):
        return 0


class Rectangle(Shape):
    def __init__(self, x, y, width, height):
        super().__init__(x, y)
        self.width = width
        self.height = height

    def get_area(self):
        return self.width * self.height


class Triangle(Shape):
    def __init__(self, x, y, width, height):
        super().__init__(x, y)
        self.width = width
        self.height = height

    def get_area(self):
        return (self.width // 2) * self.height


class Circle(Shape):
    PI = 3.14

    def __init__(self, x, y, radius):
        super().__init__(x, y)
        self.radius = radius

    def get_area(self):
        return Circle.PI * (self.radius ** 2)


class House:
    def __init__(self, wall, roof, door, window, round_window):
        self.wall = wall
        self.roof = roof
        self.door = door
        self.window = window
        self.round_window = round_window

    def get_final_area(self):
        wall_area = self.wall.get_area() - self.door.get_area() - self.window.get_area()
        roof_area = self.roof.get_area() - self.round_window.get_area()
        return round(wall_area + roof_area)


house = House(Rectangle(0, 0, 4, 3), Triangle(0, 0, 4, 2), Rectangle(0, 0, 1, 2), Rectangle(0, 0, 1, 1),
              Circle(0, 0, 0.75))

print(house.get_final_area())


''' Basic
class P:
    def __init__(self):
        self.a = 7


class C(P):
    pass


# Instance of child class
c = C()
print(c.a)
'''


''' Practical
'''


class Employees:
    def __init__(self, name, last) -> None:
        self.name = name
        self.last = last


class Supervisor(Employees):
    def __init__(self, name, last, password) -> None:
        super().__init__(name, last)
        self.password = password


class Chefs(Employees):
    def leave(self, days):
        return self.name + " has taken " + str(days) + " days off."


Janice = Supervisor("Janice", "Nguyen", "1234")

Kiet = Chefs("Kiet", "Nguyen")
Kay = Chefs("Kay", "Nguyen")


print(Kiet.leave(5))
print(Janice.password)
print(Janice.name)

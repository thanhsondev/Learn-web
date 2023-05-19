class Recipe():
    def __init__(self, dish, items, time):
        self.dish = dish
        self.items = items
        self.time = time

    def contents(self):
        print(
            f"{self.dish} contains {self.items} and takes {self.time} minutes to cook.")


pizza = Recipe("Pizza", ["cheese", "bread", "tomato"], 30)
pasta = Recipe("Pasta", ["penne", "sauce"], 30)
print(pizza.contents())
print(pasta.contents())

''' Practical
'''
# Define class MyFirstClass

# Define string variable called index

# Define function hand_list()

# variable + “ wrote the book: ” + variable


# Call function handlist()

class MyFirstClass():
    def __init__(self, author, book):
        self.author = author
        self.book = book

    def hand_list(self):
        return self.author + " wrote the book: " + self.book


practical = MyFirstClass("Coursera", "Python")
print(practical.hand_list())

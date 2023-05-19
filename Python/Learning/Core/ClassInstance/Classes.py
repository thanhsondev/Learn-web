''' Basic
# Creating a class
class MyClass:
    a = 2023

    def greeting(self):
        return "Hello World!"


# Creating an object
myClass = MyClass()
print(myClass.a)
print(myClass.greeting())
'''

''' Practical
'''


class House:
    '''
    This is a stub for a class representing a house that can be used to create objects and evaluate different metrics that we may require in constructing it.
    '''
    num_rooms = float(input("Number of rooms: "))
    bathrooms = float(input("Number of bathrooms: "))

    def cost_evaluation(self):
        print("The number of rooms in the house are: " + str(self.num_rooms))
        print("The number of bathrooms in the house are: " + str(self.bathrooms))
        return self.num_rooms * 10000 + self.bathrooms * 25000


kiet_house = House()
print(kiet_house.cost_evaluation())

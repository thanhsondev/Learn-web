'''Encapsulation
Single underscore: protected member
Double underscore: private member
'''


def __init__(self):
    self._a = 2.  # Protected member ‘a’
    self.__b = 2.  # Private member ‘b’


'''Inheritance
Employee is the base class, SoftwareEngineer is the derived class
SoftwareEngineer inherits from Employee
'''


class Employee:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def work(self):
        print(self.name, 'is working...')
        print('Age:', self.age)


class SoftwareEngineer(Employee):
    def __init__(self, name, age, level):
        super().__init__(name, age)
        self.level = level

    def work(self):
        print(self.name, 'is coding...')
        print('Age:', self.age)
        print('Level:', self.level)


'''Polymorphism
The same method is used for different types
'''
string = "poly"
num = 7
sequence = [1, 2, 3]
new_str = string * 3
new_num = 7 * 3
new_sequence = sequence * 3

print(new_str, new_num, new_sequence)

'''Abstraction
Abstract class: a class that contains one or more abstract methods
'''
# from abc import ABC,
# class ClassName(ABC):
#     pass

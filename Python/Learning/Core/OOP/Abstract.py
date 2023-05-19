# Import ABC
from abc import ABC
# Import AbstractMethod
from abc import ABC, abstractmethod

# Create inheriting class and call the abstract method


class SomeAbstractClass(ABC):
    @abstractmethod
    def do_something(self):
        pass


class ConcreteClass(SomeAbstractClass):
    def do_something(self):
        print("Some implementation!")


# Create instance of the class
Kay = ConcreteClass()
Kay.do_something()

# LEGB - Local-Enclosing-Global-Built-in

def d():
    animal = "elephant"

    def e():
        nonlocal animal
        animal = "giraffe"
        print("Inside nested function:", animal)

    print("Before calling nested function:", animal)
    e()
    print("After calling nested function:", animal)


animal = "camel"
d()
print("Global animal:", animal)

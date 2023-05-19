def find_factorial_recursive(number):
    if number == 1:
        return 1
    else:
        return number * find_factorial_recursive(number - 1)


print(find_factorial_recursive(5))

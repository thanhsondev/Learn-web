# Kwargs stand for keyword arguments
# that allows you to pass a variable number of keyword arguments to a function.
def sum_of(**kwargs):
    sum = 0
    for v in kwargs.values():
        sum += v
    return round(sum, 2)


print(sum_of(coffee=2.00, sandwich=4.99, cake=2.75))

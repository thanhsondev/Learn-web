# Args stand for arguments
# that allows you to pass a variable number of arguments to a function.
def sum_of(*args):
    sum = 0
    for x in args:
        sum += x
    return sum


print(sum_of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

print("Hello world!")

# Space matter
x = 1 + 2 + 3
print(x)
# but not in this case
x = 1 + 2
+ 3
print(x)
# to fix this, using \ to break the line
x = 1 + 2 \
    + 3
print(x)

# Indentation
name = "Kiet"
if name == "Kiet":
    print("Hello Kiet")
else:
    print("Hello stranger")


# Variable
 # camelCase: myName
 # snake_case: my_name
x = 'Hello world!'  # Automatically assign the datatype
a = b = c = 1  # Assign the same value to multiple variables
a, b, c = 1, 2, "Three"  # Assign multiple values to multiple variables

# Data type
a = 10
print(type(a))  # <class 'int'>
b = 10.5
print(type(b))  # <class 'float'>
c = 'Kiet dang hoc python'
print(type(c))  # <class 'str'>
d = [1, 2, 3, 4, 5]
print(type(d))  # <class 'list'>

# Strings
# multi-line string
var_example = 'This is a \
              multi-line \
              string'

name = 'Kiet'
print(name[0])  # K
print(name[1])  # i
print(name[2])  # e
print(name[3])  # t

print(name[0:2])  # [0, 2) Ki
print(len(name))  # 4

print("Where do you live?")
location = input()
print("So you live in " + location)


def say_hello():  # Creating functions
    return "Hello World!"


def say_hello(name):  # With parameters
    return "Hello " + name + "!"


# Using function with parameters
# print("Using function with parameters: ")
# print(say_hello(input()))
print(say_hello(input('Using function with parameters (example): ')))


# Separated by comma, sep stands for separator
print('Hello', 'World!', sep=', ')

# Ouput formatting
print("I like {} more than {}".format("Python", "Java"))
print("I like {0} more than {1}".format("Python", "Java"))
print("I like {1} more than {0}".format("Python", "Java"))

# Implicit type conversion
print(1 + 2)  # 3
# 13.3 # when Python runs operations involving integers and floats, it implicitly converts the integers type to a float, and then completes the operation.
print(1 + 12.3)

num_1 = input('First number is: ')
num_2 = input('Second number is: ')
user_sum = float(num_1) + float(num_2)
# FALSE:
# print("The sum of: " + num_1 + " and " + num_2 + " is " + user_sum)
# # What this means is, I cannot concatenate a string and a float like that.
# In other words, although Python's implicit type conversion works when
# I use the + operator on strings and integers, it does not work on strings and floats.
# TRUE
print("The sum of " + str(num_1) + " and " +
      str(num_2) + " is " + str(user_sum))


# Logical operators
a = True
b = False
c = True
d = False

if not (a) and not (c):
    print('not(a) and not(c) is False')  # This will not be printed
elif a or b:
    print('a or b is True')  # This will be printed
elif b and c:
    print('b and c is True')  # This will not be printed
elif not (a) and not (c):
    print('not(a) and not(c) is False')  # This will not be printed
elif not (b) or not (d):
    print('not(b) or not(d) is True')  # This will be printed
else:
    print('Nothing is True')

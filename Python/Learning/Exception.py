def divide_by(a, b):
    return float(a) / float(b)


try:
    ans = divide_by(input("Enter a: "), input("Enter b: "))
except ZeroDivisionError:
    print("Cannot divide by zero")
except ValueError:
    print("Invalid input")
except:
    print("Something went wrong")

""" Example 1: IndexError
    The below code has one problem. It is trying to locate 
    an item from the list that does not exist. Running the 
    code will throw the IndexError. Add exception handling 
    to stop the error from being thrown and return a more 
    user-friendly message such as "Item does not exist in 
    the list".
    
    # Starter code
      items = [1,2,3,4,5]
      item = items[6]
      print(item)
"""
# SOLUTION
items = [1, 2, 3, 4, 5]

try:
    item = items[6]
except IndexError:
    print("Item does not exist in the list")

""" Example 2: ZeroDivisionError
    In math there are rules about dividing by zero. 
    The below code is trying to do just that and will 
    throw a ZeroDivisionError. Add exception handling 
    to return back 0 instead of allowing the error to 
    be thrown.
    
    # Starter code
      def divide_by(a, b):
          return a / b


      ans = divide_by(40, 0)
      print(ans)

"""
# SOLUTION


def divide_by(a, b):
    return a / b


try:
    ans = divide_by(10, 0)
except ZeroDivisionError:
    print("Cannot divide by zero")
except ValueError:
    print("Invalid input")
except:
    print("Something went wrong")

""" Example 3: FileNotFoundError
    The code below is looking for a file that does 
    not exist. Add exception handling to catch this 
    error and return the following "The file could 
    not be found".
    
    # Starter code
      with open('file_does_not_exist.txt', 'r') as file:
          print(file.read())


"""
# SOLUTION
try:
    with open('file_does_not_exist.txt', 'r') as file:
        print(file.read())
except FileNotFoundError:
    print("The file could not be found.")

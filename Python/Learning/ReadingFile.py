# read(): print as a string that contains all the characters
with open('Python/Learning/TestReadFile.txt', mode='r') as file:
    print(file.read())
print("=========================================")
# read(n): print as a string that contains n characters
# The example below prints the first 10 characters
with open('Python/Learning/TestReadFile.txt', mode='r') as file:
    print(file.read(10))
print("=========================================")
# readline(): print a single line as a string
with open('Python/Learning/TestReadFile.txt', mode='r') as file:
    print(file.readline())
print("=========================================")
# readline(n): print a single line as a string that contains n characters
# The example below prints the first 10 characters of the first line
with open('Python/Learning/TestReadFile.txt', mode='r') as file:
    print(file.readline(10))
print("=========================================")
# readlines(): print all the lines as a list of strings
with open('Python/Learning/TestReadFile.txt', mode='r') as file:
    Lines = file.readlines()
    print(len(Lines))
    for line in Lines:
        print(line)
print("=========================================")

# Absolute path: the path that starts from the root directory
# For example:
# the root directory is 'C:\'

# Relative path: the path that starts from the current directory
# For example:
# the current file is 'TestReadFile.py' or './TestReadFile.py'

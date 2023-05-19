# Note

# Mode sets
# Mode = r (read),
# Mode = rb (read binary),
# Mode = r+ (read and write),
# Mode = w (write),
# open(<FILE_NAME>, a) (open for editing or appending data)

# Close function
# close()

# With open function
# with open(<FILE_NAME>, <MODE>) as <VARIABLE_NAME>:


# Read a file
try:
    print("=========================================")
    with open('Python/Learning/TestReadFile.txt', mode='r') as file2:
        data = file2.read()
        print(data)
except FileNotFoundError:
    print("ERROR: File not found")

# Create a file
try:
    print("=========================================")
    with open('Python/Learning/TestWriteFile.txt', mode='w') as file3:
        # file3.write("This is the first line\n")
        # file3.write("This is the second line\n")
        # file3.write("This is the third line\n")
        file3.writelines(["This is the first line\n",
                          "This is the second line\n",
                          "This is the third line\n"])
except FileNotFoundError:
    print("ERROR: File not found")

# Append a file
try:
    print("=========================================")
    with open('Python/Learning/TestWriteFile.txt', mode='a') as file4:
        file4.write("This is the fourth line\n")
        file4.write("This is the fifth line\n")
        file4.write("This is the sixth line\n")
except FileNotFoundError:
    print("ERROR: File not found")

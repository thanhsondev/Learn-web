# Dictionary is a collection which is unordered,
# changeable and indexed. No duplicate members.
dict1 = {1: 'one', 'HAI': 'two', 3: 'three', 4: 'four'}

print(dict1[1])  # one

# Add new item
dict1['HAI'] = 'TWO'
# Delete item
del dict1[1]

print(dict1)  # {2: 'TWO', 3: 'three', 4: 'four'}
print(dict1['HAI'])  # TWO
print(dict1.get('HAI'))  # TWO
print(dict1.get(1))  # None

# Iterate through dictionary
for key in dict1:
    print(key)  # HAI, 3, 4
for key, value in dict1.items():
    print(str(key) + " : " + value)  # HAI : TWO, 3 : three, 4 : four

# Example: Employ list (by implement dictionary) to store the information of students
# with function get_employee

employee_dict = {"001": {"id": "001",
                         "name": "Kiet",
                         "department": "Computing"},
                 "002": {"id": "002",
                         "name": "Minh",
                         "department": "Computing"},
                 "003": {"id": "003",
                         "name": "Chien",
                         "department": "Computing"}}


def get_employee(id):
    for employee in employee_dict:
        if employee["id"] == id:
            return employee
        else:
            return "Cannot find the employee with id: " + id


print(get_employee(input("Enter the id of the employee: ")))

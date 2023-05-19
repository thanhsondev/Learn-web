list1 = [1, 2, 3, 4, 5]
print("Before: ")
print(list1)

# Insertion
# Insert 6 after the last element
list1.insert(len(list1), 6)
# Insert 0 at the beginning
list1.insert(0, 0)
# Insert 7 at index 3
list1.insert(3, 7)
# Append 8 at the end
list1.append(8)
# Extend the list with [9, 10, 11]
list1.extend([9, 10, 11])

# Deletion
# Remove the index 3
list1.pop(3)
# Remove the index 0
del list1[0]


print("After: ")
print(list1)

# Example: Employee list to store the information of students
# with function get_employee

employee_list = [{"id": "001", "name": "Kiet", "department": "Computing"},
                 {"id": "002", "name": "Minh", "department": "Computing"},
                 {"id": "003", "name": "Chien", "department": "Computing"}]


def get_employee(id):
    for employee in employee_list:
        if employee["id"] == id:
            return employee
        else:
            return "Cannot find the employee with id: " + id


print(get_employee(input("Enter the id of the employee: ")))

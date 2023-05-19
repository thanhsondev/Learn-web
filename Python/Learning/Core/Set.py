# cannot have duplicate values inside a set
set1 = {1, 2, 3, 4, 5, 5}
print(set1)
set2 = {4, 5, 6, 7, 4, 8, 9}
print(set2)

# add a value to a set
set2.add(10)

# join 2 sets
print(set1.union(set2))
# OR
print(set1 | set2)

# intersection
print(set1.intersection(set2))
# OR
print(set1 & set2)

# difference
print(set1.difference(set2))
# OR
print(set1 - set2)

# symmetric difference
print(set1.symmetric_difference(set2))
# OR
print(set1 ^ set2)

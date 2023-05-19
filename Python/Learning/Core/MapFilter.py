menu = ["Egg", "Spam", "Bacon", "Sausage"]


def find_food(food):
    if food[0] == "S":
        return food


# Map() returns every element in the list,
# but it applies the function to each element
map_food = map(find_food, menu)
print(map_food)
for x in map_food:
    print(x)


# Filter() returns only the elements that return true
filter_food = filter(find_food, menu)
print(filter_food)
for x in filter_food:
    print(x)

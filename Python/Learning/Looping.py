favourites = ['Python', 'Java', 'C++', 'C#']
# for loop
for item in favourites:
    print(item)
for idx, item in enumerate(favourites):
    print(idx, item)
# while loop
count = 0
while count < len(favourites):
    print(favourites[count])
    count += 1

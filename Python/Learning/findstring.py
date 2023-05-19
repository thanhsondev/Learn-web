def is_present(person):
    names = ["John", "Paul", "George", "Ringo"]
    if person in names:
        print(person + " is present.")
        return True
    else:
        return False

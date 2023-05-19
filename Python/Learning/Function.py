def calculate_tax(amount, tax_rate):
    return round((amount * tax_rate) / 100, 2)


total_tax = float(input('Enter amount: '))
tax_rate = float(input('Enter tax rate: '))
print('Total tax is {0}'.format(calculate_tax(total_tax, tax_rate)))

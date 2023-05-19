bill_total = float(input('Enter bill total: '))
discount1 = 0.1
discount2 = 0.2

# In case the total bill is greater than 100 and less than or equal to 200
# discount 10%
if bill_total > 100 and bill_total <= 200:
    print('Bill is greater than 100 and less than or equal to 200')
    print('Discount 10%')
    bill_total = bill_total - (bill_total * discount1)
elif bill_total > 200:
    print('Bill is greater than 200')
    print('Discount 20%')
    bill_total = bill_total - (bill_total * discount2)
else:
    print('Bill is less than 100')
    print('No discount')

print('Total bill is {0}'.format(float(bill_total)))

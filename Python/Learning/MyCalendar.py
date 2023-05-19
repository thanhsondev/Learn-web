import calendar
import sys
locations = sys.path

print(locations)
for i in locations:
    print(i)

calendar.leapdays(2000, 2050)
print(calendar.leapdays(2000, 2050))
is_it_leap = calendar.isleap(2036)
print(is_it_leap)

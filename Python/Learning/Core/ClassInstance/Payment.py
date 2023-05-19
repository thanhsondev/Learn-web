class Payslips:
    def __init__(self, name, payment, amount) -> None:
        self.name = name
        self.payment = payment
        self.amount = amount

    def pay(self):
        self.payment = "Paid"

    def status(self):
        if self.payment == "Paid":
            return self.name + " has been paid " + self.amount
        else:
            return self.name + " has not been paid " + self.amount


Kiet = Payslips("Kiet", "Not Paid", "£100")
Kay = Payslips("Kay", "Not Paid", "£200")

print(Kiet.status())
print(Kay.status())

Kiet.pay()

print(Kiet.status())
print(Kay.status())

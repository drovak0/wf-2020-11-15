class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        # self.account_balance = 0
        self.account = BankAccount('Checking')

    def make_withdrawal(self, amount):
        # if self.account.balance < 0:
            # charge overdraft fee
            # pass
        # 1
        # The user subtracts from the account balance
        # self.account.balance -= amount

        # 2
        # The user calls the withdraw method of the bank account
        self.account.withdraw(amount)


        print(f"{self.name} took out {amount} from their bank acount")
        return self

    def make_deposit(self, amount):
        self.account_balance += amount
        print(f"{self.name} deposited {amount} into thier bank acount")
        return self


class BankAccount(object):
    def __init__(self, name, int_rate=0.01, balance=0):
        self.name = name
        self.int_rate = int_rate
        self.balance = balance

    def show_balance(self):
        print("%s's account. Balance:$%.2f" % (self.name, self.balance))
        return self

    def deposit(self, amount):
        if amount <= 0:
            print("You have no money")
        else:
            print("Amount deposited: $%.2f" % amount)
        self.balance += amount
        return self

    def withdraw(self, amount):
        if amount > self.balance:
            print(" You can't do that")
        else:
            print("Withdrawing: %.2f" % (amount))
        self.balance -= amount
        return self

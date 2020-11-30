# OOP
# What is OOP?
# Object Oriented Programing
# Why? classes, inheritance, Organization

# Reminder
# Before afternoon discussion -> upload a profile picture in zoom (anything)

# What kind of classes to do we want to make?
# Showroom, Car

# classes
# attributes
# methods
# chaining
# association between classes

# blueprint
class Car:
    def __init__(self, make_param, model, type, color, year):
        self.make = make_param
        self.model = model
        self.type = type
        self.color = color
        self.year = year
        self.mileage = 0

    def make_vroom(self):
        print('🚔 VROOOOOOOOOOOOOOOOM!!!!! 🚔')
        print(f'My car is a {self.make} {self.model}')
        self.mileage += 10
        print(f'My mileage is now {self.mileage}')

    # def __str__(self):
    #     return 'hello'


murtja_car = Car(make_param= 'BMW', model='M5' , type='Sedan' , color='Black' , year=2020)
# print('murtja_car: ', murtja_car)
alreem_car = Car('Mercedes', 'G Class AMG', 'SUV', 'Black', 2020)
# print('alreem_car: ', alreem_car)

# alreem_car.make_vroom()
# alreem_car.make_vroom()
# alreem_car.make_vroom()
# alreem_car.make_vroom()
# alreem_car.make_vroom()
# alreem_car.make_vroom()
# alreem_car.make_vroom()

class Showroom:
    def __init__(self, name_param='Default', business_hours='9am-5pm', cars=[]):
        self.name = name_param
        self.business_hours = business_hours
        self.cars = cars
        print('Setting up a show room!')

    def add_car(self, car):
        self.cars.append(car)
        print(f'You added a {car.make} {car.model} to the show room!')
        return self


luxury_cars = Showroom('Luxury Cars', cars=[murtja_car, alreem_car])
print(luxury_cars.name)
print(luxury_cars.business_hours)
print(luxury_cars.cars)

for car in luxury_cars.cars:
    print(f'{car.make} {car.model}')

chris_car = Car('Jeep', 'Sahari', 'SUV', 'Pink', 2021)
aljwhrah_car = Car('Flower', 'Rose', 'Sedan', 'Red', 2021)

luxury_cars.add_car(chris_car).add_car(aljwhrah_car)
# luxury_cars.add_car(chris_car)
# luxury_cars.add_car(aljwhrah_car)

print('*'*10)

for car in luxury_cars.cars:
    print(f'{car.make} {car.model}')

print('here')

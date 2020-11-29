# Python Intro

# How to run code
# python shell
# run the file
print('Hello Python!')

# Differences from JS
# Code blocks
# if () {}
something = 'some value'
if something == something:
    print('something')
# Strings and formatting (fstring)
name = 'Python'
print('hello, ' + name)
print('hello, {name}'.format(name=name))
print(f'hello, {name}') # version 3
# Comparison
# Conditions
# Dictionaries
# var obj = {}
dictionary = {
  'name': 'Python'
}
print(dictionary)
# Loops and lists
#          start stop step
# for i in range(100):
for i in range(0, 100, 1):
    print(i)

list = [1, 2, 3, 4, 5]
for item in list:
    print(item)
# Functions
# function () {}
def function_name():
    pass
# Classes
class Person():
    def __init__(self):
        pass

# Virtual Environment
# What is a python virtual environment?

# 3 Get Values From a List of Dictionaries
# Create a function iterateDictionary2(key_name, some_list) that, given a list of dictionaries and a key name, the function prints the value stored in that key for each dictionary.

def iterateDictionary2(key_name, some_list):
    print(some_list)
    for item in some_list:
        print(item)
        print(item[key_name])



students = [
    {
      'first_name':  'Michael',
      'last_name': 'Jordan'
    },
    {
      'first_name': 'John',
      'last_name': 'Rosales'
    },
    {
      'first_name': 'Mark',
      'last_name': 'Guillen'
    },
    {
      'first_name': 'KB',
      'last_name': 'Tonel'
    }
]

# iterateDictionary2('first_name', students)
# iterateDictionary2('last_name', students)

# 4 Iterate Through a Dictionary with List Values
# Create a function printInfo(some_dict) that given a dictionary whose values are all lists, prints the name of each key along with the size of its list, and then prints the associated values within each key's list.

# output:
# 7 LOCATIONS
# San Jose
# Seattle
# Dallas
# Chicago
# Tulsa
# DC
# Burbank

# 8 INSTRUCTORS
# Michael
# Amy
# Eduardo
# Josh
# Graham
# Patrick
# Minh
# Devon


def printInfo(dict):
    for key in dict:
        values_list = dict[key]
        print(len(values_list)   , key.upper())

        # for something in dict[key]:
        for something in values_list:
            print(something)


dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
printInfo(dojo)

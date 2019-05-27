def are_same_type(args):
    for element in args:
        if type(args[0]) != type(element):
            return False
    return True



print(are_same_type(['hello', 'world', 'long sentence']))  # True
print(are_same_type([1, 2, 9, 10]))                        # True
print(are_same_type([['hello'], 'hello', ['bye']]))        # False
print(are_same_type([['hello'], [1, 2, 3], [{'a': 2}]]))   # True
print(are_same_type([['hello'], set('hello')]))            # False
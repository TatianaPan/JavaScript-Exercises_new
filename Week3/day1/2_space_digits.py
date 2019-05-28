def is_only_string(args):
    if type(args) == str:
        for char in args:
            if char == " " or char.isdigit():
                return False
        return True
    return False


print(is_only_string('11'))  # False
print(is_only_string('hello')) #True
print(is_only_string(['hello']))  # ? Please handle this case!! Should return False
print(is_only_string('this is a long sentence'))  # False
print(is_only_string({'a': 2}))  # ? Please handle this case!! Should return False

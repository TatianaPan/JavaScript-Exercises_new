def is_string(args):
    if (type(args) == str):
        return True
    else:
        return False


print(is_string('hello'))                    # True
print(is_string(['hello']))                  # False
print(is_string('this is a long sentence'))  # True
print(is_string({'a': 2}))                   # False
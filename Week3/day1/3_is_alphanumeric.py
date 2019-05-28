def is_alphanumeric(args):
    if not len(args):
        return False

    if type(args) == str:
        for char in args:
            if not char.isnumeric() and not char.isalpha():
                return False
        return True
    return False


print(is_alphanumeric('11')) #True
print(is_alphanumeric(''))  # False
print(is_alphanumeric('134569abhjguyogLKGOI')) # True
print(is_alphanumeric(['hello']))                  # False
print(is_alphanumeric('this is a long sentence'))  # False
print(is_alphanumeric({'a': 2}))                   # False
print(is_alphanumeric("this is string....!!!"))    # False
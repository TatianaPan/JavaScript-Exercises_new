def new_dict(args):

    new_dict = {}

    for item in reversed(args):
        new_dict = {item: new_dict}

    return new_dict

print(new_dict([1, 2, 3, 4, 5])) # {1: {2: {3: {4: {5: {}}}}}}
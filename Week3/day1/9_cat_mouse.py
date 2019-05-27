def is_caught(args):

    if args.index('C') >= args.index('m') - 3:

        return True

    return False


print(is_caught('C.....m'))   # False
print(is_caught('C..m'))      # True
print(is_caught('..C..m'))    # True
print(is_caught('...C...m'))  # False
print(is_caught('C.m'))       # True
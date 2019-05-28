def intersection(a, b):
    new_str = ''
    for letter in a:
        if letter not in new_str:
            new_str += letter
    for letter in b:
        if letter not in new_str:
            new_str += letter

    return ''.join(sorted(new_str))



a = 'xyaabbbccccdefww'
b = 'xxxxyyyyabklmopq'
x = 'abcdefghijklmnopqrstuvwxyz'
print(intersection(a, b))  # abcdefklmopqwxy
print(intersection(a, x))  # abcdefghijklmnopqrstuvwxyz
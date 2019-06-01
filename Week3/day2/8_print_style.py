def print_numbers():
    string = ''
    for num in range(1, 11):
        if num % 2 == 0:
            string += str(num)
        else:
            string += "_"
    print(string)


print_numbers()

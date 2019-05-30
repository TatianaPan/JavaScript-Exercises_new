def filter_even_numbers(lst):
    return list(filter((lambda a: a % 2 == 0), lst))


my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

print(filter_even_numbers(my_list))

def squared_even_numbers(lst):
    even_numbers = list(filter((lambda a: a % 2 == 0), lst))
    return list(map((lambda a: a * a), even_numbers))


my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(squared_even_numbers(my_list))

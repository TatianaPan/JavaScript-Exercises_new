def square_elements(lst):
    return list(map((lambda a: a * a), lst))


my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(square_elements(my_list))

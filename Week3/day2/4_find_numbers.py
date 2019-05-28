# def find_numbers(min, max):
#     found_numbers = []
#     for i in range(min, max + 1):
#         if i % 7 == 0 and i % 5 != 0:
#             found_numbers.append(i)
#     return found_numbers

def find_numbers(min, max):
    return list(filter((lambda a: a % 7 == 0 and a % 5 != 0), range(min, max + 1)))


print(find_numbers(2, 50))

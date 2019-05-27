def convert(num):
    new_list = sorted(str(num))
    new_list.reverse()
    return new_list


print(convert(429563))  # [9, 6, 5, 4, 3, 2]
print(convert(324))     # [4, 3, 2]
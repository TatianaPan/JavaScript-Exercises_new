def zero_sum(args):
    list1 = []
    for index in range(len(args)):
        for index2 in range(index, len(args)):
            if args[index] + args[index2] == 0:
                list1.append([index, index2])

    return list1



print(zero_sum([1, 5, 0, -5, 3, -1]))  # [[0, 5], [1, 3], [2, 2]]
print(zero_sum([1, -1]))               # [[0, 1]]
print(zero_sum([0, 4, 3, 5]))          # [[0, 0]]
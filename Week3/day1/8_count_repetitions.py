def count_repetition(args):
    obj = {}
    for item in args:
        count = 1
        if item not in obj:
            obj[item] = count
        else:
            obj[item] += 1
    return obj



names = ['kerouac', 'fante', 'fante', 'buk', 'hemingway', 'hornby', 'kerouac', 'buk', 'fante']

print(count_repetition(names))
# {'kerouac': 2, 'fante': 3, 'buk': 2, 'hemingway': 1, 'hornby': 1}

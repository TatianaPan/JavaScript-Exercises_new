def split_the_bill(obj):
    sum = 0
    for key in obj:
        sum += obj[key]
    amount = sum // len(obj)

    for key in obj:
        obj[key] = amount - obj[key]

    return obj




group = {
    'Amy': 20,
    'Bill': 15,
    'Chris': 10
}
print(split_the_bill(group))  # { 'Amy': -5, 'Bill': 0, 'Chris': 5 }
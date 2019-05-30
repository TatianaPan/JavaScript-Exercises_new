def compute_totals(orders):
    totals = []
    for order in orders:
        total = 0
        total = order['quantity'] * order['price_per_item']
        if total < 100:
            total += 10
        totals.append((order['id'], total))
    return totals


orders = [

    {
        'id': 'order_001',
        'item': 'Introduction to Python',
        'quantity': 1,
        'price_per_item': 32,
    },
    {
        'id': 'order_002',
        'item': 'Advanced Python',
        'quantity': 3,
        'price_per_item': 40,
    },
    {
        'id': 'order_003',
        'item': 'Python web frameworks',
        'quantity': 2,
        'price_per_item': 51,
    },
]

totals = compute_totals(orders)
print(compute_totals(orders))
# totals is [('order_001', 42), ('order_002', 120), ('order_003', 102)]

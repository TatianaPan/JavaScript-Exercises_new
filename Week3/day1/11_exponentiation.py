def exp_recursive(a, n):
    if n == 0:
        return 1

    return a * exp_recursive(a, n - 1)

print(exp_recursive(5, 3))  # 125
print(exp_recursive(2, 4))  # 16
print(exp_recursive(5, 1))  # 5
print(exp_recursive(6, 0))  # 1
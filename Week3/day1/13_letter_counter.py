def letter_counter():
    x = input("Print a sentence:")
    lower = 0
    upper = 0
    for letter in x:
        if letter.islower():
            lower += 1
        elif letter.isupper():
            upper += 1
    print(f"UPPER CASE {upper}")
    print(f"LOWER CASE {lower}")

letter_counter()


# Hello World!
# UPPER CASE 2
# LOWER CASE 8
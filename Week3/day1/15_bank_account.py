import sys

def bank_account():
    amount = 0
    for line in sys.stdin:
        if 'D' in line:
            amount += int(line[2:])
        elif 'W' in line:
            amount -= int(line[2:])
    print(amount)

bank_account()
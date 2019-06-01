import random


def start():
    print('I am thinking of a number from 1-10. Can you find it? You have 5 tries.')
    count = 0
    number = random_number()
    while True:
        print(number)
        print(count)

        if count >= 5:
            print("No more attempts")
            break

        user_guess = input("Guess what it is: ")

        if not user_guess.isdigit():
            print("Not a digit")
            continue

        count += 1

        if int(user_guess) == number:
            print(f"Congratulations! You guessed it in {count} tries. ")
            play_again()
        elif int(user_guess) < number:
            print('Nope. It’s lower than that. Try again.')
        elif int(user_guess) > number:
            print('Nope. It’s higher than that. Try again.')

    return False


def random_number():
    number = random.randint(1, 10)
    return number


def play_again():
    answer = input("Do you want to play again? y - yes, n - no.")

    if answer == 'y':
        start()
    else:
        quit()


start()

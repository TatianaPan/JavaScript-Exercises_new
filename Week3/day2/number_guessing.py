import random


def start():
    print('I am thinking of a number from 1-10. Can you find it? You have 5 tries.')
    count = 0
    number = random_number()
    while True:
        print(number)
        print(count)

        if count == 0:
            user_guess = input("Guess what it is: ")
            count += 1
        elif not user_guess.isdigit():
            user_guess = input("It's not a number. Enter a number. ")
        elif count == 5:
            print(f"Sorry, you have no more tries left.")
            quit()
        elif int(user_guess) == number:
            print(f"Congratulations! You guessed it in {count} tries. ")
            play_again()
        elif int(user_guess) < number:
            user_guess = input('Nope. It’s lower than that. Try again.')
            count += 1
        elif int(user_guess) > number:
            user_guess = input('Nope. It’s higher than that. Try again.')
            count += 1


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

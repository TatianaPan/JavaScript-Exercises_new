import sorting_algorithms

print('This script will sort your array of numbers')

string_of_numbers = input('Print your numbers, devided by commas\n')

list_of_strings = string_of_numbers.split(',')

list_of_numbers = [int(x) for x in list_of_strings]

print(f'Your list of numbers is {list_of_numbers}')


user_choice = input('Instruction: \n'
                    'Choose sorting algorithm: \n'
                    'For bubble sort choose "b"\n'
                    'For insertion sort choose "i"\n'
                    'For quick sort choose "q"\n'
                    'For selection sort choose "s"\n')

if user_choice == 'b':
    sorting_algorithms.bubble_sort(list_of_numbers)
elif user_choice == 'i':
    sorting_algorithms.insertion_sort(list_of_numbers)
elif user_choice == 'q':
    sorting_algorithms.quick_sort(list_of_numbers)
elif user_choice == 's':
    sorting_algorithms.selection_sort(list_of_numbers)
else:
    user_choice = input('Incorrect choice.')

print(f'Your sorted list is {list_of_numbers}')
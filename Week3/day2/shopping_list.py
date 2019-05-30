def shopping_list():
    import sys
    shopping_list = []

    def help_menu():
        print("Press 'h' for help menu")
        print("Press 's' to show the item in your list")
        print("Press 'a' to add a new item to the list")
        print("Press 'r' to remove an item from the list")
        print("Press 'q' to quit")

    def user_choice():
        choice = input("What do you want to do? ")
        print(choice)
        if choice == "h":
            help_menu()
        elif choice == "s":
            show_items()
        elif choice == "a":
            return add_item()
        elif choice == "r":
            return remove_item()
        elif choice == "q":
            quit()
        return choice

    def show_items():
        if len(shopping_list) == 0:
            print('There are no items on the list! ')
        for item in shopping_list:
            print(f"{item}")
        user_choice()

    def add_item():
        item = input("What do you want to add? ")
        position = int(input("Put a list number for yor item "))

        if position == None:
            shopping_list.append({(len(shopping_list) + 1): item})
        else:
            shopping_list.insert(position - 1, {position: item})
        user_choice()

    def remove_item():
        if len(shopping_list) == 0:
            print('There are no items on the list!')
        position = int(input("Which item do you want to remove? Enter the position number. "))

        for item in shopping_list:
            if position in item.keys():
                shopping_list.remove(item)

        user_choice()

    def run_the_app():
        print("Hi! This is your Shopping List App.")
        while True:
            help_menu()

            if user_choice() == "q":
                break

    run_the_app()


shopping_list()

def bmi(weight, height):
    bmi = weight / (height/100) ** 2
    return bmi


def calculator():
    print("Let’s calculate your BMI (kg/m2)")
    user_weight = float(input("What is your weight in kg?"))
    user_height = float(input("What is your height in cm?"))

    user_bmi = round(bmi(user_weight, user_height))

    if user_bmi < 18.5:
        print(f"Your BMI is {user_bmi}. You are underweight")
    elif user_bmi > 25:
        print(f"Your BMI is {user_bmi}. You are overweight")
    else:
        print(f"Your BMI is {user_bmi}. You have normal weight")


calculator()
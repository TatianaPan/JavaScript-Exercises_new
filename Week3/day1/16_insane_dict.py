import random

def nt_dictionary(num):
    new_dict = {}

    for x in range(20):
        key = random.randint(1, 1000)
        new_dict[key] = key * key
    return new_dict


print(nt_dictionary(20))
print('Length', len(nt_dictionary(20)))

#{729: 531441, 574: 329476, 515: 265225, 252: 63504, 766: 586756, 69: 4761, 31: 961, 671: 450241, 243: 59049, 917: 840889, 226: 51076, 719: 516961, 760: 577600, 785: 616225, 551: 303601, 407: 165649, 592: 350464, 558: 311364, 991: 982081, 784: 614656}
#Length 20
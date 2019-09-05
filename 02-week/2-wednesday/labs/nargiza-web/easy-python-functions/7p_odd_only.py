new_list = []
import import_odd

def only_odd(list_numbers):
    for number in list_numbers:
        if import_odd.is_odd(number) == True:
            new_list.append(number)
    return (new_list)
print (only_odd([6, 5, 7, 8, 9, 11]))
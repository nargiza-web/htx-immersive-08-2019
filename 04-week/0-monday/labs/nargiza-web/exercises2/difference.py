def compare(string1, string2):
    difference = ""

    for i in string1:
        if i not in string2:
            difference += i

    for i in string2:
        if i not in string1:
            difference += i

    return difference

print(compare("hello", "world")) 

   
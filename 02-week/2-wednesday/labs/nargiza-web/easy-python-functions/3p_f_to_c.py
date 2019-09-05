# 3. Fahrenheit to Celsius conversion

# The formula to convert a temperature from Fahrenheit to Celsius is:

# C = (F - 32) * 5/9

# Write a function that takes a temperature in Fahrenheit, converts it to Celsius, and returns the value.


def fah_to_c(fahrenheit):
    C = (fahrenheit - 32) * 5/9
    return C
print(fah_to_c(41))
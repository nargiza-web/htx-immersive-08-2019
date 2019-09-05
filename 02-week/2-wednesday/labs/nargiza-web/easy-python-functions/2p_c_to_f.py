# Celsius to Fahrenheit conversion

# The formula to convert a temperature from Celsius to Fahrenheit is:

# F = (C * 9/5) + 32

# Write a function that takes a temperature in Celsius, converts it Fahrenheit, and returns the value.


def celcius_fahrenheit(celcius):
    F = (celcius * 9/5) + 32
    return F

print(celcius_fahrenheit(45))

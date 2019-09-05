# 1. Madlib function

# Write a function that accepts two arguments: a name and a subject.

# The function should return a String with the name and subject interpolated in.

# For example:

# madlib("Jenn", "science") # "Jenn's favorite subject is science." madlib("Jeff", "history") # "Jeff's favorite subject is history."
# Provide default arguments in case one or both are omitted.


def favourite(name="KATY", subject="MATH"):
    print(f"{name}'s favourite subject is {subject}")

# pay attention on how they are all printed differently, so if you set a default just in case, attention on syntax!    
favourite()
favourite("N", "Y")
favourite (subject = "Math")
favourite ("Math")


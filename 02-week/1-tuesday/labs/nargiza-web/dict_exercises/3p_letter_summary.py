# Letter Summary

# Write a script that takes a word as its input, and returns a dictionary containing the tally of how many times each letter in the alphabet was used in the word. For example:

# {'a': 3, 'b': 1, 'n': 2} # ex: banana

text = input('Write a script?: ')
spelled = {}

for i in text:
    if i in spelled:
        spelled[i] = spelled[i]+1
    else:
        spelled[i] = 1
print(spelled)

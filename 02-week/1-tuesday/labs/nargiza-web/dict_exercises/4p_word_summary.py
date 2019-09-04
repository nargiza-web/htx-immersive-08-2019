# Word Summary

# Write a script that takes a paragraph of text as its input, and returns a dictionary containing the tally of how many times each word in the alphabet was used in the text. For example:

# >>> word_histogram('To be or not to be') 
# {'to': 2, 'be': 2, 'or': 1, 'not': 1}
text = input('Type a text?: ')
new_text={}
split_text = text.split(" ")

for item in split_text:
    if item in new_text:
        new_text[item] += 1
    else:
        new_text[item] = 1
print (new_text)
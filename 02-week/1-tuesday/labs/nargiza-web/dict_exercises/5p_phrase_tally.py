# Bonus Challenge

# Given a histogram tally (one returned from either letter_histogram or word_summary), print the top 3 words or letters.
# I am doing phrase count

text = input('Enter a text?: ')
dict = { }
split_text = text.split(" ")

for i in split_text:
    if i in dict:
        dict[i] += 1
    else :
        dict[i] = 1
print(dict)

largest_key = " "
largest_value = 0

for key, value in dict.items():
    if value > largest_value:
        largest_key = key
        largest_value = value
print (largest_key)


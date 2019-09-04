# working for phrase
phrase = input("Please enter a sentence or phrase: ").lower()
freq_dict = {}

split_phrase = phrase.split(" ")


for word in split_phrase:
    if word in freq_dict:
        freq_dict[word] += 1
    else:
        freq_dict[word] = 1

print(freq_dict)
sorted_dict = {}
top_three_dict = {}
# print(sorted(freq_dict.keys()))
for key, value in sorted(freq_dict.items(), key=lambda item: item[1], reverse=True): #I think "1" is an index for a list created by items, lamda is like a micro function. 
    sorted_dict[key] = value

values = list(sorted_dict.values())
keys = list(sorted_dict.keys())
print("The words said the most are:")
#print(values)
print(f"{keys[0]} - {values[0]}")
print(f"{keys[1]} - {values[1]}")
print(f"{keys[2]} - {values[2]}")
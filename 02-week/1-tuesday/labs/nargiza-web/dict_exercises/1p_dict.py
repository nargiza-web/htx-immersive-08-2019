# Exercise 1

# Given the following dictionary, representing a mapping from names to phone numbers:

# phonebook_dict = { 
#  'Alice': '703-493-1834', 
#  'Bob': '857-384-1234', 
#  'Elizabeth': '484-584-2923'
# }
# Write code to do the following:

# 1.Print Elizabeth's phone number.
# 2. Add a entry to the dictionary: Kareem's number is 938-489-1234.
# 3. Delete Alice's phone entry.
# 4. Change Bob's phone number to '968-345-2345'.
# 5. Print all the phone entries.

phonebook_dict = {
    'Alice': '703-493-1834', 
    'Bob': '857-384-1234',
    'Elizabeth' : '484-584-2923'
}
# 1. printing Elizabeth's phone number
print (phonebook_dict['Elizabeth'])

# 2. adding Kareem's phone number
phonebook_dict['Kareem'] = '938-489-1234'

# 3. deleting Alice's phone entry
phonebook_dict.pop('Alice')

# 4. changing Bob's phone number
phonebook_dict.update({'Bob': '968-345-2345'}) 
print (phonebook_dict)

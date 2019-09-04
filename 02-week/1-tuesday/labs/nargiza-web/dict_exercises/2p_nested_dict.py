# Exercise 2: Nested Dictionaries

# ramit = { 
#  'name': 'Ramit', 
#  'email': 'ramit@gmail.com', 
#  'interests': ['movies', 'tennis'], 
#  'friends': [ 
#     { 
#      'name': 'Jasmine', 
#       'email': 'jasmine@yahoo.com', 
#      'interests': ['photography', 'tennis']
#     }, 
#     { 
#        'name': 'Jan', 
#       'email': 'jan@hotmail.com', 
#         'interests': ['movies', 'tv'] 
#     } 
#    ] 
# }
# Write a python expression that gets the email address of Ramit.
# Write a python expression that gets the first of Ramit's interests.
# Write a python expression that gets the email address of Jasmine.
# Write a python expression that gets the second of Jan's two interests.

ramit = { 
  'name': 'Ramit', 
  'email': 'ramit@gmail.com', 
  'interests': ['movies', 'tennis'], 
  'friends': [ 
     { 
       'name': 'Jasmine', 
       'email': 'jasmine@yahoo.com', 
       'interests': ['photography', 'tennis']
     }, 
     { 
        'name': 'Jan', 
        'email': 'jan@hotmail.com', 
        'interests': ['movies', 'tv'] 
     } 
    ] 
}

# 1. write a python expression that gets the email address of Ramit
ramit.get('email')
print(ramit.get('email')) #just checking

# 2. Write a python expression that gets the first of Ramit's interests.
interest1 = ramit['interests'][0]
print (interest1) #just checking

# 3. Write a python expression that gets the email address of Jasmine.
jasie = ramit['friends'][0]['email']
print (jasie) #just checking

# 4. Write a python expression that gets the second of Jan's two interests.
jan = ramit['friends'][1]['interests'][1]
print(jan) #just checking
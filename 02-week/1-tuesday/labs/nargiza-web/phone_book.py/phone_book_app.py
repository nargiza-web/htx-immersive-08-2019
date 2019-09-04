#Write a Phone Book App

#You will write a command line program to manage a phone book. When you start the phonebook.py program, it will print out a menu and ask the user to enter a choice:

#$ python phonebook.py 
#Electronic Phone Book 
#===================== 
#1. Look up an entry 
#2. Set an entry 
#3. Delete an entry 
#4. List all entries 
#5. Quit
#What do you want to do (1-5)?

#If they choose to look up an entry, you will ask them for the person's name, and then look up the person's phone number by the given name and print it to the screen.
#If they choose to set an entry, you will prompt them for the person's name and the person's phone number,
#If they choose to delete an entry, you will prompt them for the person's name and delete the given person's entry.
#If they choose to list all entries, you will go through all entries in the dictionary and print each out to the terminal.
#If they choose to quit, end the program.
#Example session:

#$ python phonebook.py 

#Electronic Phone Book 
#===================== 
#1. Look up an entry 
#2. Set an entry 
#3. Delete an entry 
#4. List all entries 
#5. Quit 
#What do you want to do (1-5)? 2 
#Name: Melissa 
#Phone Number: 584-394-5857 
#Entry stored for Melissa. 

#Electronic Phone Book 
#===================== 
#1. Look up an entry 
#2. Set an entry 
#3. Delete an entry 
#4. List all entries 
#5. Quit What do you want to do (1-5)? 2 
#Name: Igor 
#Phone Number: 857-485-2935 
#Entry stored for Igor. 

#Electronic Phone Book 
#===================== 
#1. Look up an entry 
#2. Set an entry 
#3. Delete an entry 
#4. List all entries 
#5. Quit What do you want to do (1-5)? 2 
#Name: Jazz 
#Phone Number: 334-584-2345 
#Entry stored for Jazz. 

#Electronic Phone Book 
#===================== 
#1. Look up an entry 
#2. Set an entry 
#3. Delete an entry 
#4. List all entries 
#5. Quit 
#What do you want to do (1-5)? 1 
#Name: Melissa 
#Found entry for Melissa: 584-394-5857 

#Electronic Phone Book 
#===================== 
#1. Look up an entry 
#2. Set an entry 
#3. Delete an entry 
#4. List all entries 
#5. Quit What do you want to do (1-5)? 3 
#Name: Melissa 
#Deleted entry for Melissa 

#Electronic Phone Book 
#===================== 
#1. Look up an entry 
#2. Set an entry 
#3. Delete an entry 
#4. List all entries 
#5. Quit What do you want to do (1-5)? 
#4 Found entry for Igor: 857-485-2935 
#Found entry for Jazz: 334-584-2345 

#Electronic Phone Book ===================== 
#1. Look up an entry 
#2. Set an entry 
#3. Delete an entry 
#4. List all entries 
#5. Quit What do you want to do (1-5)? 
#5 Bye.

my_val = 0


phonebook = { 'John': ' 832-988-1699',
              'Joe': '831-892-23-49',
             'Doe': '290-432-12-32',
              'Someone': '789-321-21-43'
             }

while my_val != 5:
    #each time prints out these:
    print()
    print ( "Electronic Phone Book")
    print ("=======================")
    print ("1. Look up an entry ")
    print ("2. Set an entry")
    print ("3. Delete an entry")
    print ("4. List all entries")
    print("5. Quit")
    print ()
    my_val = int(input('What do you want to do? (1-5)? '))
    print()
    if my_val == 1:
        name = input('Name: ')
        if name in phonebook :
            print(f'Found entry for {name}:', phonebook[name])
            
        else :
            print ('Sorry not found')
            
    elif my_val == 2:
        nar = input ('Name: ')
        phone = input ('Phone Number: ')
        phonebook[nar] = phone
        print (f'Entry stored for {nar}')
    elif my_val == 3:
        delete = input('Name: ')
        phonebook.pop(delete)
        print(f'Deleted entree for {delete}')
    
    elif my_val == 4:
        for x in phonebook.keys():
            print("Found entree for ", x,": " , phonebook[x] )

    elif my_val != 5:
        print ( "Electronic Phone Book")
        print ("=======================")
        print ("1. Look up an entry ")
        print ("2. Set an entry")
        print ("3. Delete an entry")
        print ("4. List all entries")
        print("5. Quit")
print('Bye.')

    
    
value = int(input('Enter a row?: '))
s = (value+1) //2
space = ' '
for i in range(1,value+2,2):
    print ((space * s) + ('*' * i))
    s -= 1
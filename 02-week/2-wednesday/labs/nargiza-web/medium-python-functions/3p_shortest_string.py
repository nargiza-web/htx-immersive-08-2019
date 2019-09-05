
def shortest_string(item):
    x = item[0]
    for i in item:
        if len(i) < len(x):
            x = i
    return x
        

print(shortest_string( ["abcdjk", "abc", "abca", "abcab","k","ab"]))
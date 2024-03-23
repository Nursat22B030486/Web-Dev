def xor(a, b):
    if(a == 0 and b == 0 ) or (a == 1 and b == 1):
        print(0)
    else: 
        print(1)


arr = [int(x) for x in input().split()]
a = arr[0]
b = arr[1]
xor(a, b)
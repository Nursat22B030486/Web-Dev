import math


a, b = int(input()), int(input())

for i in range(a, b+1):
    if(i%math.sqrt(i) == 0):
        print(i, end=" ")
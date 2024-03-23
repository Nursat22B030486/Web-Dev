import math

n, m = int(input()), int(input())
if math.fmod((n*m),109) >= 0:
    print(int(math.fmod((n*m),109)))
else: print(109 + int(math.fmod((n*m),109)))
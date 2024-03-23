def power(a, b):
    d  = 1
    for _ in range(0, b):
        d *= a
    return d


a = [float(x) for x in input().split()]
b = float(a[0])
c = int(a[1])
print(power(b, c))


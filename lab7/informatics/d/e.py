n = int(input())

a = list(map(int, input().split()))
flag = False
for i in range(0, len(a)-1):
    if(a[i] > 0 and  a[i+1] > 0) or (a[i] < 0 and  a[i+1] < 0):
        flag = True

if(flag): 
    print("YES")
else: 
    print("NO")

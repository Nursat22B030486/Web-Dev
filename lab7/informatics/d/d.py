n = int(input())

a = list(map(int, input().split()))
count = 0
for i in range(0, len(a)-1):
    if(a[i] < a[i+1]):
        count+=1

print(count)
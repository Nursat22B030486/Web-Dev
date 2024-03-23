# Input Format

# The first line contains . The second line contains an array   of  integers each separated by a space.

# Constraints

# Output Format

# Print the runner-up score.
if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    arr1 = set(arr)
    arr2 = sorted(arr1)
    print(arr2[-2])
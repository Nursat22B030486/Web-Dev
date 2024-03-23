def lone_sum(a, b, c):
  if ( a == b and b == c):
    return 0
  elif( a == b and b != c):
    return c
  elif(a == c and b != a):
    return b
  elif( b == c and a !=b):
    return a
  else: return a + b +c
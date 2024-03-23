def last2(str):
  s = str[len(str) - 2:]
  count = 0
  if (len(str) < 2):
    return 0
  for i in range(0, len(str)-2):
    if( s == str[i: i+2]):
      count +=1
    
  return count
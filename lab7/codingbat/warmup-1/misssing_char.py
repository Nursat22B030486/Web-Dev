def missing_char(str, n):
  res = ""
  for i in range(0, len(str)):
    if(i == n): continue
    res += str[i]
  return res
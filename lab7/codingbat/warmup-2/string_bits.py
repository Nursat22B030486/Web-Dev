def string_bits(str):
  res = ""
  for i in range(0, len(str)):
    if(i%2 == 0):
      res += str[i]
      
  return res
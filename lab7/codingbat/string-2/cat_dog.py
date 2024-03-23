def cat_dog(str):
  count_1 = 0
  count_2 = 0
  for i in range(len(str)-2):
    if(str[i:i+3] == "cat"):
      count_1 += 1
    if(str[i:i+3] == "dog"):
      count_2 += 1
      
  if(count_1 == count_2):
    return True
  return False
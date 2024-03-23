

def sleep_in(weekday, vacation):
  if(weekday == True):
    if(weekday == True and vacation == True): 
      return True
    return False
  elif((weekday == False) or (vacation == True)):
    return True
  
  else: return False
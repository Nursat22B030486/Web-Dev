def end_other(a, b):
  
  short = ""
  a = a.lower()
  b = b.lower()
  
  if(len(a) >= len(b)):
    short = b
    if(a[len(a)-len(b):] == short) : return True
  elif(len(a) < len(b)):
    short = a
    if(b[len(b)-len(a):] == short) : return True
  
  return False
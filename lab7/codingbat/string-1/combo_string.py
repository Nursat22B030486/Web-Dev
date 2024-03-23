def combo_string(a, b):
  short = ""
  if(len(a) > len(b)):
    short = b
    return b + a + b
  return a + b + a 
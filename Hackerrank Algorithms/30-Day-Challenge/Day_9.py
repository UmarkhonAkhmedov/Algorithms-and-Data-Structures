def recur_factorial(n):
   if n == 1:
       return n
   else:
       return n*recur_factorial(n-1)


n = int(input())
result = recur_factorial(n)
print(result)

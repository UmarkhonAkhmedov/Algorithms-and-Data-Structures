number = int(input())
for _ in range(number):
    string = str(input())
    print("{} {}".format(string[0::2], string[1::2]))

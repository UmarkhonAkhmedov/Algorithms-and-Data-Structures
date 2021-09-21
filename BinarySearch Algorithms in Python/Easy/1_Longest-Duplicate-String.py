def solve(s):
    if len(s) == 0:
        return 0
    count = 1
    res = 0
    for i in range(1, len(s)):
        if s[i] == s[i-1]:
            count += 1
        else:
            res = max(res, count)
            count = 1
    return max(res, count)


user_input = input()
print(solve(user_input))

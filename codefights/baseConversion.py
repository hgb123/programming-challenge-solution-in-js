def baseConversion(n, x):
    return "{0:x}".format(sum([j * (x ** (len(str(n)) - i - 1)) for i, j in enumerate(map(lambda i: ord(i) - ord('a') + 10 if 'a' <= i <= 'z' else int(i), str(n)))]))

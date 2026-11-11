B = int(input('Введите последнее значение'))
S = 0

for i in range(1,B):
    S = S + 1/i
    print(S, i)
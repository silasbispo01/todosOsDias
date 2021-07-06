# for c in range(1, 10):
#     print(c)
# print('fim')
#
# c = 1
# while c < 10:
#     print(c)
#     c += 1
# print('fim')

print('-------- TABUADA --------')
tabuada = 1
while tabuada <= 10:
    print('TABUADA DE: {}'.format(tabuada))
    n = 1
    while n <= 10:
        print('  {} x {} = {}'.format(tabuada, n, tabuada * n))
        n += 1

    tabuada += 1

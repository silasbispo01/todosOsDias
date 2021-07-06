# for i in range(6, 0, -2):
#     print('Oi', i)
# print('Fim')

# n = int(input('Digite um número: '))
# for c in range(0, n):
#     print(c + 1)
# print('Fim')

# from time import sleep
# for c in range(10, -1, -1):
#     print(c)
#     sleep(1)
# print('BUMM! BUM! POOW!')

# s = 0
# for n in range(1, 501):
#     if n % 3 == 0 and n % 2 != 0:
#         s += n
# print(s)
counter = 0
for n in range(1, 11):
    for t in range(1, 11):
        counter += 1
        print(n * t)
print('fim', counter)


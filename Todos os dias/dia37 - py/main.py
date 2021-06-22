a = 1 + 2 + 3 + 4 + 5
b = (23 + 19 + 31) / 3
c = int(407/73)
d =  403 % 73
e = 2 ** 10
f = (54 - 57)
g = min(34, 29, 31)


a2 = int(3)
b2 = 4
c2 = a * a + b * b

s1 = 'ant'
s2 = 'bat'
s3 = 'cod'

# print(s1 + ' ' + s2 + ' ' + s3)
# print((s1 + ' ' )* 10)
# print(s1 + ' ' + (s2 + ' ') * 2 + ' ' +  (s3 + ' ') * 3)

valor = int(input('Insira o valor do produto: '))
desconto = int(input('Agora insira um desconto percentual: '))
desconto = (desconto / 100)
valorComDesconto = valor - (valor * desconto)
print('O produto de valor: R$' + str(valor) + ' agora custa: R$' + str(valorComDesconto))
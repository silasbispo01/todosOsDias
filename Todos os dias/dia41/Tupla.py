# Item é imutável na tupla, mas pode ser apagada e re-atribuida em total.

mochila = ('machado', 'camisa', 'bacon', 'abacate')

#for i in mochila:
#    print(i)

# Não pode trocar o machado pela faca
# mochila[0] = ('faca')
# print(mochila)
###### TypeError: 'tuple' object does not support item assignment

# Desempacotamento de parâmetros em funções com tuplas

def soma(*num):
    total = 0
    print('Soma de: {}'.format(num))
    for i in num:
        total += i
    return total

print('Resultado: {}\n'.format(soma(2,3)))
print('Resultado: {}\n'.format(soma(2,3,4,5,6,7,8,9,10)))
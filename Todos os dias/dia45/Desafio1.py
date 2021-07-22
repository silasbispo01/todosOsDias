numJogadas = int(input())

jogadas = []
for x in range(numJogadas):
    itemJogado = input()

    if (itemJogado == 'Plastico'):
        jogadas.append('Alicate')
    elif (itemJogado == 'Martelo'):
        jogadas.append('Plastico')
    elif (itemJogado == 'Alicate'):
        jogadas.append('Martelo')

for numJogada in range(len(jogadas)):
    print(jogadas[numJogada])


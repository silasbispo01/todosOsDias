# Importação do random
import random

# Criação da lista de sorteios vazia
listaSorteio = []

# For para cadastro de 3 pessoas
for p in range(3):

    # Inputs para nome da pessoa e quantia doada.
    nome = input('Insira seu nome: ')
    valorDoado = int(input('Insira o valor doado: R$'))

    # Calculo de quantas vezes a pessoa tem direito a aparecer na lista "quantidade de chances"
    chances = (int(valorDoado/10))

    #For para adicionar pessoa na lista de acordo com as "chances"
    for x in range(chances):
        listaSorteio.append(nome)

# Método utilizado para embaralhar nomes na lista e print dos nomes embaralhados.
random.shuffle(listaSorteio)
print(listaSorteio)

# Sorteio do ganhador utilizando o método .choice + print do nome da pessoa.
print('O ganhador foi {}'.format(random.choice(listaSorteio)))
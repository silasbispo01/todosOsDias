running = bool(True)

# Início do laço while
while running:
    # Input para setar nome do aluno
    nome = str(input('Digite o seu nome: '))

    notaValida = bool(False)

    # Início do laço para verificar a nota e setar conceito
    while (notaValida == False):

        # Input para setar nota do aluno
        nota = float(input('Digite a sua nota: '))

        # Inicio dos if's para verificar se a nota é valida e setar conceito
        if (nota >= 0 and nota < 3):
            conceito = 'E'
            notaValida = True
        elif (nota >= 3 and nota < 5):
            conceito = 'D'
            notaValida = True
        elif (nota >= 5 and nota < 7):
            conceito = 'C'
            notaValida = True
        elif (nota >= 7 and nota < 9):
            conceito = 'B'
            notaValida = True
        elif (nota >= 9 and nota <= 10):
            conceito = 'A'
            notaValida = True
        else:
            print('Nota inválida!')
            notaValida = False

    # Resposta fora do laço que diz o nome, a nota e o conceito do aluno
    print('O aluno(a) {}, tirou nota: {} e se enquadra no conceito {}'.format(nome, nota, conceito))

    # Input + if's para saber se o usuário deseja inserir mais dados, se sim, o laço será reiniciado!
    option = input('Deseja inserir mais dados? [S/N] ').upper()
    if(option == 'S'):
        running = True
    else:
        running = False
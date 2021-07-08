def geraEmail ():
    nome = input('Digite seu primeiro nome: ').strip()
    sobrenome = input('Digite seu sobrenome: ').strip()
    nomeCompleto = nome + ' ' + sobrenome

    firstLetter = nome[0]
    lastRUNumber = '83'
    email = firstLetter.lower() + sobrenome.lower().replace(' ', '') + lastRUNumber + '@algoritimos.com.br'

    print('Sr {}, seu email é {}'.format(nomeCompleto, email))
geraEmail()
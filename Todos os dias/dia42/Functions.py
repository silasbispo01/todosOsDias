def div():
    try:
        n1 = int(input('Digite um número: '))
        n2 = int(input('Digite outro número: '))
        res = n1 / n2
        return res
    except ZeroDivisionError:
        print('Não é possível dividir um número por zero, tente novamente...')
    except:
        print('Algo não está certo, tente novamente...')


print(div())
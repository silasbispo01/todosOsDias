numJogadas = int(input())

respostas = []
for x in range(numJogadas):
    num = int(input())
    decimal = len(str(num))

    romano = []
    romano2 = []
    romanoC = []

    if decimal == 1:
        if num <= 3:
            romano.append('I' * num)
        elif num == 4:
            romano.append('IV')
        elif num == 5:
            romano.append('V')
        elif num > 5 and num < 9:
            romano.append('V{}'.format('I' * (num - 5)))
        elif num == 9:
            romano.append('IX')

        respostas.append(romano[0])

    elif decimal == 2:
        numD = int(num / 10)
        num = int(num % 10)

        if numD <= 3:
            romano.append('X' *  numD)
        elif numD == 4:
            romano.append('XL')
        elif numD == 5:
            romano.append('L')
        elif numD > 5 and numD < 9:
            romano.append('L{}'.format('X' * (numD - 5)))
        elif numD == 9:
            romano.append('XC')

        if num <= 3:
            romano2.append('I' * num)
        elif num == 4:
            romano2.append('IV')
        elif num == 5:
            romano2.append('V')
        elif num > 5 and num < 9:
            romano2.append('V{}'.format('I' * (num - 5)))
        elif num == 9:
            romano2.append('IX')

        romanoString = ("".join((romano[0], romano2[0])))
        respostas.append(romanoString)

    elif decimal == 3:
        numC = int(num / 100)
        numD = int(num % 100)
        num = int(num % 10)

        if numC <= 3:
            romanoC.append('C' * numC)
        elif numC == 4:
            romanoC.append('CD')
        elif numC == 5:
            romanoC.append('D')
        elif numC > 5 and numC < 9:
            romanoC.append('D{}'.format('C' * (numC - 5)))
        elif numC == 9:
            romanoC.append('CM')
        else:
            romanoC.append('')

        if numD <= 30:
            romano.append('X' * int(numD/10))
        elif numD == 40:
            romano.append('XL')
        elif numD == 50:
            romano.append('L')
        elif numD > 50 and num < 90:
            romano.append('L{}'.format('X' * int((numD / 10) - 5)))
        elif numD == 90:
            romano.append('XC')
        else:
            romano.append('')

        if num <= 3:
            romano2.append('I' * num)
        elif num == 4:
            romano2.append('IV')
        elif num == 5:
            romano2.append('V')
        elif num > 5 and num < 9:
            romano2.append('V{}'.format('I' * (num - 5)))
        elif num == 9:
            romano2.append('IX')
        else:
            romano2.append('')


        romanoString = (romanoC[0] + romano[0] + romano2[0])
        respostas.append(romanoString)



#
for resposta in respostas:
    print(resposta)






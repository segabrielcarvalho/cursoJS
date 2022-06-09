print('*******************************')
print('Bem-vindo ao jogo de advinhação')
print('*******************************')


numeroSecreto = 42
chute_str = input("Digite o seu numero: ")
print("Você digitou o numero", chute_str)
chute = int(chute_str)

if(numeroSecreto == chute):
    print("Voce acertou!")
else: 
    print("Você errou, o numero secreto é:", numeroSecreto)
# Projeto_Pong_UnidadeI

# PONG
Pong é um dos jogos de arcade mais antigos e icônicos, criado originalmente por Atari em 1972. Trata-se de um jogo de tênis de mesa simples onde dois jogadores controlam barras verticais que se movem para cima e para baixo, foi adicioandos também os movimento (para cima e para baixo) . O objetivo é usar essas barras para rebater uma bola que se desloca pela tela, tentando fazer com que a bola passe pela barra do adversário para marcar pontos.


- Manipulação do canvas para desenhar a bola, as barras e o campo.
- Lógica para mover as barras com as teclas de controle.
- Detecção de colisão entre a bola e as barras, bem como entre a bola e as bordas do campo.
- Atualização da posição da bola e das barras em cada frame do jogo.
- Lógica para aumentar a pontuação e resetar a bola quando um ponto é marcado.

# Principais Componentes

### Canvas
Utilizado para desenhar os elementos gráficos do jogo.
Configurado com dimensões apropriadas para o jogo.

### Barras (Raquetes):
Controladas pelo jogador através de eventos de teclado.
Desenhadas como retângulos no canvas.

### Bola:
Um círculo que se move pelo campo e rebate nas barras e nas bordas.
Lógica de Jogo:

- Funções para detectar colisões.
- Atualização contínua da posição dos elementos.
- Controle da velocidade e direção da bola.
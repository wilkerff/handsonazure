# Jogo de Roleta

Este projeto é um jogo de roleta desenvolvido utilizando HTML, CSS e JavaScript. A roleta gira com uma animação realista, e uma bolinha interage com a roleta seguindo as leis da física.

## Estrutura do Projeto

O projeto contém os seguintes arquivos:

- **src/index.html**: Estrutura principal do jogo, contendo o canvas para a roleta, um botão para girar a roleta e um elemento para exibir o resultado.
  
- **src/css/style.css**: Estilos CSS para o jogo, incluindo formatação do layout, cores e animações para o canvas e elementos da interface.
  
- **src/js/physics.js**: Implementa as leis da física que governam o movimento da bolinha e a rotação da roleta, incluindo funções para calcular velocidade e aceleração.
  
- **src/js/roulette.js**: Lógica da roleta, com funções para desenhar a roleta no canvas, girá-la e determinar o resultado após a rotação.
  
- **src/js/game.js**: Gerencia a lógica do jogo, incluindo a interação do usuário e a atualização do estado do jogo.

## Como Executar o Jogo

1. Clone o repositório ou faça o download dos arquivos.
2. Abra o arquivo `src/index.html` em um navegador web.
3. Clique no botão "Girar a Roleta" para iniciar o jogo.

## Funcionamento da Roleta

A roleta gira com uma velocidade inicial e desacelera gradualmente. A bolinha se move em direção ao centro da roleta e para quando atinge uma das divisões, indicando o resultado do jogo. As animações são implementadas para proporcionar uma experiência visual agradável.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript

Sinta-se à vontade para explorar e modificar o código!
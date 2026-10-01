# Atividade 4 — Criar elementos

## Objetivo

Praticar como criar elementos HTML a partir de dados em JavaScript, sem
usar `innerHTML`.

## Conceito praticado

- `document.createElement`
- `textContent`
- `appendChild`
- `replaceChildren()` para limpar uma lista antes de repopular
- `Array.prototype.filter`
- Remoção de elemento com `.remove()`

## Passos

1. Abra `index.html` com o Live Server.
2. Complete o `TODO 1`: implemente `renderizarServicos(lista)` criando um
   `<li>` por serviço, com elementos internos para nome, prazo e preço, e
   um botão "Remover" — tudo com `createElement` + `textContent` +
   `appendChild`.
3. Dentro da mesma função, trate o caso de lista vazia mostrando
   "Nenhum serviço disponível".
4. Complete o `TODO 2`: limpe a lista antes de renderizar de novo, usando
   `replaceChildren()`.
5. Complete o `TODO 3`: faça o botão "Remover" de cada item apagar aquele
   item da tela.
6. Complete o `TODO 4`: implemente o filtro por nome usando `filter`.
7. Teste digitando no campo de filtro, removendo itens, e apagando tudo
   do campo de filtro (deve limpar o filtro e mostrar tudo de novo, ou
   mostrar a mensagem de vazio se você remover todos os itens).

## Dicas (métodos a usar)

- `document.createElement("li")` cria um elemento novo (ainda fora da
  página).
- `elemento.textContent = "texto"` define o texto de um elemento criado.
- `pai.appendChild(filho)` insere o elemento criado dentro de outro.
- `lista.replaceChildren()` sem argumentos remove todos os filhos de uma
  vez — ideal para "limpar antes de redesenhar".
- `array.filter((item) => condicao)` retorna um novo array só com os itens
  que passam na condição.
- `"ABC".toLowerCase().includes("ab")` ajuda a comparar texto ignorando
  maiúsculas/minúsculas.
- `botao.closest("li")` encontra o `<li>` mais próximo a partir do botão.
- `elemento.remove()` tira o elemento da página.

## Pronto quando

- [ ] Os 4 serviços aparecem na tela como uma lista de verdade (`<li>`
      dentro de `<ul>`), sem usar `innerHTML`.
- [ ] Digitar no campo de filtro atualiza a lista em tempo real.
- [ ] Clicar em "Remover" tira o item da tela.
- [ ] Remover todos os itens (ou filtrar até não sobrar nada) mostra
      "Nenhum serviço disponível".

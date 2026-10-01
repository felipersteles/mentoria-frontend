# Atividade 1 — Encontrar elementos

## Objetivo

Praticar as formas mais comuns de selecionar elementos no DOM com
JavaScript puro.

## Conceito praticado

- `document.querySelector()`
- `document.querySelectorAll()`
- Verificação de `null` antes de usar um elemento

## Passos

1. Abra `index.html` com o Live Server.
2. Abra `app.js` e leia os comentários `// TODO`.
3. Complete o `TODO 1`: selecione o `<h1>` da página.
4. Complete o `TODO 2`: selecione todos os links dentro do `<nav>`.
5. Complete o `TODO 3`: selecione a seção `#servicos`.
6. Complete o `TODO 4`: selecione o botão dentro do `<form>`.
7. Complete o `TODO 5`: escreva na tela quantos links o menu tem, usando o
   parágrafo `#contagem-links`.
8. Complete o `TODO 6`: se algum seletor não encontrar nada (`null` ou uma
   lista vazia), mostre um aviso no elemento `#aviso-selecao`.
9. Salve e veja o resultado no navegador. Abra o console (F12) para
   conferir o `console.log` no final do arquivo.

## Dicas (métodos a usar)

- `document.querySelector("seletor")` retorna o primeiro elemento que
  bater com o seletor, ou `null` se não encontrar nada.
- `document.querySelectorAll("seletor")` retorna uma `NodeList` com todos
  os elementos que baterem com o seletor (pode estar vazia).
- Uma `NodeList` tem `.length`, assim como um array.
- Para checar se algo é `null`: `if (elemento === null) { ... }`.
- Para checar se uma `NodeList` está vazia: `if (lista.length === 0) { ... }`.

## Pronto quando

- [ ] `titulo`, `secaoServicos` e `botaoEnviar` não são `null`.
- [ ] `linksDoMenu` tem 3 itens.
- [ ] O texto "O menu tem 3 links." (ou similar) aparece na tela.
- [ ] Se você renomear temporariamente o `id="servicos"` no HTML para
      testar, o aviso de erro aparece corretamente — depois desfaça a
      alteração.

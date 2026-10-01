# Módulo 3 · Atividade 2 — Flexbox

## Objetivo

Montar o layout de uma página inteira com Flexbox: cabeçalho com a logo de
um lado e o menu do outro, uma grade de cards que quebra linha sozinha e um
rodapé que fica colado no fim da tela.

O `index.html` está pronto e semântico. **Mexa somente no `style.css`.**

## O que já vem no HTML

- `<header>` com uma logo e um `<nav>` com 4 links
- `<main>` com uma seção e 6 cards (`<article class="card">`)
- `<footer>`

## Passos

Os TODO estão numerados dentro do `style.css`. Faça na ordem:

1. **TODO 1** — `.cabecalho` com `display: flex`,
   `justify-content: space-between` e `align-items: center`.
2. **TODO 2** — `.menu` com `display: flex` e `gap` entre os links.
3. **TODO 3** — `.cards` com `flex-wrap: wrap` e `gap`; `.card` com
   `flex: 1 1 260px`.
4. **TODO 4** — `body` em coluna com `min-height: 100vh` e `main { flex: 1 }`.

## Dicas

- Flexbox sempre envolve **dois lados**: o pai (`display: flex`,
  `justify-content`, `align-items`, `gap`, `flex-wrap`) e os filhos
  (`flex`, `flex-grow`, `flex-shrink`, `flex-basis`). Quando algo não
  funciona, pergunte: "estou mexendo no pai ou no filho?".
- `justify-content` trabalha no sentido principal (na linha, por padrão) e
  `align-items` no sentido cruzado (a altura, por padrão). Trocar os dois
  de lugar é o erro mais comum do início.
- Use `gap` para espaçar itens de flex, não `margin`. É mais simples e não
  sobra espaço nas pontas.
- `flex: 1 1 260px` é o atalho de `flex-grow: 1`, `flex-shrink: 1`,
  `flex-basis: 260px`. Leia como: "quero 260px, mas me adapto".
- Para testar o TODO 4, aperte `F12` e redimensione a janela, ou olhe a
  página em uma tela grande: o rodapé não deve "flutuar" no meio.

## Como abrir

No VS Code, botão direito no `index.html` → **"Open with Live Server"**.

## Pronto quando

- [ ] A logo fica na ponta esquerda e o menu na ponta direita, alinhados
      na mesma altura.
- [ ] Os links do menu ficam na mesma linha, com espaço entre eles.
- [ ] Estreitando a janela, os cards quebram para a linha de baixo sozinhos
      (3 por linha, depois 2, depois 1) — sem nenhuma media query.
- [ ] O rodapé fica no fim da tela mesmo com pouco conteúdo.
- [ ] Nenhum TODO ficou para trás.

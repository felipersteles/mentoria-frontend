# Módulo 3 · Atividade 3 — Responsivo

## Objetivo

Pegar a página da atividade 2 e fazê-la funcionar no celular, usando a
abordagem **mobile first**: o CSS padrão é o da tela pequena, e o layout de
tela grande entra depois, dentro de uma `@media`.

O `index.html` está pronto (é a mesma página da atv2, com um banner a mais)
e o `style.css` **já vem com o flexbox da atividade 2 resolvido**. Mexa
somente no `style.css`.

> Faça a [atividade 2](../atv2-flexbox) antes desta.

## Passos

Os TODO estão numerados dentro do `style.css`. Faça na ordem:

1. **TODO 1** — confira a `<meta name="viewport">` no `index.html` (sem CSS
   para escrever, só para entender).
2. **TODO 2** — CSS padrão = celular: `.cabecalho`, `.menu` e `.cards` em
   coluna.
3. **TODO 3** — `@media (min-width: 768px)` devolvendo o layout de desktop.
4. **TODO 4** — `clamp()` no `h1`.
5. **TODO 5** — `img { max-width: 100%; height: auto; }`.

**Desafio opcional:** trocar o flex dos cards por
`grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))`.

## Como testar em "celular"

1. Abra com o Live Server.
2. Aperte `F12` e clique no ícone de celular/tablet (*Toggle device
   toolbar*, ou `Ctrl`+`Shift`+`M`).
3. Digite a largura **375** (é o tamanho de um iPhone SE — a tela pequena
   mais comum).
4. Depois teste em **1280** para conferir o desktop.

## Dicas

- `@media (min-width: 768px)` significa "a partir de 768px de largura, vale
  **também** isto". Por isso o mobile first dá menos trabalho: você adiciona
  regras conforme a tela cresce, em vez de desfazer regras conforme ela
  encolhe.
- A barra de rolagem horizontal quase sempre vem de **uma** coisa: um
  elemento com largura fixa maior que a tela (uma imagem, uma tabela, um
  `width: 500px`). O `max-width: 100%` resolve a maioria dos casos.
- `height: auto` junto com `max-width: 100%` é o que mantém a proporção da
  imagem. Só o `max-width` achata a imagem.
- `clamp(min, ideal, max)` evita duas media queries só para tamanho de
  fonte. Nunca use um valor em `vw` sozinho: em telas muito estreitas o
  texto fica ilegível, e é por isso que existe o mínimo.
- Teste com zoom de 200% (`Ctrl`+`+`): se o layout usa `rem` e `%` em vez de
  `px` fixo, ele continua legível. Isso não é detalhe — muita gente navega
  com zoom.

## Pronto quando

- [ ] Em **375px** de largura **não há rolagem horizontal** (nada
      "transborda" para o lado).
- [ ] Acima de **768px** o menu volta para a mesma linha e os cards voltam
      a ficar lado a lado.
- [ ] Com **zoom de 200%** no desktop, tudo continua legível e nada fica
      cortado.
- [ ] O banner nunca passa da largura da tela, e não fica achatado.
- [ ] O título cresce e diminui junto com a tela, sem ficar minúsculo nem
      gigante.
- [ ] Nenhum TODO ficou para trás.

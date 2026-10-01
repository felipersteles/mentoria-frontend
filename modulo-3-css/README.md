# Módulo 3 — CSS na prática

## Objetivo

Escrever CSS à mão, sem framework, para resolver os três problemas que
aparecem em todo projeto real: **deixar um formulário apresentável e
acessível**, **montar o layout da página com Flexbox** e **fazer a página
funcionar no celular**.

Em todas as atividades deste módulo o `index.html` já vem pronto e
semântico. **Você mexe somente no `style.css`**, completando os
`/* TODO */` numerados, na ordem.

> Pré-requisito: ter terminado o [módulo 1](../modulo-1-html). O módulo 2
> não é necessário aqui — este módulo não usa JavaScript.

## Atividades, em ordem

| # | Pasta | Conceito principal |
|---|-------|--------------------|
| 1 | [`atv1-formulario`](./atv1-formulario) | Campos, `:focus-visible`, `:user-invalid`, `accent-color` |
| 2 | [`atv2-flexbox`](./atv2-flexbox) | `display: flex`, `justify-content`, `gap`, `flex-wrap`, `flex: 1 1 260px` |
| 3 | [`atv3-responsivo`](./atv3-responsivo) | Mobile first, `@media`, `clamp()`, imagem fluida |

A atividade 3 usa a mesma página da atividade 2, já com o CSS dela
resolvido como ponto de partida — então faça a 2 antes da 3.

## Como abrir com o Live Server

1. No VS Code, instale a extensão **Live Server** (autor: Ritwick Dey).
2. Clique com o botão direito no `index.html` da atividade.
3. Escolha **"Open with Live Server"**.
4. Salve o `style.css`: o navegador recarrega sozinho.

Para testar tela de celular: `F12` → ícone de celular (*Toggle device
toolbar*, ou `Ctrl`+`Shift`+`M`) → largura **375**. Para desktop, **1280**.

## Regras do módulo

- Nada de Bootstrap, Tailwind ou qualquer outro framework. O objetivo é
  entender o que eles fazem por baixo.
- Não altere o `index.html`. Se você sentir vontade de mudar o HTML para o
  CSS funcionar, provavelmente existe um seletor que resolve.
- Nunca remova o contorno de foco (`outline: none`) sem colocar outra
  indicação visual no lugar.

## Checklist de entrega

- [ ] Nenhum TODO ficou para trás (procure por "TODO" nos três `style.css`).
- [ ] Nenhum `index.html` foi alterado.
- [ ] Nenhum framework de CSS foi usado.
- [ ] Em **375px** de largura, nenhuma das páginas tem rolagem horizontal.
- [ ] Em todas as páginas, apertando `Tab`, dá para ver claramente onde o
      foco está.
- [ ] Com zoom de 200%, o conteúdo continua legível e nada fica cortado.
- [ ] Os espaçamentos usam `gap` e `rem`, não `margin` com valores fixos em
      `px` espalhados.

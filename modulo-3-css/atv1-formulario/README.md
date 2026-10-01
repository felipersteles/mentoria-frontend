# Módulo 3 · Atividade 1 — Formulário

## Objetivo

Estilizar um formulário de inscrição de verdade: deixar todos os campos com
a mesma aparência, fazer o foco do teclado aparecer e mostrar o erro só
depois que a pessoa mexeu no campo.

O `index.html` está pronto e semântico. **Mexa somente no `style.css`.**

## O que já vem no HTML

Nome, e-mail, telefone (`type="tel"`), data de nascimento (`type="date"`),
curso (`<select>`), turno (três `radio` dentro de um `<fieldset>` com
`<legend>`), aceite dos termos (`checkbox`) e uma mensagem (`<textarea>`).

## Passos

Os TODO estão numerados dentro do `style.css`. Faça na ordem:

1. **TODO 1** — `.campo` como flex em coluna, com `gap` entre label e campo.
2. **TODO 2** — `padding`, `border`, `border-radius` e `font: inherit` nos
   `input`, `select` e `textarea`.
3. **TODO 3** — as opções de turno lado a lado, com flex.
4. **TODO 4** — `:focus-visible` com `outline` bem visível.
5. **TODO 5** — `:user-invalid` com borda de erro.
6. **TODO 6** — `accent-color` no formulário, para pintar radio e checkbox.

## Dicas

- `font: inherit` é o que faz o `<select>` e o `<textarea>` usarem a mesma
  fonte do resto da página. Sem isso eles aparecem com a fonte padrão do
  navegador e o formulário fica "remendado".
- `:focus-visible` ≠ `:focus`. O `:focus` também dispara no clique do mouse;
  o `:focus-visible` só quando o navegador entende que a pessoa está
  navegando por teclado. É o que você quer aqui.
- Nunca use `outline: none` sem colocar outra indicação visual no lugar —
  isso deixa quem usa teclado perdido na página.
- `:user-invalid` só vale depois que a pessoa interagiu com o campo. Teste:
  recarregue a página e repare que nada aparece em vermelho; clique no
  campo de e-mail, digite `abc`, saia do campo — aí sim.
- `accent-color` é uma propriedade só, aplicada no pai: ela colore o
  `radio` e o `checkbox` nativos sem você recriá-los do zero.

## Como abrir

No VS Code, botão direito no `index.html` → **"Open with Live Server"**.
Salve o `style.css` e o navegador recarrega sozinho.

## Pronto quando

- [ ] Todos os campos têm a mesma aparência: mesma borda, mesmo
      arredondamento, mesmo espaçamento interno e **a mesma fonte**.
- [ ] Apertando `Tab`, dá para ver claramente em qual campo você está.
- [ ] O erro (borda vermelha) **não** aparece quando a página carrega — só
      depois de você mexer no campo e deixá-lo inválido.
- [ ] As três opções de turno ficam na mesma linha.
- [ ] O radio e o checkbox estão na cor do projeto, não no azul padrão.
- [ ] Nenhum TODO ficou para trás.

# Atividade 2 — Alterar conteúdo

## Objetivo

Praticar como alterar texto, atributos e classes de elementos que já
existem no HTML — sem criar nada novo.

## Conceito praticado

- `textContent`
- `setAttribute` / `removeAttribute`
- `classList.add` / `classList.remove` / `classList.toggle`
- Atributos de acessibilidade `aria-invalid`, `aria-describedby` e
  `aria-pressed`

## Passos

1. Abra `index.html` com o Live Server.
2. No formulário, digite um e-mail inválido (ex.: `teste`) e clique em
   "Confirmar".
3. Complete o `TODO 1`: mostre a mensagem de erro no `#erro-email`.
4. Complete o `TODO 2`: marque o campo como inválido para leitores de tela.
5. Complete o `TODO 3`: adicione a classe visual `.is-error` ao campo.
6. Complete o `TODO 4`: quando o e-mail for válido, desfaça tudo isso.
7. Complete o `TODO 5`: faça o botão "Alternar tema" trocar entre claro e
   escuro, atualizando `aria-pressed`.
8. Use a seção "Painel de acessibilidade" no final da página para
   conferir, em texto, o que você está aplicando no campo.

## Dicas (métodos a usar)

- `elemento.textContent = "algo"` troca o texto de um elemento.
- `elemento.setAttribute("aria-invalid", "true")` adiciona/atualiza um
  atributo.
- `elemento.removeAttribute("aria-invalid")` remove um atributo.
- `elemento.classList.add("is-error")` / `.remove("is-error")`.
- `elemento.classList.toggle("dark")` liga/desliga uma classe e retorna
  `true` ou `false` dizendo se ela ficou presente.

## Pronto quando

- [ ] Um e-mail inválido mostra a mensagem de erro no `#erro-email`.
- [ ] Com erro, o campo tem `aria-invalid="true"` e
      `aria-describedby="erro-email"`, visíveis no painel de acessibilidade.
- [ ] Um e-mail válido limpa a mensagem e remove os atributos e a classe
      `.is-error`.
- [ ] O botão "Alternar tema" muda o visual da página e seu
      `aria-pressed` reflete o estado atual.
- [ ] Nada disso recarrega a página.

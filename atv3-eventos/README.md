# Atividade 3 — Eventos

## Objetivo

Praticar validação de formulário reagindo a eventos, sem recarregar a
página, e movendo o foco para o primeiro campo com erro.

## Conceito praticado

- `addEventListener("submit", ...)` no `<form>` (em vez de `"click"` no
  botão)
- `event.preventDefault()`
- `addEventListener("input", ...)` para limpar erros durante a digitação
- `.trim()` para validar texto
- `.focus()` para acessibilidade
- Regiões `aria-live` para anunciar mensagens dinâmicas

## Passos

1. Abra `index.html` com o Live Server.
2. Complete o `TODO 1`: ao digitar em um campo, o erro dele some.
3. Complete o `TODO 2`: escute o `submit` do formulário e cancele o
   comportamento padrão.
4. Complete o `TODO 3`: valide cada campo com `trim()` e mostre erro nos
   que estiverem vazios.
5. Complete o `TODO 4`: se houver erro, foque o primeiro campo inválido e
   não deixe a mensagem de sucesso aparecer.
6. Complete o `TODO 5`: se tudo estiver certo, mostre uma mensagem de
   sucesso e limpe o formulário.
7. Teste sem usar o mouse: `Tab` para navegar, `Enter` para enviar.

## Dicas (métodos a usar)

- Nunca valide no `click` do botão — use o `submit` do `<form>`, assim o
  `Enter` também funciona.
- `evento.preventDefault()` impede o recarregamento da página.
- `"  ".trim() === ""` — útil para pegar campos só com espaços.
- `elemento.focus()` move o foco do teclado para o elemento.
- `form.reset()` limpa todos os campos do formulário.

## Pronto quando

- [ ] Enviar o formulário vazio mostra erro em todos os campos e foca o
      primeiro (Nome).
- [ ] Digitar em um campo com erro faz a mensagem daquele campo sumir.
- [ ] Preencher tudo corretamente mostra uma mensagem de sucesso e limpa o
      formulário.
- [ ] É possível fazer todo o fluxo (preencher, ver erro, corrigir,
      enviar) usando somente `Tab` e `Enter`.
- [ ] Nenhum envio com campo vazio passa despercebido.

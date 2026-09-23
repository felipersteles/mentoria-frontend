# Atividade 5 — Dados de fora

## Objetivo

Praticar `fetch` com `async/await` consumindo uma API pública real (o
[ViaCEP](https://viacep.com.br/)), tratando os estados de carregando,
sucesso, CEP inexistente e erro de rede.

## Conceito praticado

- `fetch` + `async`/`await`
- `try`/`catch` para tratar erros
- `response.ok`
- Tratamento de um "erro disfarçado de sucesso" (o ViaCEP responde 200
  mesmo quando o CEP não existe, com `{ erro: true }`)
- Estados visuais: carregando, sucesso, erro

## Passos

1. Abra `index.html` com o Live Server.
2. Complete o `TODO 1`: implemente `buscarEndereco(cep)` seguindo os
   comentários no código, passo a passo (loading → fetch → validação →
   preenchimento ou erro).
3. Complete o `TODO 2`: dispare a busca automaticamente quando o CEP tiver
   8 dígitos.
4. Complete o `TODO 3`: faça o botão "Tentar novamente" repetir a busca.
5. Teste com um CEP válido (ex.: `01001000`), um CEP inexistente (ex.:
   `00000000`) e, se quiser, desligue a internet para ver o erro de rede.

## Dicas (métodos a usar)

- `const response = await fetch(url)` — sempre dentro de uma função
  `async`.
- `response.ok` é `false` para respostas HTTP de erro (404, 500 etc).
- `const dados = await response.json()` converte o corpo da resposta.
- O ViaCEP retorna `{ erro: true }` (sem o campo `ok` do HTTP) quando o
  CEP tem o formato certo mas não existe — isso não é pego por
  `response.ok`, então precisa ser checado manualmente.
- `throw new Error("mensagem")` interrompe a função e cai no `catch` mais
  próximo.
- `try { ... } catch (erro) { ... }` — use `erro.message` para mostrar o
  texto na tela.

## Pronto quando

- [ ] Digitar um CEP válido de 8 dígitos preenche rua, bairro e cidade
      automaticamente.
- [ ] Enquanto busca, aparece "Buscando endereço..." na tela.
- [ ] Um CEP inexistente mostra uma mensagem de erro clara, não o objeto
      cru do ViaCEP.
- [ ] O botão "Tentar novamente" aparece no erro e funciona.
- [ ] Em caso de erro, os campos de rua, bairro e cidade ficam liberados
      para preenchimento manual.
- [ ] Nenhum desses estados exige abrir o console para ser percebido.

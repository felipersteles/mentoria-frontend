# Módulo 2 — JavaScript e o DOM

## Objetivo

Usar JavaScript puro para **ler e mudar a página** que você já sabe
escrever em HTML: encontrar elementos, trocar textos, atributos e classes,
reagir a um envio de formulário e levar o usuário para outra página.

Sem framework, sem bundler, sem `npm`. Só o navegador.

> Pré-requisito: ter terminado o [módulo 1](../modulo-1-html).

## Atividades, em ordem

| # | Pasta | Conceito principal |
|---|-------|--------------------|
| 1 | [`atv1-encontrar-elementos`](./atv1-encontrar-elementos) | `querySelector`, `querySelectorAll` e checagem de `null` |
| 2 | [`atv2-alterar-conteudo`](./atv2-alterar-conteudo) | `textContent`, `setAttribute`, `classList` |
| 🏁 | [`projeto-final-login`](./projeto-final-login) | Tela de login com usuário fixo, `sessionStorage` e redirecionamento |

Faça na ordem. Cada pasta tem seu próprio `README.md` com os passos, as
dicas e o "pronto quando" daquela atividade.

Em cada atividade, mexa **apenas no arquivo `.js`**. O HTML e o CSS já vêm
prontos.

## Extras (opcional)

A pasta [`extras`](./extras) tem três atividades que vão além da trilha
obrigatória. Faça só depois do projeto final, e só se quiser:

| # | Pasta | Conceito principal |
|---|-------|--------------------|
| 3 | [`extras/atv3-eventos`](./extras/atv3-eventos) | Eventos, `preventDefault` e validação de formulário |
| 4 | [`extras/atv4-criar-elementos`](./extras/atv4-criar-elementos) | Criar elementos dinamicamente a partir de dados |
| 5 | [`extras/atv5-dados-de-fora`](./extras/atv5-dados-de-fora) | `fetch`, `async/await` e dados de uma API |

## O projeto final

Uma tela de login que aceita **um único usuário, fixo no código**:

| E-mail              | Senha      |
|---------------------|------------|
| `exemplo@email.com` | `senha123` |

Não há API nem banco de dados. Se as credenciais estiverem certas, o
e-mail é salvo em `sessionStorage` e o navegador vai para `dash.html` —
uma página que já vem pronta, que se protege sozinha (sem sessão, volta
para o login) e que tem o botão "Sair".

Você escreve só os 3 TODO de `js/main.js`.

## Como abrir com o Live Server

1. No VS Code, instale a extensão **Live Server** (autor: Ritwick Dey).
2. Clique com o botão direito no `index.html` da atividade.
3. Escolha **"Open with Live Server"**.

Abra também o **console do navegador** (tecla `F12`, aba *Console*): é lá
que os erros de JavaScript aparecem. Se algo "não funciona", o console
quase sempre já disse o motivo.

> Abrir o arquivo com duplo clique (`file://`) **não funciona** neste
> módulo: os scripts usam `type="module"`, que exige `http://`. Use sempre
> o Live Server.

## Checklist de entrega

- [ ] Nenhum TODO ficou para trás (procure por "TODO" nos arquivos `.js`).
- [ ] O console do navegador não mostra nenhum erro em vermelho.
- [ ] Os formulários usam `evento.preventDefault()` — nada recarrega a
      página sem você querer.
- [ ] O HTML continua semântico: você não precisou trocar nada por `div`.
- [ ] Dá para usar as páginas só com `Tab` e `Enter`, sem mouse.
- [ ] As mensagens de erro aparecem **na tela**, não só no `console.log`.
- [ ] No projeto final: credencial certa entra, credencial errada mostra
      erro, campo vazio mostra erro, "Sair" volta para o login e abrir
      `dash.html` direto sem login redireciona para `index.html`.

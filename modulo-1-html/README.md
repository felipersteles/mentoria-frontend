# Módulo 1 — HTML

## Objetivo

Escrever HTML semântico à mão e entender que **a tag que você escolhe tem
significado**. Um `<h2>` não é "texto grande": é um subtítulo. Um `<nav>`
não é uma `div` qualquer: é o menu do site.

Ao final deste módulo você terá um site de duas páginas, feito por você,
que funciona no teclado e faz sentido para um leitor de tela — sem
JavaScript e sem você escrever CSS.

## Atividades, em ordem

| # | Pasta | O que você faz |
|---|-------|----------------|
| 1 | [`projeto-meu-site/index.html`](./projeto-meu-site/index.html) | Página inicial: título, menu, seções, listas, imagem e rodapé (TODO 1 a 8) |
| 2 | [`projeto-meu-site/contato.html`](./projeto-meu-site/contato.html) | Página de contato: menu, formulário com `label` e lista de descrição (TODO 1 a 6) |

Faça o `index.html` inteiro antes de começar o `contato.html`. Os TODO
estão numerados dentro de cada arquivo — siga a ordem.

O arquivo `projeto-meu-site/css/style.css` **já está pronto e não deve ser
editado neste módulo**. Ele só estiliza tags semânticas, de propósito: se
a sua página ficar bonita sozinha, é sinal de que o HTML está correto.
CSS é o assunto do [módulo 3](../modulo-3-css).

## Como abrir com o Live Server

1. No VS Code, instale a extensão **Live Server** (autor: Ritwick Dey).
2. Abra a pasta do repositório no VS Code.
3. Clique com o botão direito em `modulo-1-html/projeto-meu-site/index.html`.
4. Escolha **"Open with Live Server"**.

O navegador abre sozinho e recarrega a cada vez que você salva o arquivo.
Não é preciso instalar nada com `npm`.

## Conceitos que aparecem aqui

- Estrutura de um documento: `<!DOCTYPE html>`, `<html lang="pt-BR">`,
  `<head>`, `<body>`
- Tags de seção: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Hierarquia de títulos: um único `<h1>` por página, `<h2>` para as seções
- Listas: `<ul>` (sem ordem), `<ol>` (com ordem), `<dl>` (termo + descrição)
- Links: internos (`href="contato.html"`) e externos (`href="https://..."`)
- Imagens com `alt` descritivo
- Formulário: `<label for="x">` ligado a `<input id="x">`

## Checklist de entrega

Antes de abrir o Pull Request, confira cada item:

- [ ] As duas páginas abrem no navegador sem erro.
- [ ] Os links do menu levam de `index.html` para `contato.html` e de volta.
- [ ] Cada página tem **um único** `<h1>`.
- [ ] Nenhuma `<div>` foi usada onde cabia `<header>`, `<nav>`, `<main>`,
      `<section>` ou `<footer>`.
- [ ] Toda `<img>` tem `alt` (descritivo, ou `alt=""` se for decorativa).
- [ ] Todo campo do formulário tem um `<label>` com `for` igual ao `id` do
      campo — clicar no texto do label coloca o cursor no campo.
- [ ] Dá para percorrer a página inteira apertando `Tab`, e sempre dá para
      ver onde o foco está.
- [ ] Nenhum TODO ficou para trás (procure por "TODO" nos dois arquivos).
- [ ] O arquivo `css/style.css` **não** foi alterado.

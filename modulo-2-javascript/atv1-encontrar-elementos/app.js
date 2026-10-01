// Atividade 1 — Encontrar elementos
//
// Objetivo: praticar diferentes formas de selecionar elementos no DOM.
// Complete os TODOs na ordem. Não é necessário mexer no HTML ou no CSS.

// TODO 1: selecione o elemento <h1> da página e guarde na variável abaixo.
// Dica: document.querySelector()
const titulo = null;

// TODO 2: selecione TODOS os links (<a>) dentro do <nav> e guarde na
// variável abaixo. Dica: document.querySelectorAll() retorna uma NodeList.
const linksDoMenu = null;

// TODO 3: selecione a seção de serviços pelo id "servicos".
const secaoServicos = null;

// TODO 4: selecione o botão que está dentro do <form> da página.
const botaoEnviar = null;

// Elementos auxiliares já selecionados para você usar nos passos seguintes.
const contagemLinks = document.querySelector("#contagem-links");
const avisoSelecao = document.querySelector("#aviso-selecao");

// TODO 5: usando "linksDoMenu", escreva na tela quantos links o nav tem.
// Dica: NodeList tem propriedade .length; use textContent em
// "contagemLinks" para mostrar algo como "O menu tem 3 links.".

// TODO 6: verifique se algum dos quatro elementos acima (titulo,
// linksDoMenu, secaoServicos, botaoEnviar) é null (ou uma lista vazia).
// Se algum seletor falhar, mostre uma mensagem em "avisoSelecao"
// (remova o atributo "hidden" e use textContent) explicando qual seletor
// não encontrou nada. Se estiver tudo certo, "avisoSelecao" deve
// continuar escondido (hidden).

console.log({ titulo, linksDoMenu, secaoServicos, botaoEnviar });

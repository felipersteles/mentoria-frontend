// Atividade 1 — Encontrar elementos
//
// Objetivo: praticar diferentes formas de selecionar elementos no DOM.
// Complete os TODOs na ordem. Não é necessário mexer no HTML ou no CSS.

// TODO 1: selecione o elemento <h1> da página e guarde na variável abaixo.
// Dica: document.querySelector()
const titulo = document.querySelector("h1");

// TODO 2: selecione TODOS os links (<a>) dentro do <nav> e guarde na
// variável abaixo. Dica: document.querySelectorAll() retorna uma NodeList.
const nav = document.querySelector("nav");
const linksDoMenu = nav.querySelectorAll("nav a");



// TODO 3: selecione a seção de serviços pelo id "servicos".
const secaoServicos = document.getElementById("servicos");

// TODO 4: selecione o botão que está dentro do <form> da página.
const contatos = document.querySelector("form");
const botaoEnviar = contatos.querySelectorAll("button");

// Elementos auxiliares já selecionados para você usar nos passos seguintes.
const contagemLinks = document.querySelector("#contagem-links");
const avisoSelecao = document.querySelector("#aviso-selecao");

// TODO 5: usando "linksDoMenu", escreva na tela quantos links o nav tem.
// Dica: NodeList tem propriedade .length; use textContent em
// "contagemLinks" para mostrar algo como "O menu tem 3 links.".
console.log("ContagemLinks tem: "+contagemLinks.textContent.length + " links.");

// TODO 6: verifique se algum dos quatro elementos acima (titulo,
// linksDoMenu, secaoServicos, botaoEnviar) é null (ou uma lista vazia).
// Se algum seletor falhar, mostre uma mensagem em "avisoSelecao"
// (remova o atributo "hidden" e use textContent) explicando qual seletor
// não encontrou nada. Se estiver tudo certo, "avisoSelecao" deve
// continuar escondido (hidden).

if (linksDoMenu.length === 0|| secaoServicos === 0 || botaoEnviar === 0) {
    let aviso = document.getElementById("aviso-selecao");
    aviso.hidden = false;
}
if (linksDoMenu.length === 0) {
    avisoSelecao.textContent = "LINKS DO MENU VAZIO";
} else if (secaoServicos === 0) {
    avisoSelecao.textContent = "SECAO SERVIÇOS VAZIA";
} else if (botaoEnviar === 0) {
    avisoSelecao.textContent = "BOTAO E NULL";
}

console.log({ titulo, linksDoMenu, secaoServicos, botaoEnviar });
// Atividade 1 — Encontrar elementos (SOLUÇÃO)

const titulo = document.querySelector("h1");
const linksDoMenu = document.querySelectorAll("nav a");
const secaoServicos = document.querySelector("#servicos");
const botaoEnviar = document.querySelector("form button");

const contagemLinks = document.querySelector("#contagem-links");
const avisoSelecao = document.querySelector("#aviso-selecao");

contagemLinks.textContent = `O menu tem ${linksDoMenu.length} links.`;

const problemas = [];
if (titulo === null) problemas.push("h1");
if (linksDoMenu.length === 0) problemas.push("nav a");
if (secaoServicos === null) problemas.push("#servicos");
if (botaoEnviar === null) problemas.push("form button");

if (problemas.length > 0) {
  avisoSelecao.hidden = false;
  avisoSelecao.textContent = `Seletor(es) sem resultado: ${problemas.join(", ")}.`;
}

console.log({ titulo, linksDoMenu, secaoServicos, botaoEnviar });

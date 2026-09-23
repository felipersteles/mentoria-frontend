// Atividade 4 — Criar elementos
//
// Objetivo: praticar criação de elementos a partir de dados, sem usar
// innerHTML, e como limpar e repopular uma lista.

const listaServicos = document.querySelector("#lista-servicos");
const campoFiltro = document.querySelector("#filtro");

const servicos = [
  { nome: "Mentoria em JavaScript", prazo: "4 semanas", preco: "R$ 0 (gratuito)" },
  { nome: "Revisão de código", prazo: "3 dias", preco: "R$ 80" },
  { nome: "Consultoria de carreira", prazo: "1 semana", preco: "R$ 150" },
  { nome: "Preparação para entrevista", prazo: "2 semanas", preco: "R$ 120" },
];

// TODO 1: crie a função renderizarServicos(lista), que recebe um array de
// serviços e desenha a lista na tela. Dentro dela:
//   a) se "lista" estiver vazia, coloque o texto "Nenhum serviço
//      disponível" dentro de "listaServicos" (pode ser um <li> criado com
//      createElement, ou usar replaceChildren com um único elemento) e
//      retorne (return) sem seguir para os próximos passos.
//   b) para cada item da lista, crie um <li> com createElement.
//   c) dentro do <li>, crie elementos (por exemplo <strong>, <span> ou
//      <p>) para nome, prazo e preço, preenchidos com textContent — NUNCA
//      use innerHTML.
//   d) crie também um <button type="button"> com o texto "Remover".
//   e) use appendChild para montar o <li> e adicioná-lo em "listaServicos".
function renderizarServicos(lista) {
  // TODO 2: antes de adicionar os novos itens, limpe o conteúdo atual de
  // "listaServicos". Dica: listaServicos.replaceChildren() sem argumentos
  // remove todos os filhos.
}

// TODO 3: no botão "Remover" de cada item (criado no TODO 1d), adicione
// um addEventListener de "click" que remove o <li> correspondente da
// tela. Dica: dentro do listener, o <li> é o elemento pai do botão
// (button.closest("li")), e todo elemento tem o método .remove().

// TODO 4: escute o evento "input" no campo de filtro (#filtro). A cada
// digitação, use o método array.filter() para gerar uma nova lista só
// com os serviços cujo nome contém o texto digitado (sem diferenciar
// maiúsculas/minúsculas), e chame renderizarServicos() com essa lista
// filtrada.
campoFiltro.addEventListener("input", () => {
  // seu código aqui
});

// Renderização inicial com todos os serviços.
renderizarServicos(servicos);

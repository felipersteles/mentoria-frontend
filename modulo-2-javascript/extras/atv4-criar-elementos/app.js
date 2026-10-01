// Atividade 4 — Criar elementos (SOLUÇÃO)

const listaServicos = document.querySelector("#lista-servicos");
const campoFiltro = document.querySelector("#filtro");

const servicos = [
  { nome: "Mentoria em JavaScript", prazo: "4 semanas", preco: "R$ 0 (gratuito)" },
  { nome: "Revisão de código", prazo: "3 dias", preco: "R$ 80" },
  { nome: "Consultoria de carreira", prazo: "1 semana", preco: "R$ 150" },
  { nome: "Preparação para entrevista", prazo: "2 semanas", preco: "R$ 120" },
];

function criarItemServico(servico) {
  const item = document.createElement("li");

  const nome = document.createElement("strong");
  nome.textContent = servico.nome;

  const detalhes = document.createElement("span");
  detalhes.textContent = `${servico.prazo} — ${servico.preco}`;

  const botaoRemover = document.createElement("button");
  botaoRemover.type = "button";
  botaoRemover.textContent = "Remover";
  botaoRemover.addEventListener("click", () => {
    item.remove();
  });

  item.appendChild(nome);
  item.appendChild(detalhes);
  item.appendChild(botaoRemover);

  return item;
}

function renderizarServicos(lista) {
  if (lista.length === 0) {
    const itemVazio = document.createElement("li");
    itemVazio.textContent = "Nenhum serviço disponível";
    listaServicos.replaceChildren(itemVazio);
    return;
  }

  const itens = lista.map(criarItemServico);
  listaServicos.replaceChildren(...itens);
}

campoFiltro.addEventListener("input", () => {
  const termo = campoFiltro.value.trim().toLowerCase();
  const filtrados = servicos.filter((servico) => servico.nome.toLowerCase().includes(termo));
  renderizarServicos(filtrados);
});

renderizarServicos(servicos);

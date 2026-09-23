// Atividade 2 — Alterar conteúdo
//
// Objetivo: praticar como mudar texto, atributos e classes de elementos
// que já existem na página (sem criar elementos novos).

const form = document.querySelector("form");
const campoEmail = document.querySelector("#email");
const erroEmail = document.querySelector("#erro-email");
const botaoTema = document.querySelector("#botao-tema");

// Elementos do painel de acessibilidade (apenas para você conferir).
const debugInvalid = document.querySelector("#debug-invalid");
const debugDescricao = document.querySelector("#debug-descricao");

function emailValido(valor) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
}

function atualizarPainelDebug() {
  debugInvalid.textContent = campoEmail.getAttribute("aria-invalid") ?? "não definido";
  debugDescricao.textContent = campoEmail.getAttribute("aria-describedby") ?? "não definido";
}

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const valor = campoEmail.value.trim();

  if (!emailValido(valor)) {
    // TODO 1: escreva a mensagem "Informe um e-mail válido." dentro de
    // "erroEmail" usando textContent.

    // TODO 2: no campo "campoEmail", defina os atributos
    // aria-invalid="true" e aria-describedby="erro-email".
    // Dica: campoEmail.setAttribute("nome-do-atributo", "valor")

    // TODO 3: adicione a classe "is-error" em "campoEmail".
    // Dica: campoEmail.classList.add("nome-da-classe")
  } else {
    // TODO 4: quando o e-mail for válido, faça o caminho inverso do que
    // você fez acima: limpe o texto de "erroEmail", remova os atributos
    // aria-invalid e aria-describedby de "campoEmail" (removeAttribute) e
    // remova a classe "is-error".
  }

  atualizarPainelDebug();
});

botaoTema.addEventListener("click", () => {
  // TODO 5: alterne (toggle) a classe "dark" no <body>.
  // Depois, atualize o atributo aria-pressed do botão para "true" ou
  // "false", de acordo com o novo estado.
  // Dica: document.body.classList.toggle("nome-da-classe") retorna um
  // booleano dizendo se a classe ficou presente ou não.
});

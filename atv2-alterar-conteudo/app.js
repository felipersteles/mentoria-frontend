// Atividade 2 — Alterar conteúdo (SOLUÇÃO)

const form = document.querySelector("form");
const campoEmail = document.querySelector("#email");
const erroEmail = document.querySelector("#erro-email");
const botaoTema = document.querySelector("#botao-tema");

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
    erroEmail.textContent = "Informe um e-mail válido.";
    campoEmail.setAttribute("aria-invalid", "true");
    campoEmail.setAttribute("aria-describedby", "erro-email");
    campoEmail.classList.add("is-error");
  } else {
    erroEmail.textContent = "";
    campoEmail.removeAttribute("aria-invalid");
    campoEmail.removeAttribute("aria-describedby");
    campoEmail.classList.remove("is-error");
  }

  atualizarPainelDebug();
});

botaoTema.addEventListener("click", () => {
  const estaEscuro = document.body.classList.toggle("dark");
  botaoTema.setAttribute("aria-pressed", String(estaEscuro));
});

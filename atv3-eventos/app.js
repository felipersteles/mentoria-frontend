// Atividade 3 — Eventos (SOLUÇÃO)

const form = document.querySelector("form");
const statusEnvio = document.querySelector("#status-envio");

const campos = [
  { input: document.querySelector("#nome"), erro: document.querySelector("#erro-nome"), mensagem: "Informe seu nome." },
  { input: document.querySelector("#email"), erro: document.querySelector("#erro-email"), mensagem: "Informe um e-mail." },
  { input: document.querySelector("#assunto"), erro: document.querySelector("#erro-assunto"), mensagem: "Informe o assunto." },
  { input: document.querySelector("#mensagem"), erro: document.querySelector("#erro-mensagem"), mensagem: "Escreva uma mensagem." },
];

function limparErroDoCampo(campo) {
  campo.erro.textContent = "";
  campo.input.classList.remove("is-error");
  campo.input.removeAttribute("aria-invalid");
}

function mostrarErroNoCampo(campo) {
  campo.erro.textContent = campo.mensagem;
  campo.input.classList.add("is-error");
  campo.input.setAttribute("aria-invalid", "true");
}

campos.forEach((campo) => {
  campo.input.addEventListener("input", () => limparErroDoCampo(campo));
});

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  let primeiroCampoInvalido = null;

  campos.forEach((campo) => {
    if (campo.input.value.trim() === "") {
      mostrarErroNoCampo(campo);
      if (primeiroCampoInvalido === null) {
        primeiroCampoInvalido = campo;
      }
    }
  });

  if (primeiroCampoInvalido !== null) {
    primeiroCampoInvalido.input.focus();
    return;
  }

  statusEnvio.textContent = "Mensagem enviada com sucesso!";
  form.reset();
});

// Atividade 3 — Eventos
//
// Objetivo: praticar validação de formulário usando o evento "submit"
// (não o "click" do botão) e mover o foco para o primeiro campo com erro.

const form = document.querySelector("form");
const statusEnvio = document.querySelector("#status-envio");

// Cada campo tem: o input, o elemento de erro e uma mensagem quando vazio.
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

// TODO 1: para cada campo, escute o evento "input" e, quando o usuário
// digitar algo, limpe o erro daquele campo (chame limparErroDoCampo).
// Dica: campos.forEach((campo) => { campo.input.addEventListener(...) })

// TODO 2: escute o evento "submit" do formulário (não use "click" no
// botão). Dentro do listener, chame evento.preventDefault() para impedir
// o recarregamento da página.
form.addEventListener("submit", (evento) => {
  // TODO 3: para cada campo, use trim() no valor (campo.input.value) para
  // verificar se está vazio. Se estiver vazio, chame mostrarErroNoCampo.
  // Guarde uma referência para o PRIMEIRO campo inválido encontrado.

  // TODO 4: se houver algum campo inválido, mova o foco para o primeiro
  // deles (método .focus()) e pare a execução (return) sem mostrar
  // mensagem de sucesso.

  // TODO 5: se todos os campos forem válidos, escreva uma mensagem de
  // sucesso em "statusEnvio" (ele já tem aria-live="polite" no HTML) e
  // limpe o formulário com form.reset().
});

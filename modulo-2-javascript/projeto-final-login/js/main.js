// main.js (SOLUÇÃO) — valida o formulário de login e redireciona para o
// dashboard. Não há API nem banco de dados: o único usuário válido é o
// de baixo.

const USUARIO_VALIDO = {
  email: "exemplo@email.com",
  senha: "senha123",
};

const CHAVE_SESSAO = "mentoria-js:usuario-logado";

const form = document.querySelector("#form-login");
const campoEmail = document.querySelector("#email");
const campoSenha = document.querySelector("#senha");
const erroEmail = document.querySelector("#erro-email");
const erroSenha = document.querySelector("#erro-senha");
const statusLogin = document.querySelector("#status-login");

function limparErros() {
  erroEmail.textContent = "";
  erroSenha.textContent = "";
  campoEmail.classList.remove("is-error");
  campoSenha.classList.remove("is-error");
  statusLogin.textContent = "";
}

function mostrarErro(campo, elementoErro, mensagem) {
  elementoErro.textContent = mensagem;
  campo.classList.add("is-error");
  campo.focus();
}

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  limparErros();

  const email = campoEmail.value.trim();
  const senha = campoSenha.value.trim();

  // TODO 1 — campos vazios.
  if (email === "") {
    mostrarErro(campoEmail, erroEmail, "Informe seu e-mail.");
    return;
  }

  if (senha === "") {
    mostrarErro(campoSenha, erroSenha, "Informe sua senha.");
    return;
  }

  // TODO 2 — comparação com o usuário fixo.
  // A mensagem é a mesma para e-mail e senha errados de propósito: dizer
  // "este e-mail não existe" conta para um estranho quais e-mails estão
  // cadastrados.
  if (email !== USUARIO_VALIDO.email || senha !== USUARIO_VALIDO.senha) {
    mostrarErro(campoSenha, erroSenha, "E-mail ou senha inválidos");
    return;
  }

  // TODO 3 — guarda a sessão e vai para o dashboard.
  sessionStorage.setItem(CHAVE_SESSAO, email);
  window.location.href = "dash.html";
});

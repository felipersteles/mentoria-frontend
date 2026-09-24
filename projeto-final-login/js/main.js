// main.js: valida o formulário de login e redireciona para o dashboard.
// Não há API nem banco de dados — o único usuário válido é o de baixo.

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

  // TODO 1: valide se "email" e "senha" não estão vazios. Se algum dos
  // dois estiver vazio, chame mostrarErro(campo, elementoErro, "mensagem")
  // para o campo certo (campoEmail/erroEmail ou campoSenha/erroSenha) e
  // use "return" para interromper a função.
  if (email === null || email === "") {
    let elementoEmail = document.getElementById("erro-email");
    mostrarErro(campoEmail, elementoEmail, "E-Mail não pode estar vazio.");
  }
  if (senha === null || senha === "") {
    let elementoSenha = document.getElementById("erro-senha");
    mostrarErro(campoSenha, elementoSenha, "Senha não pode estar vazia.");
  }

  // TODO 2: compare "email" e "senha" com USUARIO_VALIDO.email e
  // USUARIO_VALIDO.senha. Se não baterem, chame
  // mostrarErro(campoSenha, erroSenha, "E-mail ou senha inválidos")
  // e "return".
  if (email !== USUARIO_VALIDO.email && senha !== USUARIO_VALIDO.senha) {
    mostrarErro(campoSenha, erroSenha, "E-mail ou senha inválidos")
  } else {
    sessionStorage.setItem(CHAVE_SESSAO, email)
    window.location.href = "dash.html"
  }

  // TODO 3: se as credenciais estiverem certas, salve o e-mail em
  // sessionStorage (sessionStorage.setItem(CHAVE_SESSAO, email)) e
  // redirecione o navegador para "dash.html" usando
  // window.location.href = "dash.html".

});

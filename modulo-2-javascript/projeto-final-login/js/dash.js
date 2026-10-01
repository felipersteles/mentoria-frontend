// dash.js: página protegida — só mostra o conteúdo se houver login salvo
// em sessionStorage. Já está pronta, nenhum TODO aqui.

const CHAVE_SESSAO = "mentoria-js:usuario-logado";

const email = sessionStorage.getItem(CHAVE_SESSAO);

if (!email) {
  window.location.href = "index.html";
}

document.querySelector("#boas-vindas").textContent = `Bem-vindo(a), ${email}!`;

document.querySelector("#botao-sair").addEventListener("click", () => {
  sessionStorage.removeItem(CHAVE_SESSAO);
  window.location.href = "index.html";
});

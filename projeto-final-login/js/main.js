// main.js: liga tudo — instancia as classes e conecta os eventos do
// formulário de login com AuthService e as views.

import { UserApi } from "./api/UserApi.js";
import { AuthService } from "./services/AuthService.js";
import { LoginView } from "./ui/LoginView.js";
import { ProfileView } from "./ui/ProfileView.js";

const userApi = new UserApi("https://randomuser.me/api", "mentoria-ceuma");
const authService = new AuthService(userApi);
const loginView = new LoginView();
const profileView = new ProfileView();

const avisoFallback = document.querySelector("#aviso-fallback");

function mostrarPerfil(usuario) {
  loginView.esconder();
  profileView.renderizar(usuario, aoSair);
}

function aoSair() {
  authService.logout();
  profileView.esconder();
  loginView.mostrar();
}

function avisarSeUsouFallback() {
  if (userApi.usouFallback) {
    avisoFallback.hidden = false;
    avisoFallback.textContent =
      "Não foi possível conectar à API de usuários. Mostrando dados de exemplo salvos localmente.";
  }
}

// TODO 10: mantenha o login ao recarregar a página. Ao carregar este
// arquivo, verifique se authService.usuarioAtual() já retorna um usuário
// (ou seja, já existe uma sessão salva). Se sim, chame mostrarPerfil()
// direto, sem passar pelo formulário.

loginView.form.addEventListener("submit", async (evento) => {
  evento.preventDefault();
  loginView.limparErros();

  const usuario = loginView.campoUsuario.value.trim();
  const senha = loginView.campoSenha.value.trim();

  // TODO 6: valide se "usuario" e "senha" não estão vazios. Se algum
  // estiver vazio, use loginView.mostrarErro("usuario", "mensagem") e/ou
  // loginView.mostrarErro("senha", "mensagem"), foque o primeiro campo
  // inválido e interrompa a função com "return".

  // TODO 7: bloqueie o botão contra clique duplo (loginView.
  // bloquearEnvio(true)) e mostre o estado de carregando
  // (loginView.mostrarCarregando()) antes de chamar authService.login().

  try {
    // TODO 3 (conexão): chame `await authService.login(usuario, senha)`
    // e guarde o resultado em uma variável (ex.: usuarioEncontrado).

    avisarSeUsouFallback();

    // TODO 4: com o usuário encontrado, chame mostrarPerfil(usuarioEncontrado).
  } catch (erro) {
    // TODO 5: mostre a mensagem de erro (erro.message) no campo de senha
    // usando loginView.mostrarErro("senha", erro.message), e foque o
    // campo de usuário para o aluno tentar de novo.
  } finally {
    loginView.pararCarregando();
    loginView.bloquearEnvio(false);
  }
});

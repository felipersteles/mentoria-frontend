// main.js (SOLUÇÃO)

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

const usuarioJaLogado = authService.usuarioAtual();
if (usuarioJaLogado) {
  mostrarPerfil(usuarioJaLogado);
}

loginView.form.addEventListener("submit", async (evento) => {
  evento.preventDefault();
  loginView.limparErros();

  const usuario = loginView.campoUsuario.value.trim();
  const senha = loginView.campoSenha.value.trim();

  if (usuario === "") {
    loginView.mostrarErro("usuario", "Informe o usuário.");
    loginView.campoUsuario.focus();
    return;
  }

  if (senha === "") {
    loginView.mostrarErro("senha", "Informe a senha.");
    loginView.campoSenha.focus();
    return;
  }

  loginView.bloquearEnvio(true);
  loginView.mostrarCarregando();

  try {
    const usuarioEncontrado = await authService.login(usuario, senha);

    avisarSeUsouFallback();

    mostrarPerfil(usuarioEncontrado);
  } catch (erro) {
    loginView.mostrarErro("senha", erro.message);
    loginView.campoUsuario.focus();
  } finally {
    loginView.pararCarregando();
    loginView.bloquearEnvio(false);
  }
});

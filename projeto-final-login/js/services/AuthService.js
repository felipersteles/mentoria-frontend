// AuthService (SOLUÇÃO)

const CHAVE_SESSAO = "mentoria-js:usuario-logado";

export class AuthService {
  constructor(userApi) {
    this.userApi = userApi;
    this.usuarios = null;
  }

  async login(usuario, senha) {
    if (this.usuarios === null) {
      this.usuarios = await this.userApi.buscarUsuarios(10);
    }

    const usuarioEncontrado = this.usuarios.find(
      (u) => u.login.username === usuario && u.login.password === senha
    );

    if (!usuarioEncontrado) {
      throw new Error("Usuário ou senha inválidos");
    }

    sessionStorage.setItem(CHAVE_SESSAO, JSON.stringify(usuarioEncontrado));
    return usuarioEncontrado;
  }

  logout() {
    sessionStorage.removeItem(CHAVE_SESSAO);
  }

  usuarioAtual() {
    const bruto = sessionStorage.getItem(CHAVE_SESSAO);
    return bruto ? JSON.parse(bruto) : null;
  }
}

// AuthService: regras de autenticação. Não mexe no DOM — só lógica e
// armazenamento da sessão.

const CHAVE_SESSAO = "mentoria-js:usuario-logado";

export class AuthService {
  constructor(userApi) {
    this.userApi = userApi;
    this.usuarios = null;
  }

  // TODO 2: implemente login(usuario, senha). Ela deve:
  //   a) se this.usuarios ainda não foi carregado (é null), buscar com
  //      await this.userApi.buscarUsuarios(10) e guardar em
  //      this.usuarios.
  //   b) procurar, em this.usuarios, um usuário cujo login.username seja
  //      igual a "usuario" E cujo login.password seja igual a "senha".
  //      Dica: this.usuarios.find((u) => ...)
  //   c) se não encontrar, lançar um Error("Usuário ou senha inválidos").
  //   d) se encontrar, salvar o usuário em sessionStorage (chave
  //      CHAVE_SESSAO, valor convertido com JSON.stringify) e retornar o
  //      usuário encontrado.
  async login(usuario, senha) {
    // seu código aqui
  }

  logout() {
    sessionStorage.removeItem(CHAVE_SESSAO);
  }

  usuarioAtual() {
    const bruto = sessionStorage.getItem(CHAVE_SESSAO);
    return bruto ? JSON.parse(bruto) : null;
  }
}

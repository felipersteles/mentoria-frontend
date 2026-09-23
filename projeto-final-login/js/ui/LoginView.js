// LoginView: controla tudo o que aparece no formulário de login — erros,
// estado de carregando e o botão de mostrar/esconder senha.

export class LoginView {
  constructor() {
    this.form = document.querySelector("#form-login");
    this.campoUsuario = document.querySelector("#usuario");
    this.campoSenha = document.querySelector("#senha");
    this.erroUsuario = document.querySelector("#erro-usuario");
    this.erroSenha = document.querySelector("#erro-senha");
    this.statusLogin = document.querySelector("#status-login");
    this.botaoEntrar = document.querySelector("#botao-entrar");
    this.botaoMostrarSenha = document.querySelector("#botao-mostrar-senha");
    this.secaoLogin = document.querySelector("#secao-login");

    this.botaoMostrarSenha.addEventListener("click", () => this.alternarSenha());
  }

  alternarSenha() {
    const estaMostrando = this.campoSenha.type === "text";
    this.campoSenha.type = estaMostrando ? "password" : "text";
    this.botaoMostrarSenha.setAttribute("aria-pressed", String(!estaMostrando));
    this.botaoMostrarSenha.textContent = estaMostrando ? "Mostrar senha" : "Esconder senha";
  }

  // TODO 8 (parte da view): implemente mostrarCarregando(). Ela deve
  // adicionar a classe "is-loading" no formulário e escrever
  // "Entrando..." em this.statusLogin.
  mostrarCarregando() {
    // seu código aqui
  }

  pararCarregando() {
    this.form.classList.remove("is-loading");
  }

  mostrarErro(campo, mensagem) {
    const elementoErro = campo === "usuario" ? this.erroUsuario : this.erroSenha;
    const input = campo === "usuario" ? this.campoUsuario : this.campoSenha;

    elementoErro.textContent = mensagem;
    input.classList.add("is-error");
    input.setAttribute("aria-invalid", "true");
    input.setAttribute("aria-describedby", elementoErro.id);
  }

  limparErros() {
    for (const [elementoErro, input] of [
      [this.erroUsuario, this.campoUsuario],
      [this.erroSenha, this.campoSenha],
    ]) {
      elementoErro.textContent = "";
      input.classList.remove("is-error");
      input.removeAttribute("aria-invalid");
      input.removeAttribute("aria-describedby");
    }
    this.statusLogin.textContent = "";
  }

  // TODO 8 (parte da view): implemente bloquearEnvio(bool). Quando "bool"
  // for true, desabilite this.botaoEntrar (botao.disabled = true) para
  // evitar clique duplo durante a requisição. Quando for false, habilite
  // de novo.
  bloquearEnvio(bool) {
    // seu código aqui
  }

  esconder() {
    this.secaoLogin.hidden = true;
  }

  mostrar() {
    this.secaoLogin.hidden = false;
    this.form.reset();
    this.limparErros();
  }
}

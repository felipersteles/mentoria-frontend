// ProfileView: renderiza o card de perfil do usuário logado.

export class ProfileView {
  constructor() {
    this.secaoPerfil = document.querySelector("#secao-perfil");
    this.cardPerfil = document.querySelector("#card-perfil");
  }

  // TODO 9: implemente renderizar(usuario, aoSair). "usuario" é o objeto
  // retornado pela API (com name, email, location, picture). "aoSair" é
  // uma função a ser chamada quando o botão "Sair" for clicado.
  // Passos sugeridos:
  //   a) limpe o card atual: this.cardPerfil.replaceChildren().
  //   b) crie um <img> com src = usuario.picture.large e um alt
  //      descritivo (ex.: "Foto de <nome>") — nunca deixe alt vazio aqui,
  //      é uma foto com conteúdo relevante.
  //   c) crie elementos de texto (com createElement + textContent) para
  //      nome completo (usuario.name.first + " " + usuario.name.last),
  //      e-mail (usuario.email) e cidade (usuario.location.city).
  //   d) crie um <button type="button"> com o texto "Sair" e um
  //      addEventListener de "click" que chama aoSair().
  //   e) use appendChild para montar tudo dentro de this.cardPerfil.
  //   f) mostre a seção do perfil (this.secaoPerfil.hidden = false).
  renderizar(usuario, aoSair) {
    // seu código aqui
  }

  esconder() {
    this.secaoPerfil.hidden = true;
  }
}

// ProfileView (SOLUÇÃO)

export class ProfileView {
  constructor() {
    this.secaoPerfil = document.querySelector("#secao-perfil");
    this.cardPerfil = document.querySelector("#card-perfil");
  }

  renderizar(usuario, aoSair) {
    this.cardPerfil.replaceChildren();

    const nomeCompleto = `${usuario.name.first} ${usuario.name.last}`;

    const foto = document.createElement("img");
    foto.src = usuario.picture.large;
    foto.alt = `Foto de ${nomeCompleto}`;

    const nome = document.createElement("p");
    nome.textContent = nomeCompleto;

    const email = document.createElement("p");
    email.textContent = usuario.email;

    const cidade = document.createElement("p");
    cidade.textContent = usuario.location.city;

    const botaoSair = document.createElement("button");
    botaoSair.type = "button";
    botaoSair.textContent = "Sair";
    botaoSair.addEventListener("click", () => aoSair());

    this.cardPerfil.classList.add("card-perfil");
    this.cardPerfil.appendChild(foto);
    this.cardPerfil.appendChild(nome);
    this.cardPerfil.appendChild(email);
    this.cardPerfil.appendChild(cidade);
    this.cardPerfil.appendChild(botaoSair);

    this.secaoPerfil.hidden = false;
  }

  esconder() {
    this.secaoPerfil.hidden = true;
  }
}

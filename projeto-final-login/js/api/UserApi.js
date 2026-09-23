// UserApi (SOLUÇÃO)

export class UserApi {
  constructor(baseUrl, seed) {
    this.baseUrl = baseUrl;
    this.seed = seed;
    this.usouFallback = false;
  }

  async buscarUsuarios(quantidade) {
    try {
      const url = `${this.baseUrl}/?seed=${this.seed}&results=${quantidade}&inc=login,name,email,picture,location&nat=br`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Não foi possível buscar os usuários agora.");
      }

      const dados = await response.json();
      return dados.results;
    } catch (erro) {
      this.usouFallback = true;
      return this.buscarFallback();
    }
  }

  async buscarFallback() {
    const response = await fetch("data/users.fallback.json");
    if (!response.ok) {
      throw new Error("Não foi possível carregar os usuários de fallback.");
    }
    const dados = await response.json();
    return dados.results;
  }
}

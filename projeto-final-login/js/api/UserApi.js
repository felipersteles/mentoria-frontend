// UserApi: responsável por buscar a lista de usuários fictícios, seja da
// API randomuser.me, seja do arquivo de fallback local quando a API falha.

export class UserApi {
  constructor(baseUrl, seed) {
    this.baseUrl = baseUrl;
    this.seed = seed;
    this.usouFallback = false;
  }

  // TODO 1: implemente buscarUsuarios(quantidade). Ela deve:
  //   a) montar a URL: `${this.baseUrl}/?seed=${this.seed}&results=${quantidade}&inc=login,name,email,picture,location&nat=br`
  //   b) fazer fetch dessa URL com await, dentro de um try.
  //   c) verificar response.ok; se for falso, lançar um Error.
  //   d) converter a resposta com response.json() e retornar o array
  //      "results".
  //   e) no catch, marcar this.usouFallback = true e chamar
  //      this.buscarFallback() como alternativa, retornando o resultado
  //      dela.
  async buscarUsuarios(quantidade) {
    // seu código aqui
  }

  // Já implementado para você: carrega o arquivo local de fallback.
  async buscarFallback() {
    const response = await fetch("data/users.fallback.json");
    if (!response.ok) {
      throw new Error("Não foi possível carregar os usuários de fallback.");
    }
    const dados = await response.json();
    return dados.results;
  }
}

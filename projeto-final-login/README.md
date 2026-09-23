# Projeto Final — Login

## Objetivo

Juntar tudo o que foi praticado nas atividades 1 a 5 em um projeto único:
uma tela de login que valida credenciais contra usuários fictícios da API
[randomuser.me](https://randomuser.me/), organizada em classes.

## Usuários de teste

Todos os alunos usam a mesma URL com uma seed fixa, então os usuários
gerados são sempre os mesmos:

```
https://randomuser.me/api/?seed=mentoria-ceuma&results=10&inc=login,name,email,picture,location&nat=br
```

Três pares de usuário e senha válidos (gerados por essa seed):

| Nome            | Usuário              | Senha     |
|-----------------|-----------------------|-----------|
| Leiloca Duarte  | `orangewolf858`       | `hogtied` |
| Filinto Peixoto | `brownladybug848`     | `zachary` |
| Quim Moraes     | `organicleopard690`   | `heyyou`  |

Se a API estiver fora do ar, o `AuthService` usa automaticamente o
arquivo `data/users.fallback.json` — que contém os mesmos 10 usuários
salvos localmente — e a interface avisa que está usando dados de exemplo.

## Estrutura

```
projeto-final-login/
├── index.html
├── js/
│   ├── main.js            → instancia as classes e liga os eventos
│   ├── api/UserApi.js      → busca usuários na API (ou no fallback)
│   ├── services/AuthService.js → regras de login/logout/sessão
│   ├── ui/LoginView.js     → controla o formulário de login
│   └── ui/ProfileView.js   → renderiza o card de perfil
├── data/users.fallback.json
└── README.md
```

## Conceito praticado

- Organização de código em classes com responsabilidade única
- `fetch` + `async/await` com tratamento de erro e fallback
- `sessionStorage` para manter sessão entre recarregamentos
- Prevenção de clique duplo durante requisição
- Formulário acessível, navegável só com teclado

## Passos

1. Abra `index.html` com o Live Server.
2. Em `js/api/UserApi.js`, complete o `TODO 1`: implemente
   `buscarUsuarios(quantidade)`.
3. Em `js/services/AuthService.js`, complete o `TODO 2`: implemente
   `login(usuario, senha)`.
4. Em `js/main.js`, complete os `TODO 3` a `TODO 7`: valide os campos,
   bloqueie o botão durante o envio, conecte com `authService.login()` e
   trate erro.
5. Em `js/ui/LoginView.js`, complete o `TODO 8`: implemente
   `mostrarCarregando()` e `bloquearEnvio(bool)`.
6. Em `js/ui/ProfileView.js`, complete o `TODO 9`: implemente
   `renderizar(usuario, aoSair)`.
7. Em `js/main.js`, complete o `TODO 10`: mantenha o login ao recarregar
   a página, usando `authService.usuarioAtual()`.
8. Teste o fluxo completo: login válido, login inválido, "Sair",
   recarregar a página logado, e (se quiser) desligar a internet para ver
   o fallback funcionando.

## Dicas (métodos a usar)

- `fetch(url)` + `response.ok` + `response.json()`, dentro de `try/catch`.
- `array.find((item) => condicao)` para procurar o usuário certo.
- `sessionStorage.setItem(chave, JSON.stringify(valor))` e
  `JSON.parse(sessionStorage.getItem(chave))`.
- `botao.disabled = true` para bloquear clique duplo.
- `elemento.focus()` para mover o foco em caso de erro.
- Nunca use `innerHTML` para desenhar o card de perfil — monte com
  `createElement` + `textContent` + `appendChild`, como na atividade 4.

## Pronto quando

- [ ] Uma credencial válida (veja a tabela acima) mostra o card de perfil
      com foto, nome, e-mail e cidade.
- [ ] Uma credencial inválida mostra erro no formulário, anunciado por
      leitor de tela (`aria-live`/`aria-describedby`).
- [ ] Clicar duas vezes rápido em "Entrar" não dispara duas requisições.
- [ ] Todo o fluxo (digitar, mostrar/esconder senha, entrar, sair)
      funciona só com teclado.
- [ ] Recarregar a página com o usuário logado mantém o perfil na tela;
      "Sair" volta para o formulário de login.
- [ ] Desligando a internet, o login ainda funciona com o fallback local
      e a interface avisa que está usando dados de exemplo.

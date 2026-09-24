# Projeto Final — Login

## Objetivo

Juntar o que foi praticado nas atividades 1 a 5 num projeto único: uma tela
de login que valida um usuário fixo e, se as credenciais estiverem certas,
leva para uma página de dashboard.

## Usuário válido

Não há API nem banco de dados — o único usuário válido está fixo no
código (`js/main.js`):

| E-mail              | Senha       |
|----------------------|-------------|
| `exemplo@email.com`  | `senha123`  |

## Estrutura

```
projeto-final-login/
├── index.html      → formulário de login
├── dash.html        → página protegida (já pronta)
├── js/
│   ├── main.js       → valida o formulário e redireciona (seu TODO)
│   └── dash.js        → protege a página e mostra "Sair" (já pronto)
└── README.md
```

## Conceito praticado

- Validação de formulário com `preventDefault`
- Comparação de valores digitados com um dado fixo
- `sessionStorage` para lembrar que o usuário está logado
- Redirecionamento entre páginas com `window.location.href`

## Passos

Abra `index.html` com o Live Server e complete os `// TODO` em
`js/main.js`, na ordem:

1. **TODO 1** — valide se e-mail e senha não estão vazios.
2. **TODO 2** — compare com o usuário válido; se não bater, mostre erro.
3. **TODO 3** — se estiver certo, salve o e-mail em `sessionStorage` e
   redirecione para `dash.html`.

## Pronto quando

- [ ] Preencher `exemplo@email.com` / `senha123` e clicar em "Entrar" leva
      para `dash.html`, mostrando a mensagem de boas-vindas.
- [ ] Preencher e-mail ou senha errados mostra erro no formulário, sem
      sair da página.
- [ ] Deixar um campo vazio e clicar em "Entrar" mostra erro nesse campo.
- [ ] Em `dash.html`, clicar em "Sair" volta para `index.html`.
- [ ] Abrir `dash.html` direto, sem ter feito login antes, redireciona
      automaticamente para `index.html`.

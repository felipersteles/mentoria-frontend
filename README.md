# Mentoria JS — Manipulação do DOM

Repositório da mentoria de JavaScript da Universidade CEUMA. O foco é
manipulação do DOM com **HTML, CSS e JavaScript puros** — sem frameworks,
sem bundler e sem `npm` para rodar as atividades.

## Como começar

1. **Faça um fork ou clone o repositório**

   ```bash
   git clone <url-do-repositorio>
   cd mentoria-js
   ```

2. **Crie uma branch com o seu nome**

   ```bash
   git checkout -b seu-nome
   ```

   Use um nome simples, sem espaços e sem acentos (ex.: `maria-silva`).

3. **Abra as atividades com o Live Server**

   No VS Code, instale a extensão *Live Server*, clique com o botão direito
   no `index.html` da atividade e escolha **"Open with Live Server"**. Não é
   necessário instalar nada com `npm` para isso.

4. **Complete os `// TODO`**

   Cada atividade tem um `app.js` incompleto. Os comentários `// TODO 1`,
   `// TODO 2`, etc. explicam o que fazer, na ordem em que devem ser feitos.
   Não é necessário mexer no HTML ou no CSS.

5. **Commite e abra um Pull Request**

   ```bash
   git add .
   git commit -m "atv1: encontrar elementos"
   git push origin seu-nome
   ```

   Abra um Pull Request da sua branch (`seu-nome`) para a `main` no GitHub.
   Um PR por atividade é o ideal, mas um único PR ao final também é aceito
   — combine com o mentor.

## Ordem das atividades

| # | Pasta | Conceito principal |
|---|-------|---------------------|
| 1 | [`atv1-encontrar-elementos`](./atv1-encontrar-elementos) | Seleção de elementos (`querySelector` e afins) |
| 2 | [`atv2-alterar-conteudo`](./atv2-alterar-conteudo) | Alterar texto, classes e atributos |
| 3 | [`atv3-eventos`](./atv3-eventos) | Eventos, `preventDefault` e validação de formulário |
| 4 | [`atv4-criar-elementos`](./atv4-criar-elementos) | Criar elementos dinamicamente a partir de dados |
| 5 | [`atv5-dados-de-fora`](./atv5-dados-de-fora) | `fetch`, `async/await` e dados de uma API |
| 🏁 | [`projeto-final-login`](./projeto-final-login) | Tudo junto, organizado em classes |

Cada pasta tem seu próprio `README.md` com objetivo, passos, dicas e os
critérios de "pronto quando".

## Branch `solucoes`

Se você travar em alguma atividade, a branch `solucoes` tem todas as
atividades resolvidas como referência:

```bash
git checkout solucoes
```

Tente resolver sozinho antes de olhar — é assim que se aprende DOM de
verdade. Volte para a sua branch com `git checkout seu-nome` depois de
consultar.

## Testes automatizados (opcional)

A pasta [`tests/`](./tests) tem testes em Playwright, um por atividade, que
usam `getByRole` e `getByLabel` em vez de seletores de classe. Isso só
funciona porque o HTML é semântico — é uma boa forma de ver na prática por
que isso importa.

```bash
cd tests
npm install
npx playwright test
```

Os testes passam na branch `solucoes` e falham na `main` (porque os `TODO`
ainda não foram resolvidos).

## Checklist final

Antes de abrir o Pull Request, confira:

- [ ] O HTML continua semântico (não vire tudo `div` e `span`).
- [ ] Todo `label` está associado ao campo certo (`for`/`id`).
- [ ] Dá para usar a página inteira só com `Tab` e `Enter`, sem mouse.
- [ ] Os estados de carregando, vazio e erro aparecem visualmente na tela.
- [ ] Nenhum `innerHTML` foi usado com dado vindo do usuário ou de uma API.

Bons estudos!

# Mentoria Front-end — Universidade CEUMA

Repositório da mentoria de front-end da Universidade CEUMA. O conteúdo é
dividido em **três módulos numerados**, feitos com **HTML, CSS e JavaScript
puros** — sem framework, sem bundler e sem `npm` para rodar as atividades.

Se você nunca escreveu uma linha de código, está no lugar certo: comece pelo
módulo 1 e siga a ordem.

## Os módulos, na ordem

| # | Módulo | Você aprende a | Precisa ter feito antes |
|---|--------|----------------|-------------------------|
| 1 | [`modulo-1-html`](./modulo-1-html) | Escrever a estrutura de uma página com HTML semântico | — |
| 2 | [`modulo-2-javascript`](./modulo-2-javascript) | Ler e mudar a página com JavaScript (DOM) | módulo 1 |
| 3 | [`modulo-3-css`](./modulo-3-css) | Dar aparência e layout à página com CSS | módulo 1 |

Faça **na ordem**. Cada módulo tem um `README.md` com o objetivo, a lista de
atividades, como abrir com o Live Server e o checklist de entrega. Cada
atividade também tem o seu próprio `README.md`.

A pasta [`shared/style.css`](./shared/style.css) tem o CSS compartilhado
pelas atividades do módulo 2 — ele existe para que você possa focar no
JavaScript sem se preocupar com aparência. No módulo 3, cada atividade tem o
seu próprio `style.css`, que é justamente o que você vai escrever.

## Como começar

### 1. Clone o repositório

```bash
git clone https://github.com/felipersteles/mentoria-frontend.git
cd mentoria-frontend
```

### 2. Crie uma branch com o seu nome

Nunca trabalhe direto na `main`. Crie uma branch sua:

```bash
git checkout -b seu-nome
```

Use um nome simples, sem espaços e sem acentos — por exemplo
`maria-silva`. Você vai usar essa mesma branch do começo ao fim da mentoria.

Para conferir em qual branch você está:

```bash
git branch
```

### 3. Instale o Live Server no VS Code

No VS Code, abra a aba de extensões e instale **Live Server** (autor:
Ritwick Dey). Depois, clique com o botão direito no `index.html` da
atividade e escolha **"Open with Live Server"**.

O navegador abre sozinho e recarrega a cada vez que você salva um arquivo.
Não é preciso instalar nada com `npm` para fazer as atividades.

> Abrir o arquivo com duplo clique (`file://`) funciona nos módulos 1 e 3,
> mas **não** no módulo 2: os scripts usam `type="module"`, que exige
> `http://`. Pegue o hábito de usar sempre o Live Server.

### 4. Faça commits pequenos

Um commit por atividade (ou menos). Commit grande é difícil de revisar e
difícil de desfazer:

```bash
git add modulo-1-html
git commit -m "modulo 1: pagina inicial do meu site"
```

Dicas de mensagem de commit:

- Comece pelo módulo: `modulo 2: atv1 encontrar elementos`.
- Escreva o que mudou, não o que você sentiu: evite "ajustes", "correções"
  e "teste".
- Prefira vários commits pequenos a um commit "fim da mentoria".

Para enviar sua branch para o GitHub:

```bash
git push origin seu-nome
```

Na primeira vez, o Git pode pedir `git push --set-upstream origin seu-nome`
— é só copiar o comando que ele sugere.

### 5. Abra o Pull Request

1. Entre no repositório no GitHub.
2. O site mostra um aviso "Compare & pull request" para a sua branch —
   clique nele. (Ou vá na aba **Pull requests** → **New pull request**.)
3. Confira: **base** = `main`, **compare** = `seu-nome`.
4. No título, diga o que está entregando: `Módulo 1 — projeto meu site`.
5. Na descrição, cole o checklist de entrega do módulo e marque o que você
   conferiu.
6. Clique em **Create pull request**.

Um PR por módulo é o ideal. O mentor vai comentar no seu PR — responder a
comentário de revisão faz parte do aprendizado. Para corrigir algo, continue
commitando na mesma branch: o PR se atualiza sozinho.

## Você está na branch `solucoes`

Esta branch tem **todas as atividades já resolvidas**, com a mesma estrutura
de módulos da `main`. Ela existe para você comparar depois de tentar, não
para copiar antes de tentar — copiar aqui não economiza tempo, só adia o
momento em que você vai precisar saber.

Os arquivos resolvidos trazem `(SOLUÇÃO)` no comentário do topo e marcam
cada TODO com o número correspondente, para facilitar a comparação.

Para voltar para a sua branch:

```bash
git checkout seu-nome
```

Para ver apenas a solução de um arquivo, sem trocar de branch:

```bash
git show solucoes:modulo-3-css/atv2-flexbox/style.css
```

### Extras do módulo 2

A pasta [`modulo-2-javascript/extras`](./modulo-2-javascript/extras) tem três
atividades resolvidas que não fazem parte da trilha obrigatória — eventos,
criação de elementos e `fetch`. Use como leitura de referência quando quiser
ir além do módulo 2.

## Testes automatizados

A pasta [`tests/`](./tests) tem testes em Playwright, um por atividade, que
usam `getByRole` e `getByLabel` em vez de seletores de classe. Isso só
funciona porque o HTML é semântico — é uma boa forma de ver na prática por
que isso importa.

```bash
cd tests
npm install
npx playwright install chromium
npx playwright test
```

Os testes passam nesta branch e falham na `main`, porque lá os TODO ainda
não foram resolvidos.

## Checklist geral

Vale para qualquer módulo, antes de abrir o Pull Request:

- [ ] Nenhum TODO ficou para trás.
- [ ] O console do navegador (`F12`) não mostra erro em vermelho.
- [ ] O HTML continua semântico — nada virou um monte de `div` e `span`.
- [ ] Todo `label` está ligado ao campo certo (`for` igual ao `id`).
- [ ] Dá para usar a página inteira só com `Tab` e `Enter`, e sempre dá para
      ver onde o foco está.
- [ ] Em 375px de largura não há rolagem horizontal.
- [ ] Você está na sua branch, não na `main`.

Bons estudos!

const { test, expect } = require("@playwright/test");

const USUARIOS_FALSOS = {
  results: [
    {
      name: { title: "Ms", first: "Aluna", last: "Teste" },
      email: "aluna.teste@example.com",
      login: { username: "aluna-teste", password: "senha123" },
      location: { city: "São Luís" },
      picture: {
        large: "https://randomuser.me/api/portraits/women/1.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/1.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/1.jpg",
      },
    },
  ],
};

async function mockarApiDeUsuarios(page) {
  await page.route("https://randomuser.me/api/**", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(USUARIOS_FALSOS),
    });
  });
}

test.describe("Projeto final — Login", () => {
  test.beforeEach(async ({ page }) => {
    await mockarApiDeUsuarios(page);
    await page.goto("/projeto-final-login/");
  });

  test("credencial válida mostra o perfil", async ({ page }) => {
    await page.getByLabel("Usuário").fill("aluna-teste");
    await page.getByLabel("Senha").fill("senha123");
    await page.getByRole("button", { name: "Entrar" }).click();

    await expect(page.getByRole("heading", { name: "Seu perfil" })).toBeVisible();
    await expect(page.getByText("Aluna Teste")).toBeVisible();
    await expect(page.getByRole("img", { name: /Aluna Teste/i })).toBeVisible();
  });

  test("credencial inválida mostra erro acessível no formulário", async ({ page }) => {
    await page.getByLabel("Usuário").fill("usuario-errado");
    await page.getByLabel("Senha").fill("senha-errada");
    await page.getByRole("button", { name: "Entrar" }).click();

    const erroSenha = page.locator("#erro-senha");
    await expect(erroSenha).not.toBeEmpty();
    await expect(page.getByLabel("Senha")).toHaveAttribute("aria-describedby", "erro-senha");
  });

  test("botão Entrar não aceita clique duplo durante a requisição", async ({ page }) => {
    await page.route("https://randomuser.me/api/**", async (route) => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(USUARIOS_FALSOS),
      });
    });

    await page.getByLabel("Usuário").fill("aluna-teste");
    await page.getByLabel("Senha").fill("senha123");

    const botaoEntrar = page.getByRole("button", { name: "Entrar" });
    await botaoEntrar.click();
    await expect(botaoEntrar).toBeDisabled();
  });

  test("recarregar a página mantém o usuário logado; Sair encerra a sessão", async ({ page }) => {
    await page.getByLabel("Usuário").fill("aluna-teste");
    await page.getByLabel("Senha").fill("senha123");
    await page.getByRole("button", { name: "Entrar" }).click();
    await expect(page.getByText("Aluna Teste")).toBeVisible();

    await page.reload();
    await expect(page.getByText("Aluna Teste")).toBeVisible();

    await page.getByRole("button", { name: "Sair" }).click();
    await expect(page.getByRole("button", { name: "Entrar" })).toBeVisible();
  });
});

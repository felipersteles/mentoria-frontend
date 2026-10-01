const { test, expect } = require("@playwright/test");

const BASE = "/modulo-2-javascript/projeto-final-login/";

test.describe("Módulo 2 · Projeto final — Login", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE);
  });

  test("credencial válida leva para o dashboard", async ({ page }) => {
    await page.getByLabel("E-mail").fill("exemplo@email.com");
    await page.getByLabel("Senha").fill("senha123");
    await page.getByRole("button", { name: "Entrar" }).click();

    await expect(page).toHaveURL(/dash\.html$/);
    await expect(page.getByText("exemplo@email.com")).toBeVisible();
    await expect(page.getByRole("button", { name: "Sair" })).toBeVisible();
  });

  test("credencial inválida mostra erro e não sai da página", async ({ page }) => {
    await page.getByLabel("E-mail").fill("errado@email.com");
    await page.getByLabel("Senha").fill("errada");
    await page.getByRole("button", { name: "Entrar" }).click();

    await expect(page.locator("#erro-senha")).not.toBeEmpty();
    await expect(page).toHaveURL(new RegExp(`${BASE}$`));
  });

  test("campo vazio mostra erro no campo certo", async ({ page }) => {
    await page.getByRole("button", { name: "Entrar" }).click();
    await expect(page.locator("#erro-email")).not.toBeEmpty();

    await page.getByLabel("E-mail").fill("exemplo@email.com");
    await page.getByRole("button", { name: "Entrar" }).click();
    await expect(page.locator("#erro-senha")).not.toBeEmpty();
  });

  test("dash.html sem sessão redireciona para o login", async ({ page }) => {
    await page.goto(`${BASE}dash.html`);
    await expect(page).toHaveURL(new RegExp(`${BASE}(index\\.html)?$`));
    await expect(page.getByRole("button", { name: "Entrar" })).toBeVisible();
  });

  test('"Sair" encerra a sessão e volta para o login', async ({ page }) => {
    await page.getByLabel("E-mail").fill("exemplo@email.com");
    await page.getByLabel("Senha").fill("senha123");
    await page.getByRole("button", { name: "Entrar" }).click();
    await expect(page).toHaveURL(/dash\.html$/);

    await page.getByRole("button", { name: "Sair" }).click();
    await expect(page.getByRole("button", { name: "Entrar" })).toBeVisible();

    // A sessão foi apagada: voltar para o dashboard não é mais permitido.
    await page.goto(`${BASE}dash.html`);
    await expect(page.getByRole("button", { name: "Entrar" })).toBeVisible();
  });
});

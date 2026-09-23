const { test, expect } = require("@playwright/test");

test.describe("Atividade 1 — Encontrar elementos", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/atv1-encontrar-elementos/");
  });

  test("mostra a contagem correta de links do menu", async ({ page }) => {
    const nav = page.getByRole("navigation", { name: "Navegação principal" });
    await expect(nav.getByRole("link")).toHaveCount(3);
    await expect(page.getByText(/3 link/i)).toBeVisible();
  });

  test("não exibe aviso de seletor não encontrado", async ({ page }) => {
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.locator("#aviso-selecao")).toBeHidden();
  });

  test("o botão de enviar existe dentro do formulário de contato", async ({ page }) => {
    const form = page.locator("form");
    await expect(form.getByRole("button", { name: "Enviar" })).toBeVisible();
  });
});

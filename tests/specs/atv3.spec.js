const { test, expect } = require("@playwright/test");

test.describe("Atividade 3 — Eventos", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/atv3-eventos/");
  });

  test("enviar vazio mostra erros e foca o primeiro campo", async ({ page }) => {
    await page.getByRole("button", { name: "Enviar mensagem" }).click();

    await expect(page.locator("#erro-nome")).not.toBeEmpty();
    await expect(page.getByLabel("Nome")).toBeFocused();
  });

  test("digitar em um campo com erro limpa a mensagem daquele campo", async ({ page }) => {
    await page.getByRole("button", { name: "Enviar mensagem" }).click();
    await expect(page.locator("#erro-nome")).not.toBeEmpty();

    await page.getByLabel("Nome").fill("Maria");

    await expect(page.locator("#erro-nome")).toBeEmpty();
  });

  test("preencher tudo mostra mensagem de sucesso e limpa o formulário", async ({ page }) => {
    await page.getByLabel("Nome").fill("Maria Silva");
    await page.getByLabel("E-mail").fill("maria@exemplo.com");
    await page.getByLabel("Assunto").fill("Dúvida sobre a mentoria");
    await page.getByLabel("Mensagem").fill("Gostaria de saber mais sobre as atividades.");

    await page.getByRole("button", { name: "Enviar mensagem" }).click();

    await expect(page.locator("#status-envio")).not.toBeEmpty();
    await expect(page.getByLabel("Nome")).toHaveValue("");
  });
});

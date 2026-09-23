const { test, expect } = require("@playwright/test");

test.describe("Atividade 2 — Alterar conteúdo", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/atv2-alterar-conteudo/");
  });

  test("e-mail inválido mostra erro acessível", async ({ page }) => {
    const campoEmail = page.getByLabel("E-mail");
    await campoEmail.fill("nao-e-um-email");
    await page.getByRole("button", { name: "Confirmar" }).click();

    await expect(page.locator("#erro-email")).not.toBeEmpty();
    await expect(campoEmail).toHaveAttribute("aria-invalid", "true");
    await expect(campoEmail).toHaveAttribute("aria-describedby", "erro-email");
    await expect(campoEmail).toHaveClass(/is-error/);
  });

  test("e-mail válido limpa o erro", async ({ page }) => {
    const campoEmail = page.getByLabel("E-mail");
    await campoEmail.fill("nao-e-um-email");
    await page.getByRole("button", { name: "Confirmar" }).click();

    await campoEmail.fill("aluno@exemplo.com");
    await page.getByRole("button", { name: "Confirmar" }).click();

    await expect(page.locator("#erro-email")).toBeEmpty();
    await expect(campoEmail).not.toHaveAttribute("aria-invalid", "true");
    await expect(campoEmail).not.toHaveClass(/is-error/);
  });

  test("botão de tema alterna aria-pressed e a classe dark", async ({ page }) => {
    const botaoTema = page.getByRole("button", { name: "Alternar tema" });
    await expect(botaoTema).toHaveAttribute("aria-pressed", "false");

    await botaoTema.click();

    await expect(botaoTema).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator("body")).toHaveClass(/dark/);
  });
});

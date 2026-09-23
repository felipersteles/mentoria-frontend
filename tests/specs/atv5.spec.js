const { test, expect } = require("@playwright/test");

test.describe("Atividade 5 — Dados de fora", () => {
  test("CEP válido preenche o endereço", async ({ page }) => {
    await page.route("https://viacep.com.br/ws/**", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          cep: "01001-000",
          logradouro: "Praça da Sé",
          bairro: "Sé",
          localidade: "São Paulo",
          uf: "SP",
        }),
      });
    });

    await page.goto("/atv5-dados-de-fora/");
    await page.getByLabel("CEP").fill("01001000");

    await expect(page.getByLabel("Rua")).toHaveValue("Praça da Sé");
    await expect(page.getByLabel("Bairro")).toHaveValue("Sé");
    await expect(page.getByLabel("Cidade")).toHaveValue("São Paulo");
  });

  test("CEP inexistente mostra erro e botão de tentar novamente", async ({ page }) => {
    await page.route("https://viacep.com.br/ws/**", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ erro: true }),
      });
    });

    await page.goto("/atv5-dados-de-fora/");
    await page.getByLabel("CEP").fill("00000000");

    await expect(page.getByRole("button", { name: "Tentar novamente" })).toBeVisible();
    await expect(page.locator("#status-busca")).not.toBeEmpty();
    await expect(page.getByLabel("Rua")).toBeEditable();
  });

  test("erro de rede também mostra mensagem e libera preenchimento manual", async ({ page }) => {
    await page.route("https://viacep.com.br/ws/**", (route) => route.abort("failed"));

    await page.goto("/atv5-dados-de-fora/");
    await page.getByLabel("CEP").fill("01001000");

    await expect(page.getByRole("button", { name: "Tentar novamente" })).toBeVisible();
    await expect(page.locator("#status-busca")).not.toBeEmpty();
  });
});

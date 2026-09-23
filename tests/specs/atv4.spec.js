const { test, expect } = require("@playwright/test");

test.describe("Atividade 4 — Criar elementos", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/atv4-criar-elementos/");
  });

  test("renderiza os 4 serviços como itens de lista", async ({ page }) => {
    const lista = page.getByRole("list");
    await expect(lista.getByRole("listitem")).toHaveCount(4);
  });

  test("filtro por nome reduz a lista", async ({ page }) => {
    await page.getByLabel("Filtrar por nome").fill("mentoria");

    const lista = page.getByRole("list");
    await expect(lista.getByRole("listitem")).toHaveCount(1);
    await expect(lista).toContainText("Mentoria em JavaScript");
  });

  test("remover um item tira ele da lista", async ({ page }) => {
    const lista = page.getByRole("list");
    await expect(lista.getByRole("listitem")).toHaveCount(4);

    await lista.getByRole("listitem").first().getByRole("button", { name: "Remover" }).click();

    await expect(lista.getByRole("listitem")).toHaveCount(3);
  });

  test("filtro sem resultados mostra mensagem de vazio", async ({ page }) => {
    await page.getByLabel("Filtrar por nome").fill("servico-que-nao-existe");

    await expect(page.getByText("Nenhum serviço disponível")).toBeVisible();
  });
});

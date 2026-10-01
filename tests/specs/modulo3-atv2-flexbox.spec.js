const { test, expect } = require("@playwright/test");
const {
  VIEWPORTS,
  larguraDaPagina,
  contornoDoPrimeiroFoco,
} = require("../helpers/layout");

const URL_ATIVIDADE = "/modulo-3-css/atv2-flexbox/";

for (const { nome, viewport } of VIEWPORTS) {
  test.describe(`Módulo 3 · atv2 flexbox — ${nome}`, () => {
    test.use({ viewport });

    test.beforeEach(async ({ page }) => {
      await page.goto(URL_ATIVIDADE);
    });

    test("não há rolagem horizontal", async ({ page }) => {
      const { pagina, janela } = await larguraDaPagina(page);
      expect(pagina).toBeLessThanOrEqual(janela + 1);
    });

    test("o primeiro foco por teclado tem contorno visível", async ({ page }) => {
      const contorno = await contornoDoPrimeiroFoco(page);

      expect(contorno).not.toBeNull();
      expect(contorno.outlineStyle).not.toBe("none");
      expect(contorno.outlineWidth).not.toBe("0px");
    });

    test("o rodapé fica no fim da tela, sem vazio embaixo", async ({ page }) => {
      const { rodapeAbaixo, alturaJanela } = await page.evaluate(() => {
        const rodape = document.querySelector(".rodape");
        return {
          rodapeAbaixo: rodape.getBoundingClientRect().bottom,
          alturaJanela: window.innerHeight,
        };
      });

      expect(rodapeAbaixo).toBeGreaterThanOrEqual(alturaJanela - 1);
    });

    test("os seis cards continuam visíveis e dentro da tela", async ({ page }) => {
      const cards = page.locator(".card");
      await expect(cards).toHaveCount(6);

      const estouram = await page.evaluate(() =>
        [...document.querySelectorAll(".card")].filter(
          (card) => card.getBoundingClientRect().right > window.innerWidth + 1
        ).length
      );

      expect(estouram).toBe(0);
    });
  });
}

test.describe("Módulo 3 · atv2 flexbox — comportamento do cabeçalho", () => {
  test("em 1280px a logo e o menu ficam nas pontas", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto(URL_ATIVIDADE);

    const { logo, menu, cabecalho } = await page.evaluate(() => {
      const retangulo = (seletor) =>
        document.querySelector(seletor).getBoundingClientRect();
      return {
        logo: retangulo(".logo"),
        menu: retangulo(".menu"),
        cabecalho: retangulo(".cabecalho"),
      };
    });

    // A logo começa na esquerda e o menu termina na direita: é isso que o
    // justify-content: space-between produz.
    expect(logo.left - cabecalho.left).toBeLessThan(cabecalho.width / 4);
    expect(cabecalho.right - menu.right).toBeLessThan(cabecalho.width / 4);
    expect(menu.left).toBeGreaterThan(logo.right);
  });

  test("estreitando a janela, os cards quebram linha", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto(URL_ATIVIDADE);

    const linhas = () =>
      page.evaluate(
        () =>
          new Set(
            [...document.querySelectorAll(".card")].map((card) =>
              Math.round(card.getBoundingClientRect().top)
            )
          ).size
      );

    const linhasDesktop = await linhas();

    await page.setViewportSize({ width: 375, height: 667 });
    const linhasCelular = await linhas();

    expect(linhasCelular).toBeGreaterThan(linhasDesktop);
  });
});

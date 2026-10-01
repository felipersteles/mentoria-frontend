const { test, expect } = require("@playwright/test");
const {
  VIEWPORTS,
  larguraDaPagina,
  contornoDoPrimeiroFoco,
} = require("../helpers/layout");

const URL_ATIVIDADE = "/modulo-3-css/atv3-responsivo/";

for (const { nome, viewport } of VIEWPORTS) {
  test.describe(`Módulo 3 · atv3 responsivo — ${nome}`, () => {
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

    test("o banner cabe na tela e mantém a proporção", async ({ page }) => {
      const banner = await page.evaluate(() => {
        const img = document.querySelector(".banner");
        const r = img.getBoundingClientRect();
        return {
          largura: r.width,
          altura: r.height,
          janela: window.innerWidth,
          proporcaoOriginal: img.naturalWidth / img.naturalHeight,
        };
      });

      expect(banner.largura).toBeLessThanOrEqual(banner.janela + 1);
      // height: auto preserva a proporção do arquivo (1200x400 = 3).
      expect(banner.largura / banner.altura).toBeCloseTo(
        banner.proporcaoOriginal,
        1
      );
    });
  });
}

test.describe("Módulo 3 · atv3 responsivo — mobile first", () => {
  test("a meta viewport está no HTML", async ({ page }) => {
    await page.goto(URL_ATIVIDADE);

    const conteudo = await page
      .locator('meta[name="viewport"]')
      .getAttribute("content");

    expect(conteudo).toContain("width=device-width");
  });

  test("em 375px o menu fica em coluna; acima de 768px, em linha", async ({ page }) => {
    await page.goto(URL_ATIVIDADE);

    const linhasDoMenu = () =>
      page.evaluate(
        () =>
          new Set(
            [...document.querySelectorAll(".menu li")].map((item) =>
              Math.round(item.getBoundingClientRect().top)
            )
          ).size
      );

    await page.setViewportSize({ width: 375, height: 667 });
    expect(await linhasDoMenu()).toBe(4);

    await page.setViewportSize({ width: 1280, height: 800 });
    expect(await linhasDoMenu()).toBe(1);
  });

  test("o título cresce junto com a tela (clamp)", async ({ page }) => {
    await page.goto(URL_ATIVIDADE);

    const tamanhoDoTitulo = () =>
      page
        .locator("h1")
        .evaluate((el) => parseFloat(getComputedStyle(el).fontSize));

    await page.setViewportSize({ width: 375, height: 667 });
    const noCelular = await tamanhoDoTitulo();

    await page.setViewportSize({ width: 1280, height: 800 });
    const noDesktop = await tamanhoDoTitulo();

    expect(noDesktop).toBeGreaterThan(noCelular);
    // O mínimo do clamp protege a legibilidade em telas estreitas.
    expect(noCelular).toBeGreaterThanOrEqual(16);
  });

  test("com zoom de 200% o conteúdo continua dentro da tela", async ({ page }) => {
    // Zoom de 200% equivale, em termos de layout, a uma tela com metade da
    // largura em CSS pixels.
    await page.setViewportSize({ width: 640, height: 400 });
    await page.goto(URL_ATIVIDADE);

    const { pagina, janela } = await larguraDaPagina(page);
    expect(pagina).toBeLessThanOrEqual(janela + 1);
  });
});

const { test, expect } = require("@playwright/test");
const {
  VIEWPORTS,
  larguraDaPagina,
  contornoDoPrimeiroFoco,
} = require("../helpers/layout");

const URL_ATIVIDADE = "/modulo-3-css/atv1-formulario/";

for (const { nome, viewport } of VIEWPORTS) {
  test.describe(`Módulo 3 · atv1 formulário — ${nome}`, () => {
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

    test("todos os campos usam a mesma fonte (font: inherit)", async ({ page }) => {
      const fontes = await page.evaluate(() => {
        const alvos = ["#nome", "#email", "#telefone", "#curso", "#mensagem"];
        const corpo = getComputedStyle(document.body).fontFamily;
        return alvos.map((seletor) => ({
          seletor,
          igualAoBody:
            getComputedStyle(document.querySelector(seletor)).fontFamily === corpo,
        }));
      });

      for (const { seletor, igualAoBody } of fontes) {
        expect(igualAoBody, `${seletor} deveria herdar a fonte do body`).toBe(true);
      }
    });

    test("o erro só aparece depois de a pessoa mexer no campo", async ({ page }) => {
      const email = page.getByLabel("E-mail");
      const corDaBorda = () =>
        email.evaluate((el) => getComputedStyle(el).borderTopColor);

      const corInicial = await corDaBorda();

      await email.fill("nao-e-um-email");
      await email.blur();

      expect(await corDaBorda()).not.toBe(corInicial);
    });
  });
}

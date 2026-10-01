// Verificações de layout reaproveitadas pelos testes do módulo 3.

// As duas larguras que todo projeto precisa atender: um celular pequeno
// (iPhone SE) e um notebook comum.
const VIEWPORTS = [
  { nome: "celular 375px", viewport: { width: 375, height: 667 } },
  { nome: "desktop 1280px", viewport: { width: 1280, height: 800 } },
];

// Rolagem horizontal: a página toda não pode ser mais larga que a janela.
// Tolerância de 1px por causa de arredondamento de zoom do navegador.
async function larguraDaPagina(page) {
  return page.evaluate(() => ({
    pagina: Math.max(
      document.documentElement.scrollWidth,
      document.body.scrollWidth
    ),
    janela: window.innerWidth,
  }));
}

// Foco visível: navega com Tab até o primeiro elemento focável e devolve o
// contorno que o navegador aplicou nele. O que este teste pega de verdade é
// alguém ter escrito `outline: none` sem pôr nada no lugar — o pior erro de
// acessibilidade que um CSS pode cometer.
async function contornoDoPrimeiroFoco(page) {
  await page.keyboard.press("Tab");

  return page.evaluate(() => {
    const alvo = document.activeElement;
    if (!alvo || alvo === document.body) return null;

    const estilo = getComputedStyle(alvo);
    return {
      elemento: alvo.tagName.toLowerCase(),
      outlineStyle: estilo.outlineStyle,
      outlineWidth: estilo.outlineWidth,
    };
  });
}

module.exports = { VIEWPORTS, larguraDaPagina, contornoDoPrimeiroFoco };

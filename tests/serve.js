// Servidor estático simples, sem dependências, usado só para os testes
// Playwright conseguirem abrir as páginas por http:// (necessário porque
// os módulos ES e o fetch não funcionam bem com file://).
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const RAIZ = path.resolve(__dirname, "..");
const PORTA = 4173;

const TIPOS = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
};

const servidor = http.createServer((req, res) => {
  const urlSemQuery = req.url.split("?")[0];
  let caminho = path.join(RAIZ, decodeURIComponent(urlSemQuery));

  if (urlSemQuery.endsWith("/")) {
    caminho = path.join(caminho, "index.html");
  }

  fs.readFile(caminho, (erro, conteudo) => {
    if (erro) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Não encontrado: " + urlSemQuery);
      return;
    }
    const extensao = path.extname(caminho);
    res.writeHead(200, { "Content-Type": TIPOS[extensao] || "application/octet-stream" });
    res.end(conteudo);
  });
});

servidor.listen(PORTA, () => {
  console.log(`Servindo ${RAIZ} em http://localhost:${PORTA}`);
});

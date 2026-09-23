// Atividade 5 — Dados de fora
//
// Objetivo: praticar fetch + async/await consumindo uma API pública
// (ViaCEP), tratando os estados de carregando, sucesso e erro.

const campoCep = document.querySelector("#cep");
const statusBusca = document.querySelector("#status-busca");
const campoRua = document.querySelector("#rua");
const campoBairro = document.querySelector("#bairro");
const campoCidade = document.querySelector("#cidade");
const botaoTentarNovamente = document.querySelector("#botao-tentar-novamente");

let ultimoCepBuscado = "";

function limparEndereco() {
  campoRua.value = "";
  campoBairro.value = "";
  campoCidade.value = "";
}

function liberarPreenchimentoManual() {
  campoRua.readOnly = false;
  campoBairro.readOnly = false;
  campoCidade.readOnly = false;
}

// TODO 1: crie a função assíncrona buscarEndereco(cep). Dentro dela:
//   a) mostre "Buscando endereço..." em "statusBusca" (use a classe
//      "is-loading" no formulário se quiser indicar visualmente).
//   b) esconda o botão "Tentar novamente" (hidden = true) enquanto busca.
//   c) faça fetch para `https://viacep.com.br/ws/${cep}/json/` usando
//      await.
//   d) verifique "response.ok". Se for falso, lance um Error (throw new
//      Error("...")) com uma mensagem em português.
//   e) converta a resposta com await response.json().
//   f) o ViaCEP retorna { erro: true } quando o CEP não existe (mesmo com
//      response.ok = true). Verifique isso e lance um Error também.
//   g) se tudo der certo, preencha campoRua, campoBairro e campoCidade
//      com os campos "logradouro", "bairro" e "localidade" da resposta,
//      e mostre uma mensagem de sucesso em "statusBusca".
//   h) use try/catch: no catch, mostre a mensagem de erro em
//      "statusBusca", exiba o botão "Tentar novamente" e chame
//      liberarPreenchimentoManual() para o aluno poder digitar na mão.
async function buscarEndereco(cep) {
  // seu código aqui
}

// TODO 2: escute o evento "input" no campo de CEP. Quando o valor (sem
// caracteres não numéricos) tiver exatamente 8 dígitos, guarde-o em
// "ultimoCepBuscado" e chame buscarEndereco(cep).
// Dica: campoCep.value.replace(/\D/g, "") remove tudo que não é dígito.
campoCep.addEventListener("input", () => {
  // seu código aqui
});

// TODO 3: no clique do botão "Tentar novamente", chame buscarEndereco()
// de novo usando "ultimoCepBuscado".
botaoTentarNovamente.addEventListener("click", () => {
  // seu código aqui
});

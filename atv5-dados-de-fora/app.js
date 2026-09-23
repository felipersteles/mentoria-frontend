// Atividade 5 — Dados de fora (SOLUÇÃO)

const campoCep = document.querySelector("#cep");
const statusBusca = document.querySelector("#status-busca");
const campoRua = document.querySelector("#rua");
const campoBairro = document.querySelector("#bairro");
const campoCidade = document.querySelector("#cidade");
const botaoTentarNovamente = document.querySelector("#botao-tentar-novamente");
const form = document.querySelector("form");

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

async function buscarEndereco(cep) {
  form.classList.add("is-loading");
  statusBusca.textContent = "Buscando endereço...";
  botaoTentarNovamente.hidden = true;
  limparEndereco();

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    if (!response.ok) {
      throw new Error("Não foi possível consultar o CEP agora. Tente novamente.");
    }

    const dados = await response.json();

    if (dados.erro) {
      throw new Error("CEP não encontrado.");
    }

    campoRua.value = dados.logradouro;
    campoBairro.value = dados.bairro;
    campoCidade.value = dados.localidade;
    statusBusca.textContent = "Endereço encontrado.";
  } catch (erro) {
    statusBusca.textContent = erro.message;
    botaoTentarNovamente.hidden = false;
    liberarPreenchimentoManual();
  } finally {
    form.classList.remove("is-loading");
  }
}

campoCep.addEventListener("input", () => {
  const digitos = campoCep.value.replace(/\D/g, "");
  if (digitos.length === 8) {
    ultimoCepBuscado = digitos;
    buscarEndereco(digitos);
  }
});

botaoTentarNovamente.addEventListener("click", () => {
  if (ultimoCepBuscado) {
    buscarEndereco(ultimoCepBuscado);
  }
});

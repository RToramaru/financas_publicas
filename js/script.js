function buscar_semelhantes() {
    if (document.getElementById("despesas_funcao").value != "R$ 0,00"
        && document.getElementById("assistencia_hospitalar").value != "R$ 0,00"
        && document.getElementById("atencao_basica").value != "R$ 0,00"
        && document.getElementById("gastos_gerais").value != "R$ 0,00") {

        document.getElementById("result").innerHTML = `
            <div class="w-100">
                              <h2 class="text-result">Gastos semelhantes</h2>
          
                              <h6 class="text-result">As seguintes cidades contém gastos semelhantes</h4>
                          </div>
          
                          <div class="w-100">
                              <hr class="rounded">
                          </div>
          
                          <div class="w-100 row">
                              <div class="col-lg-6 col-xs-12 text-result-city">
                                  <p>Montes Claros</p>
                                  <p>Uberlândia</p>
                                  <p>Uberaba</p>
                              </div>
          
                              <div class="col-lg-6 col-xs-12 text-result-comparison">
                                  Comparar com outras cidades
                                  <form>
                                      <select autocomplete="on" class="select-city">
                                          <option> -- Selecione -- </option>
                                          <option>Montes Claros</option>
                                          <option>Uberlândia</option>
                                          <option>Uberaba</option>
                                      </select>
                                      </br>
                                      <button type="button" class="btn active btn-buscar" onclick="buscar_comparacao()">Comparar</button>
                                  </form>
                              </div>
          
                          </div>
          
            `;
    } else {
        $("#exampleModal").modal();
    }

}

function buscar_comparacao() {
    document.getElementById("result").innerHTML += `
    <div class="w-100">
                    <h2 class="text-result">Comparação</h2>
                </div>

                <div class="w-100">
                    <hr class="rounded">
                </div>

                <div class="row comparison">
                    <div class="col-lg-6 col-xs-12 text-result-city-comparison">
                        <h4>Montes Claros</h4>
                        <p>Despesas por função R$ 1000,00</p>
                        <p>Assistência Hospitalar R$ 1000,00</p>
                        <p>Atenção Básica R$ 1000,00</p>
                        <p>Gastos Gerais com Saúde R$ 1000,00</p>
                    </div>

                    <div class="col-lg-6 col-xs-12 text-result-city-comparison">
                        <h4>Salinas</h4>
                        <p>Despesas por função R$ 1000,00</p>
                        <p>Assistência Hospitalar R$ 1000,00</p>
                        <p>Atenção Básica R$ 1000,00</p>
                        <p>Gastos Gerais com Saúde R$ 1000,00</p>
                    </div>

                </div>
    `;
}



function addFormatter(input, formatFn) {
    let oldValue = input.value;

    const handleInput = event => {
        const result = formatFn(input.value, oldValue, event);
        if (typeof result === 'string') {
            input.value = result;
        }

        oldValue = input.value;
    }

    handleInput();
    input.addEventListener("input", handleInput);
}

function currencyFormat(newValue, oldValue, event) {
    const numericValue = newValue.replace(/[^\d]/g, '');

    if (event && /^[0-9]$/.test(event.data)) {
        const trimmedValue = numericValue.replace(/^0/, '');

        const formattedValue = `R$ ${trimmedValue.slice(0, -2)},${trimmedValue.slice(-2)}`;
        return formattedValue;
    }

    if (numericValue.length === 0) {
        return 'R$ 0,00';
    }
    const formattedValue = `R$ ${numericValue.slice(0, -2)},${numericValue.slice(-2)}`;
    return formattedValue;
}

const despesas_funcao = document.getElementById('despesas_funcao');
addFormatter(despesas_funcao, currencyFormat);

const assistencia_hospitalar = document.getElementById('assistencia_hospitalar');
addFormatter(assistencia_hospitalar, currencyFormat);

const atencao_basica = document.getElementById('atencao_basica');
addFormatter(atencao_basica, currencyFormat);

const gastos_gerais = document.getElementById('gastos_gerais');
addFormatter(gastos_gerais, currencyFormat);

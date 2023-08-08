function buscar_semelhantes() {
    if (document.getElementById("despesas_funcao").value != "R$ 0,00"
        && document.getElementById("assistencia_hospitalar").value != "R$ 0,00"
        && document.getElementById("atencao_basica").value != "R$ 0,00"
        && document.getElementById("gastos_gerais").value != "R$ 0,00") {

        predict();
        document.getElementById("result").innerHTML = `
            <div class="w-100">
                              <h2 class="text-result">Gastos semelhantes</h2>
          
                              <h6 class="text-result">As seguintes cidades contém gastos semelhantes</h4>
                          </div>
          
                          <div class="w-100">
                              <hr class="rounded">
                          </div>
          
                          <div class="w-100 row">
                              <div class="col-lg-6 col-xs-12 text-result-city" id="result-text-city">
                              ${cities[predictedCluster].map(city => `${city[0]}</br>`).join('')
            }
                              </div>
          
                              <div class="col-lg-6 col-xs-12 text-result-comparison">
                                  Comparar com outras cidades
                                  <form>
                                      <select autocomplete="on" class="select-city" id="select-city">
                                          <option> -- Selecione -- </option>
                                          ${getCitiesOptions()}
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

function getCitiesOptions() {
    let options = '';
    for (const cluster of cities) {
        for (const city of cluster) {
            options += `<option>${city[0]}</option>`;
        }
    }
    return options;
}

function searchCity(cityName) {
    for (const cluster of cities) {
        for (const city of cluster) {
            if (city[0].toLowerCase() === cityName.toLowerCase()) {
                return city;
            }
        }
    }
    return null; // Retorna null se a cidade não for encontrada
}

function buscar_comparacao() {

    cityData = searchCity(document.getElementById("select-city").value);    
    document.getElementById("result").innerHTML += `
    <div class="w-100">
                    <h2 class="text-result">Comparação</h2>
                </div>

                <div class="w-100">
                    <hr class="rounded">
                </div>

                <div class="row comparison">
                    <div class="col-lg-6 col-xs-12 text-result-city-comparison">
                        <h4>${document.getElementById("select-city").value}</h4>
                        <p>Despesas por função ${cityData[1]}</p>
                        <p>Assistência Hospitalar ${cityData[2]}</p>
                        <p>Atenção Básica ${cityData[3]}</p>
                        <p>Gastos Gerais com Saúde ${cityData[4]}</p>
                    </div>

                    <div class="col-lg-6 col-xs-12 text-result-city-comparison">
                        <h4>Cidade pesquisada</h4>
                        <p>Despesas por função ${document.getElementById('despesas_funcao').value}</p>
                        <p>Assistência Hospitalar  ${document.getElementById('assistencia_hospitalar').value}</p>
                        <p>Atenção Básica  ${document.getElementById('atencao_basica').value}</p>
                        <p>Gastos Gerais com Saúde  ${document.getElementById('gastos_gerais').value}</p>
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

cities = [
    [
        ['Birigui', 'R$ 2492,41', 'R$ 230,15', 'R$ 213,20', 'R$ 538,29'],
        ['Boa Vista', 'R$ 2722,54', 'R$ 171,17', 'R$ 236,04', 'R$ 547,61'],
        ['Colatina', 'R$ 2513,84', 'R$ 217,66', 'R$ 297,63', 'R$ 620,32'],
        ['Governador Valadares', 'R$ 2493,26', 'R$ 319,01', 'R$ 74,57', 'R$ 566,59'],
        ['Lauro de Freitas', 'R$ 2394,72', 'R$ 114,23', 'R$ 92,06', 'R$ 367,18'],
        ['Marabá', 'R$ 2407,54', 'R$ 227,31', 'R$ 162,46', 'R$ 522,99'],
        ['Mogi das Cruzes', 'R$ 2547,25', 'R$ 161,30', 'R$ 322,29', 'R$ 508,66'],
        ['Mossoró', 'R$ 2652,03', 'R$ 131,32', 'R$ 288,28', 'R$ 660,71'],
        ['Presidente Prudente', 'R$ 2596,37', 'R$ 132,15', 'R$ 331,61', 'R$ 494,57'],
        ['Rio Grande', 'R$ 2398,55', 'R$ 31,17', 'R$ 177,07', 'R$ 397,56'],
        ['São Mateus', 'R$ 2517,08', 'R$ 12,97', 'R$ 236,68', 'R$ 360,17'],
        ['São Vicente', 'R$ 2414,69', 'R$ 139,08', 'R$ 381,12', 'R$ 529,69'],
        ['Serra', 'R$ 2488,62', 'R$ 61,61', 'R$ 89,54', 'R$ 453,92'],
        ['Sinop', 'R$ 2377,00', 'R$ 268,90', 'R$ 259,37', 'R$ 592,40']

    ],


    [
        ['Coronel Fabriciano', 'R$ 1453,90', 'R$ 61,08', 'R$ 172,94', 'R$ 294,50'],
        ['Feira de Santana', 'R$ 1513,15', 'R$ 299,99', 'R$ 138,42', 'R$ 528,08'],
        ['Garanhuns', 'R$ 1665,40', 'R$ 147,95', 'R$ 140,02', 'R$ 354,43'],
        ['Igarassu', 'R$ 1526,10', 'R$ 152,93', 'R$ 121,11', 'R$ 304,14'],
        ['Jaboatão dos Guararapes', 'R$ 1412,37', 'R$ 114,21', 'R$ 77,43', 'R$ 319,01'],
        ['Nova Iguaçu', 'R$ 1511,48', 'R$ 270,80', 'R$ 66,43', 'R$ 442,60'],
        ['Paulista', 'R$ 1230,23', 'R$ 73,23', 'R$ 118,48', 'R$ 264,36'],
        ['Ribeirão das Neves', 'R$ 1137,10', 'R$ 151,15', 'R$ 198,01', 'R$ 389,38'],
        ['Sabará', 'R$ 1548,00', 'R$ 64,52', 'R$ 37,76', 'R$ 317,60'],
        ['São José de Ribamar', 'R$ 1346,57', 'R$ 115,86', 'R$ 193,41', 'R$ 342,88'],
        ['Viamão', 'R$ 1307,83', 'R$ 21,25', 'R$ 149,70', 'R$ 203,09']

    ],


    [
        ['Anápolis', 'R$ 2473,42', 'R$ 400,37', 'R$ 181,90', 'R$ 678,70'],
        ['Aracaju', 'R$ 2419,27', 'R$ 382,58', 'R$ 230,63', 'R$ 802,01'],
        ['Arapiraca', 'R$ 2140,13', 'R$ 443,93', 'R$ 231,22', 'R$ 789,11'],
        ['Barbacena', 'R$ 2298,56', 'R$ 573,29', 'R$ 107,76', 'R$ 843,68'],
        ['Divinópolis', 'R$ 2110,26', 'R$ 488,14', 'R$ 145,79', 'R$ 785,14'],
        ['Fortaleza', 'R$ 2144,60', 'R$ 430,16', 'R$ 133,81', 'R$ 694,09'],
        ['Imperatriz', 'R$ 2078,18', 'R$ 455,85', 'R$ 131,59', 'R$ 769,76'],
        ['João Pessoa', 'R$ 2401,66', 'R$ 396,78', 'R$ 195,46', 'R$ 800,12'],
        ['Juiz de Fora', 'R$ 2473,88', 'R$ 629,89', 'R$ 131,89', 'R$ 904,29'],
        ['Patos de Minas', 'R$ 2077,14', 'R$ 455,92', 'R$ 214,39', 'R$ 814,37'],
        ['Ribeirão Pires', 'R$ 2208,03', 'R$ 398,88', 'R$ 183,71', 'R$ 635,23'],
        ['São Luís', 'R$ 2302,04', 'R$ 398,99', 'R$ 44,51', 'R$ 728,99'],
        ['Sete Lagoas', 'R$ 2363,49', 'R$ 510,68', 'R$ 91,66', 'R$ 717,84'],
        ['Teófilo Otoni', 'R$ 1885,90', 'R$ 555,36', 'R$ 123,64', 'R$ 792,88'],
        ['Teresina', 'R$ 2526,46', 'R$ 497,27', 'R$ 115,18', 'R$ 999,58'],
        ['Umuarama', 'R$ 2398,47', 'R$ 475,39', 'R$ 310,21', 'R$ 833,55']

    ],


    [
        ['Araçatuba', 'R$ 2703,54', 'R$ 243,46', 'R$ 372,45', 'R$ 661,86'],
        ['Atibaia', 'R$ 3143,20', 'R$ 247,21', 'R$ 368,60', 'R$ 646,06'],
        ['Brusque', 'R$ 2765,65', 'R$ 263,96', 'R$ 218,04', 'R$ 582,67'],
        ['Chapecó', 'R$ 2907,33', 'R$ 437,09', 'R$ 481,19', 'R$ 979,04'],
        ['Dourados', 'R$ 3104,94', 'R$ 667,19', 'R$ 263,59', 'R$ 1032,64'],
        ['Foz do Iguaçu', 'R$ 2715,72', 'R$ 496,86', 'R$ 219,35', 'R$ 810,35'],
        ['Guarulhos', 'R$ 2806,67', 'R$ 391,74', 'R$ 172,85', 'R$ 675,09'],
        ['Itatiba', 'R$ 3018,99', 'R$ 287,59', 'R$ 228,99', 'R$ 662,17'],
        ['Itu', 'R$ 3053,14', 'R$ 216,77', 'R$ 205,89', 'R$ 599,68'],
        ['Joinville', 'R$ 2775,59', 'R$ 427,37', 'R$ 131,45', 'R$ 913,43'],
        ['Lages', 'R$ 2756,24', 'R$ 270,68', 'R$ 394,49', 'R$ 683,74'],
        ['Londrina', 'R$ 2660,83', 'R$ 656,75', 'R$ 229,92', 'R$ 975,30'],
        ['Maracanaú', 'R$ 2566,44', 'R$ 466,90', 'R$ 223,01', 'R$ 756,03'],
        ['Maringá', 'R$ 2782,86', 'R$ 591,13', 'R$ 241,83', 'R$ 909,43'],
        ['Mogi Guaçu', 'R$ 2985,30', 'R$ 412,55', 'R$ 327,59', 'R$ 774,06'],
        ['Novo Hamburgo', 'R$ 2855,62', 'R$ 250,30', 'R$ 474,24', 'R$ 767,02'],
        ['Pindamonhangaba', 'R$ 2608,43', 'R$ 367,46', 'R$ 302,03', 'R$ 741,55'],
        ['Poá', 'R$ 3120,23', 'R$ 348,55', 'R$ 313,72', 'R$ 698,76'],
        ['Santa Cruz do Sul', 'R$ 2884,29', 'R$ 593,97', 'R$ 245,69', 'R$ 950,35'],
        ['São Carlos', 'R$ 2958,13', 'R$ 533,14', 'R$ 138,49', 'R$ 770,16'],
        ['São José do Rio Preto', 'R$ 3039,39', 'R$ 247,83', 'R$ 150,20', 'R$ 654,64'],
        ['São José dos Pinhais', 'R$ 2704,37', 'R$ 395,48', 'R$ 186,17', 'R$ 681,96'],
        ['Teresópolis', 'R$ 2624,50', 'R$ 399,12', 'R$ 96,43', 'R$ 723,26']

    ],

    [

        ['Açailândia', 'R$ 2022,90', 'R$ 202,39', 'R$ 152,29', 'R$ 475,72'],
        ['Alagoinhas', 'R$ 1888,16', 'R$ 236,18', 'R$ 138,07', 'R$ 468,87'],
        ['Belém', 'R$ 1873,25', 'R$ 237,75', 'R$ 93,01', 'R$ 603,92'],
        ['Cachoeiro de Itapemirim', 'R$ 1865,21', 'R$ 46,83', 'R$ 162,04', 'R$ 306,91'],
        ['Campina Grande', 'R$ 1885,84', 'R$ 344,83', 'R$ 183,49', 'R$ 651,25'],
        ['Crato', 'R$ 1667,05', 'R$ 362,55', 'R$ 118,23', 'R$ 601,24'],
        ['Embu das Artes', 'R$ 1849,91', 'R$ 93,93', 'R$ 104,00', 'R$ 312,91'],
        ['Franca', 'R$ 1797,29', 'R$ 299,32', 'R$ 209,54', 'R$ 542,20'],
        ['Itapecerica da Serra', 'R$ 2175,73', 'R$ 298,32', 'R$ 127,57', 'R$ 483,04'],
        ['Ji-Paraná', 'R$ 1695,43', 'R$ 193,68', 'R$ 86,75', 'R$ 502,93'],
        ['Maceió', 'R$ 1956,43', 'R$ 302,29', 'R$ 83,88', 'R$ 593,18'],
        ['Manaus', 'R$ 2035,61', 'R$ 119,95', 'R$ 133,31', 'R$ 383,01'],
        ['Mauá', 'R$ 2009,79', 'R$ 265,28', 'R$ 187,53', 'R$ 622,78'],
        ['Montes Claros', 'R$ 1801,57', 'R$ 480,20', 'R$ 164,09', 'R$ 709,24'],
        ['Muriaé', 'R$ 1999,01', 'R$ 135,64', 'R$ 131,54', 'R$ 432,99'],
        ['Parnaíba', 'R$ 1720,54', 'R$ 170,35', 'R$ 135,09', 'R$ 430,05'],
        ['Passos', 'R$ 1691,54', 'R$ 259,08', 'R$ 135,80', 'R$ 459,61'],
        ['Ponta Grossa', 'R$ 1913,25', 'R$ 125,25', 'R$ 96,67', 'R$ 443,74'],
        ['Porto Seguro', 'R$ 2065,96', 'R$ 153,58', 'R$ 216,31', 'R$ 431,18'],
        ['Várzea Grande', 'R$ 1768,42', 'R$ 67,19', 'R$ 54,35', 'R$ 449,29'],
        ['Vitória da Conquista', 'R$ 1714,51', 'R$ 278,78', 'R$ 131,95', 'R$ 605,28']

    ]
]

var model;
var predictedCluster;


const modelJson = {
    "model_class": "<class 'sklearn.cluster._kmeans.KMeans'>",
    "model_state": {
        "n_clusters": 5,
        "init": "k-means++",
        "max_iter": 300,
        "tol": 0.0001,
        "n_init": 10,
        "verbose": 0,
        "random_state": null,
        "copy_x": true,
        "algorithm": "lloyd",
        "n_features_in_": 4,
        "_tol": 8.167097333352205,
        "_n_init": 10,
        "_algorithm": "lloyd",
        "_n_threads": 2,
        "cluster_centers_": [
            [
                2501.134968437825,
                158.43080105019982,
                225.85238449337425,
                511.4760756723622
            ],
            [
                1422.92159952897,
                133.90746087465234,
                128.51878859073773,
                341.82391689919194
            ],
            [
                2268.8420003849074,
                468.3430664005658,
                160.83401886266824,
                786.8327182369633
            ],
            [
                2849.624837273599,
                400.5703232601635,
                260.27025643066054,
                767.3581224040931
            ],
            [
                1876.067628099839,
                222.5407837265385,
                135.500918932789,
                500.44442087401046
            ]
        ],
        "_n_features_out": 5,
        "labels_": [
            4,
            4,
            2,
            2,
            3,
            2,
            3,
            2,
            4,
            0,
            0,
            3,
            4,
            4,
            3,
            0,
            1,
            4,
            2,
            3,
            4,
            1,
            2,
            3,
            4,
            1,
            0,
            3,
            1,
            2,
            4,
            3,
            3,
            1,
            4,
            2,
            3,
            2,
            3,
            0,
            3,
            4,
            4,
            0,
            3,
            3,
            4,
            0,
            3,
            4,
            0,
            4,
            1,
            3,
            4,
            4,
            2,
            1,
            3,
            3,
            4,
            4,
            0,
            1,
            2,
            0,
            1,
            3,
            3,
            1,
            3,
            3,
            2,
            0,
            0,
            0,
            2,
            0,
            2,
            2,
            3,
            2,
            4,
            1,
            4
        ],
        "inertia_": 4262733.476614373,
        "n_iter_": 3
    }
};

// Converte o formato do modelo para o formato adequado do TensorFlow.js
function convertModel(modelJson) {
    const n_clusters = modelJson.model_state.n_clusters;
    const cluster_centers = modelJson.model_state.cluster_centers_;
    const n_features = cluster_centers[0].length;

    const clusterCentersTensor = tf.tensor(cluster_centers);

    return {
        n_clusters: n_clusters,
        clusterCenters: clusterCentersTensor
    };
}

// Função para prever o cluster para um novo conjunto de valores
function predictCluster(model, values) {
    const valuesTensor = tf.tensor([values]);
    const distances = model.clusterCenters.sub(valuesTensor).pow(2).sum(1);
    const predictedCluster = distances.argMin().dataSync()[0];
    return predictedCluster;
}

async function load() {
    model = convertModel(modelJson);
}

async function predict() {
    var despesas_funcao = document.getElementById('despesas_funcao').value;
    var assistencia_hospitalar = document.getElementById('assistencia_hospitalar').value;
    var atencao_basica = document.getElementById('atencao_basica').value;
    var gastos_gerais = document.getElementById('gastos_gerais').value;

    const newValues = [
        parseFloat(despesas_funcao.replace('R$', '').replace(',', '').replace('.', '')),
        parseFloat(assistencia_hospitalar.replace('R$', '').replace(',', '').replace('.', '')),
        parseFloat(atencao_basica.replace('R$', '').replace(',', '').replace('.', '')),
        parseFloat(gastos_gerais.replace('R$', '').replace(',', '').replace('.', ''))
    ];

    predictedCluster = predictCluster(model, newValues);
}

load();
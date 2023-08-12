function formatCurrency(input) {
    const valor = input.value.replace(/\D/g, '');
    const valorFormatado = (Number(valor) / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    input.value = valorFormatado;
}

const modelJson_despesasporfuncao_gastosgerais = {
    "model_class": "<class 'sklearn.cluster._kmeans.KMeans'>",
    "model_state": {
        "n_clusters": 2,
        "init": "k-means++",
        "max_iter": 300,
        "tol": 0.0001,
        "n_init": 10,
        "verbose": 0,
        "random_state": null,
        "copy_x": true,
        "algorithm": "lloyd",
        "feature_names_in_": [
            "Despesa por fun\u00e7\u00e3o - Per Capta m\u00e9dia",
            "GastosGeraisSa\u00fade - Per Capta m\u00e9dia"
        ],
        "n_features_in_": 2,
        "_tol": 39.06862842428848,
        "_n_init": 10,
        "_algorithm": "lloyd",
        "_n_threads": 2,
        "cluster_centers_": [
            [
                3598.342933810965,
                862.1129343789559
            ],
            [
                2155.9116415645135,
                585.3475293199585
            ]
        ],
        "_n_features_out": 2,
        "labels_": [

        ],
        "inertia_": 33582876.96831816,
        "n_iter_": 6
    }
}

const modelJson_assistenciahospitalar_despesasporfuncao = {
    "model_class": "<class 'sklearn.cluster._kmeans.KMeans'>",
    "model_state": {
        "n_clusters": 2,
        "init": "k-means++",
        "max_iter": 300,
        "tol": 0.0001,
        "n_init": 10,
        "verbose": 0,
        "random_state": null,
        "copy_x": true,
        "algorithm": "lloyd",
        "feature_names_in_": [
            "Assist\u00eancia Hospitalar - Per Capta m\u00e9dia",
            "Despesa por fun\u00e7\u00e3o - Per Capta m\u00e9dia"
        ],
        "n_features_in_": 2,
        "_tol": 35.98057930274603,
        "_n_init": 10,
        "_algorithm": "lloyd",
        "_n_threads": 2,
        "cluster_centers_": [
            [
                432.089074520077,
                3560.9913473687257
            ],
            [
                281.0541888238803,
                2155.9116415645135
            ]
        ],
        "_n_features_out": 2,
        "labels_": [

        ],
        "inertia_": 30795352.29838962,
        "n_iter_": 7
    }
}

const modelJson_atencaobasica_gastosgerais = {
    "model_class": "<class 'sklearn.cluster._kmeans.KMeans'>",
    "model_state": {
        "n_clusters": 4,
        "init": "k-means++",
        "max_iter": 300,
        "tol": 0.0001,
        "n_init": 10,
        "verbose": 0,
        "random_state": null,
        "copy_x": true,
        "algorithm": "lloyd",
        "feature_names_in_": [
            "Aten\u00e7\u00e3o B\u00e1sica - Per Capta m\u00e9dia",
            "GastosGeraisSa\u00fade - Per Capta m\u00e9dia"
        ],
        "n_features_in_": 2,
        "_tol": 2.721200097183825,
        "_n_init": 10,
        "_algorithm": "lloyd",
        "_n_threads": 2,
        "cluster_centers_": [
            [
                226.37848028493744,
                611.786024227754
            ],
            [
                131.2752674274118,
                384.85412107821253
            ],
            [
                196.21953044260445,
                784.4312277641861
            ],
            [
                195.1337610475728,
                1007.6449853467097
            ]

        ],
        "_n_features_out": 4,
        "labels_": [
        ],
        "inertia_": 1037324.6352116228,
        "n_iter_": 5
    }
}

const modelJson_assistenciahospitalar_gastosgerais = {
    "model_class": "<class 'sklearn.cluster._kmeans.KMeans'>",
    "model_state": {
        "n_clusters": 2,
        "init": "k-means++",
        "max_iter": 300,
        "tol": 0.0001,
        "n_init": 10,
        "verbose": 0,
        "random_state": null,
        "copy_x": true,
        "algorithm": "lloyd",
        "feature_names_in_": [
            "Assist\u00eancia Hospitalar - Per Capta m\u00e9dia",
            "GastosGeraisSa\u00fade - Per Capta m\u00e9dia"
        ],
        "n_features_in_": 2,
        "_tol": 5.275122384532185,
        "_n_init": 10,
        "_algorithm": "lloyd",
        "_n_threads": 2,
        "cluster_centers_": [
            [
                188.30804939858038,
                503.5268792201683
            ],
            [
                492.05334865314944,
                880.1142683577367
            ]
        ],
        "_n_features_out": 2,
        "labels_": [

        ],
        "inertia_": 5501469.301255678,
        "n_iter_": 4
    }
}

const modelJson_despesasporfuncao_atencaobasica = {
    "model_class": "<class 'sklearn.cluster._kmeans.KMeans'>",
    "model_state": {
        "n_clusters": 2,
        "init": "k-means++",
        "max_iter": 300,
        "tol": 0.0001,
        "n_init": 10,
        "verbose": 0,
        "random_state": null,
        "copy_x": true,
        "algorithm": "lloyd",
        "feature_names_in_": [
            "Despesa por fun\u00e7\u00e3o - Per Capta m\u00e9dia",
            "Aten\u00e7\u00e3o B\u00e1sica - Per Capta m\u00e9dia"
        ],
        "n_features_in_": 2,
        "_tol": 34.89195051275893,
        "_n_init": 10,
        "_algorithm": "lloyd",
        "_n_threads": 2,
        "cluster_centers_": [
            [
                3543.9445329265736,
                249.44696117931733
            ],
            [
                2146.456173053731,
                172.73696595745366
            ]
        ],
        "_n_features_out": 2,
        "labels_": [

        ],
        "inertia_": 28826917.980467834,
        "n_iter_": 5
    }
}

function convertModel(modelJson) {
    const n_clusters = modelJson.model_state.n_clusters;
    const cluster_centers = modelJson.model_state.cluster_centers_;
    const clusterCentersTensor = tf.tensor(cluster_centers);

    return {
        n_clusters: n_clusters,
        clusterCenters: clusterCentersTensor
    };
}

function predictCluster(model, values) {
    const valuesTensor = tf.tensor([values]);
    const distances = model.clusterCenters.sub(valuesTensor).pow(2).sum(1);
    console.log(distances.argMin().dataSync());
    const predictedCluster = distances.argMin().dataSync()[0];
    return predictedCluster;
}

function currencyToRealNumber(currency) {
    const stringNumber = currency.replace('.', '');
    const numberStringPoint = stringNumber.replace(',', '.');
    const realNumber = parseFloat(numberStringPoint);

    return realNumber;
}

async function predict() {
    var despesas_funcao = document.getElementById('despesas_funcao').value;
    var assistencia_hospitalar = document.getElementById('assistencia_hospitalar').value;
    var atencao_basica = document.getElementById('atencao_basica').value;
    var gastos_gerais = document.getElementById('gastos_gerais').value;

    model_despesasporfuncao_gastosgerais = convertModel(modelJson_despesasporfuncao_gastosgerais);
    model_assistenciahospitalar_despesasporfuncao = convertModel(modelJson_assistenciahospitalar_despesasporfuncao);
    model_atencaobasica_gastosgerais = convertModel(modelJson_atencaobasica_gastosgerais);
    model_assistenciahospitalar_gastosgerais = convertModel(modelJson_assistenciahospitalar_gastosgerais);
    model_despesasporfuncao_atencaobasica = convertModel(modelJson_despesasporfuncao_atencaobasica);

    predictedCluster1 = predictCluster(model_despesasporfuncao_gastosgerais, [
        currencyToRealNumber(despesas_funcao), currencyToRealNumber(gastos_gerais)]);

    predictedCluster2 = predictCluster(model_assistenciahospitalar_despesasporfuncao, [
        currencyToRealNumber(assistencia_hospitalar), currencyToRealNumber(despesas_funcao)]);

    predictedCluster3 = predictCluster(model_atencaobasica_gastosgerais, [
        currencyToRealNumber(atencao_basica), currencyToRealNumber(gastos_gerais)]);
    predictedCluster4 = predictCluster(model_assistenciahospitalar_gastosgerais, [
        currencyToRealNumber(assistencia_hospitalar), currencyToRealNumber(gastos_gerais)]);

    predictedCluster5 = predictCluster(model_despesasporfuncao_atencaobasica, [
        currencyToRealNumber(despesas_funcao), currencyToRealNumber(atencao_basica)]);

    document.getElementById('group_cities').innerHTML = `
    <h5 class="card-title text-center">Grupos de cidades que contém gastos semelhantes nas seguintes grupos</h5>
    
    <div class="container">
            <div class="col-xs-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Despesas por Função e Gastos Gerais</h5>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="m-2 text-justify">
                                ${data.filter((item) => item[1] == predictedCluster1 + 1).map((item) => item[0]).join(', ')}.
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <div class="col-xs-12 mt-3">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Assistência Hospitalar e Despesas por Função</h5>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="m-2 text-justify">
                                ${data.filter((item) => item[2] == predictedCluster2 + 1).map((item) => item[0]).join(', ')}.
                            </div>
                        </div>
                    </div>
                </div> 
            </div>

            <div class="col-xs-12 mt-3">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Atenção básica e Gastos Gerais</h5>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="m-2 text-justify">
                                ${data.filter((item) => item[3] == predictedCluster3 + 1).map((item) => item[0]).join(', ')}.
                            </div>
                        </div>
                    </div>
                </div> 
            </div>

            <div class="col-xs-12 mt-3">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Assistência Hospitalar e Gastos Gerais</h5>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="m-2 text-justify">
                                ${data.filter((item) => item[4] == predictedCluster4 + 1).map((item) => item[0]).join(', ')}.
                            </div>
                        </div>
                    </div>
                </div> 
            </div>

        <div class="col-xs-12 mt-3">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">Despesas por Função e Atenção básica</h5>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="m-2 text-justify">
                                ${data.filter((item) => item[5] == predictedCluster5 + 1).map((item) => item[0]).join(', ')}.
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
    `
}

function get_group() {
    predict();
}


data = [
    ['Açailândia (MA)', 2, 2, 2, 1, 2],
    ['Alagoinhas (BA)', 2, 2, 2, 1, 2],
    ['Americana (SP)', 1, 1, 3, 2, 1],
    ['Anápolis (GO)', 2, 2, 1, 2, 2],
    ['Aracaju (SE)', 2, 2, 3, 2, 2],
    ['Araçatuba (SE)', 2, 2, 1, 1, 2],
    ['Arapiraca (AL)', 2, 2, 3, 2, 2],
    ['Araras (SP)', 1, 1, 1, 2, 1],
    ['Atibaia (SP)', 2, 2, 1, 1, 2],
    ['Barbacena (MG)', 2, 2, 3, 2, 2],
    ['Belém (PA)', 2, 2, 1, 1, 2],
    ['Belo Horizonte (MG)', 1, 1, 4, 2, 1],
    ['Betim (MG)', 1, 1, 4, 2, 1],
    ['Birigui (SP)', 2, 2, 1, 1, 2],
    ['Blumenau (SC)', 1, 1, , 2, 1],
    ['Boa Vista (RR)', 2, 2, 1, 1, 2],
    ['Brusque (SC)', 2, 2, 1, 1, 2],
    ['Cachoeiro de Itapemirim (ES)', 2, 2, 2, 1, 2],
    ['Camaçari (BA)', 1, 1, 3, 1, 1],
    ['Campina Grande (PB)', 2, 2, 1, 1, 2],
    ['Campinas (SP)', 1, 1, 4, 2, 1],
    ['Campo Grande (MS)', 1, 1, 4, 2, 1],
    ['Canoas (RS)', 1, 1, 4, 2, 1],
    ['Caxias do Sul (RS)', 1, 1, 3, 2, 1],
    ['Chapecó (SC)', 2, 2, , 2, 2],
    ['Colatina (ES)', 2, 2, 1, 1, 2],
    ['Coronel Fabriciano (MG)', 2, 2, 2, 1, 2],
    ['Crato (CE)', 2, 2, 1, 1, 2],
    ['Curitiba (PR)', 1, 1, 3, 2, 1],
    ['Divinópolis (MG)', 2, 2, 3, 2, 2],
    ['Dourados (MS)', 2, 2, 4, 2, 2],
    ['Embu das Artes (SP)', 2, 2, 2, 1, 2],
    ['Feira de Santana (BA)', 2, 2, 1, 1, 2],
    ['Florianópolis (SC)', 1, 1, 1, 1, 1],
    ['Fortaleza (CE)', 2, 2, 3, 2, 2],
    ['Foz do Iguaçu (PR)', 2, 2, 3, 2, 2],
    ['Franca (SP)', 2, 2, 1, 1, 2],
    ['Garanhuns (PE)', 2, 2, 2, 1, 2],
    ['Governador Valadares (MG)', 2, 2, 1, 1, 2],
    ['Guarulhos (SP)', 2, 2, 1, 2, 2],
    ['Igarassu (PE)', 2, 2, 2, 1, 2],
    ['Imperatriz (MA)', 2, 2, 3, 2, 2],
    ['Indaiatuba (SP)', 1, 1, 3, 2, 1],
    ['Itabira (MG)', 1, 1, 4, 2, 1],
    ['Itajaí (SC)', 1, 1, , 2, -1],
    ['Itapecerica da Serra (SP)', 2, 2, 2, 1, 2],
    ['Itatiba (SP)', 2, 2, 1, 1, 2],
    ['Itu (SP)', 2, 2, 1, 1, 2],
    ['Jaboatão dos Guararapes (PE)', 2, 2, 2, 1, 2],
    ['Ji-Paraná (RO)', 2, 2, 2, 1, 2],
    ['João Pessoa (PB)', 2, 2, 3, 2, 2],
    ['Joinville (SC)', 2, 2, 4, 2, 2],
    ['Juiz de Fora (MG)', 2, 2, 4, 2, 2],
    ['Jundiaí (SP)', 1, 1, 4, 2, 1],
    ['Lages (SC)', 2, 2, 1, 1, 2],
    ['Lauro de Freitas (BA)', 2, 2, 2, 1, 2],
    ['Londrina (PR)', 2, 2, 4, 2, 2],
    ['Maceió (AL)', 2, 2, 1, 1, 2],
    ['Manaus (AM)', 2, 2, 2, 1, 2],
    ['Marabá (PA)', 2, 2, 1, 1, 2],
    ['Maracanaú (CE)', 2, 2, 3, 2, 2],
    ['Maringá (PR)', 2, 2, 4, 2, 2],
    ['Mauá (SP)', 2, 2, 1, 1, 2],
    ['Mogi das Cruzes (SP)', 2, 2, 1, 1, 2],
    ['Mogi Guaçu (SP)', 2, 2, 3, 2, 2],
    ['Montes Claros (MG)', 2, 2, 3, 2, 2],
    ['Mossoró (RN)', 2, 2, 1, 1, 2],
    ['Muriaé (MG)', 2, 2, 2, 1, 2],
    ['Niterói (RJ)', 1, 1, 3, 2, 1],
    ['Nova Iguaçu (RJ)', 2, 2, 2, 1, 2],
    ['Novo Hamburgo (RS)', 2, 2, , 1, 2],
    ['Palmas (TO)', 1, 1, 1, 1, 1],
    ['Parauapebas (PA)', 1, 1, 4, 2, 1],
    ['Parnaíba (PI)', 2, 2, 2, 1, 2],
    ['Passos (MG)', 2, 2, 2, 1, 2],
    ['Patos de Minas (MG)', 2, 2, 3, 2, 2],
    ['Paulista (PE)', 2, 2, 2, 1, 2],
    ['Pindamonhangaba (SP)', 2, 2, 3, 2, 2],
    ['Piracicaba (SP)', 1, 1, 3, 2, 1],
    ['Poá (SP)', 2, 2, 1, 2, 2],
    ['Ponta Grossa (PR)', 2, 2, 2, 1, 2],
    ['Porto Alegre (RS)', 1, 1, 4, 2, 1],
    ['Porto Seguro (BA)', 2, 2, 2, 1, 2],
    ['Praia Grande (SP)', 1, 1, 3, 2, 1],
    ['Presidente Prudente (SP)', 2, 2, 1, 1, 2],
    ['Resende (RJ)', 1, 1, 4, 2, 1],
    ['Ribeirão das Neves (MG)', 2, 2, 2, 1, 2],
    ['Ribeirão Pires (SP)', 2, 2, 1, 1, 2],
    ['Ribeirão Preto (SP)', 1, 1, , 2, 1],
    ['Rio das Ostras (RJ)', -1, -1, , 2, -1],
    ['Rio de Janeiro (RJ)', 1, 1, 1, 2, 1],
    ['Rio Grande (RS)', 2, 2, 2, 1, 2],
    ['Sabará (MG)', 2, 2, 2, 1, 2],
    ['Santa Cruz do Sul (RS)', 2, 2, 4, 2, 2],
    ['São Bernardo do Campo (SP)', 1, 1, 4, 2, 1],
    ['São Caetano do Sul (SP)', -1, -1, , 2, -1],
    ['São Carlos (SP)', 2, 2, 3, 2, 2],
    ['São José de Ribamar (MA)', 2, 2, 2, 1, 2],
    ['São José do Rio Preto (SP)', 2, 2, 1, 1, 2],
    ['São José dos Campos (SP)', 1, 1, , 2, -1],
    ['São José dos Pinhais (PR)', 2, 2, 1, 2, 2],
    ['São Luís (MA)', 2, 2, 3, 2, 2],
    ['São Mateus (ES)', 2, 2, 2, 1, 2],
    ['São Paulo (SP)', 1, 1, 3, 1, 1],
    ['São Vicente (SP)', 2, 2, 1, 1, 2],
    ['Serra (ES)', 2, 2, 2, 1, 2],
    ['Sete Lagoas (MG)', 2, 2, 3, 2, 2],
    ['Sinop (MT)', 2, 2, 1, 1, 2],
    ['Sorocaba (SP)', 1, 1, 3, 2, 1],
    ['Teófilo Otoni (MG)', 2, 2, 3, 2, 2],
    ['Teresina (PI)', 2, 2, 4, 2, 2],
    ['Teresópolis (RJ)', 2, 2, 3, 2, 2],
    ['Umuarama (PR)', 2, 2, 3, 2, 2],
    ['Várzea Grande (MT)', 2, 2, 2, 1, 2],
    ['Viamão (RS)', 2, 2, 2, 1, 2],
    ['Vitória (ES)', 1, -1, 3, 1, 1],
    ['Vitória da Conquista (BA)', 2, 2, 1, 1, 2],
]
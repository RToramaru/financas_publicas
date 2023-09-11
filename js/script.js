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
        "n_clusters": 5,
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
            ],
            [
                467.66820112062775,
                879.36282021525525
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



const modelJson_despesasporfuncao_gastosgerais_ckeck = {
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
            ],
            [
                1000,
                200
            ],
            [
                90000,
                1800
            ]
        ],
        "_n_features_out": 2,
        "labels_": [

        ],
        "inertia_": 33582876.96831816,
        "n_iter_": 6
    }
}

const modelJson_assistenciahospitalar_despesasporfuncao_check = {
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
            ],
            [
                12,
                1100
            ],
            [
                1600,
                8700
            ]
        ],
        "_n_features_out": 2,
        "labels_": [

        ],
        "inertia_": 30795352.29838962,
        "n_iter_": 7
    }
}

const modelJson_atencaobasica_gastosgerais_check = {
    "model_class": "<class 'sklearn.cluster._kmeans.KMeans'>",
    "model_state": {
        "n_clusters": 7,
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
            ],
            [
                467.66820112062775,
                879.36282021525525
            ],
            [
                36,
                202
            ],
            [
                630,
                1800
            ]

        ],
        "_n_features_out": 4,
        "labels_": [
        ],
        "inertia_": 1037324.6352116228,
        "n_iter_": 5
    }
}

const modelJson_assistenciahospitalar_gastosgerais_check = {
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
            ],
            [
                12,
                202
            ],
            [
                1600,
                1800
            ]
        ],
        "_n_features_out": 2,
        "labels_": [

        ],
        "inertia_": 5501469.301255678,
        "n_iter_": 4
    }
}

const modelJson_despesasporfuncao_atencaobasica_check = {
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
            ],
            [
                1100,
                36
            ],
            [
                8700,
                627
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

    var check = document.getElementById('check').checked;

    if (check) {
        model_despesasporfuncao_gastosgerais = convertModel(modelJson_despesasporfuncao_gastosgerais_ckeck);
        model_assistenciahospitalar_despesasporfuncao = convertModel(modelJson_assistenciahospitalar_despesasporfuncao_check);
        model_atencaobasica_gastosgerais = convertModel(modelJson_atencaobasica_gastosgerais_check);
        model_assistenciahospitalar_gastosgerais = convertModel(modelJson_assistenciahospitalar_gastosgerais_check);
        model_despesasporfuncao_atencaobasica = convertModel(modelJson_despesasporfuncao_atencaobasica_check);
    } else {
        model_despesasporfuncao_gastosgerais = convertModel(modelJson_despesasporfuncao_gastosgerais);
        model_assistenciahospitalar_despesasporfuncao = convertModel(modelJson_assistenciahospitalar_despesasporfuncao);
        model_atencaobasica_gastosgerais = convertModel(modelJson_atencaobasica_gastosgerais);
        model_assistenciahospitalar_gastosgerais = convertModel(modelJson_assistenciahospitalar_gastosgerais);
        model_despesasporfuncao_atencaobasica = convertModel(modelJson_despesasporfuncao_atencaobasica);

    }

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
    <h5 class="card-title text-center">Grupos de cidades com gastos semelhantes nas seguintes despesas</h5>
    
    <div class="container">
            <div class="col-xs-12">
                <div class="card">
                    <div class="card-header">
                        <h5 class="card-title">Despesas por Função e Gastos Gerais</h5>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="m-2 text-justify">
                            ${data
            .filter((item) => item[1] == predictedCluster1 + 1)
            .map((item) => {
                const [
                    name,
                    despesasporfuncao_gastosgerais,
                    assistenciahospitalar_despesasporfuncao,
                    atencaobasica_gastosgerais,
                    assistenciahospitalar_gastosgerais,
                    despesasporfuncao_atencaobasica,
                    idhm,
                    despesa_por_função,
                    assistencia_hospitalar,
                    atencao_basica,
                    gastos_gerais_saude
                ] = item;
                return `
                    <span id="myTooltip" data-toggle="tooltip" 
                    data-title="IDHM: ${idhm}\n\n
                    Despesas por função: ${despesa_por_função}\n\n
                    Gastos gerais: ${gastos_gerais_saude}" data-placement="top">
                    ${name}</span>`;
            })
            .join(', ')}
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
                            ${data
            .filter((item) => item[2] == predictedCluster2 + 1)
            .map((item) => {
                const [
                    name,
                    despesasporfuncao_gastosgerais,
                    assistenciahospitalar_despesasporfuncao,
                    atencaobasica_gastosgerais,
                    assistenciahospitalar_gastosgerais,
                    despesasporfuncao_atencaobasica,
                    idhm,
                    despesa_por_função,
                    assistencia_hospitalar,
                    atencao_basica,
                    gastos_gerais_saude
                ] = item;
                return `
                <span id="myTooltip" data-toggle="tooltip" 
                data-title="IDHM: ${idhm}\n\n
                Assitência hospitalar: ${assistencia_hospitalar}\n\n
                Despesas por função: ${despesa_por_função}" data-placement="top">
                ${name}</span>`;
            })
            .join(', ')}
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
                            ${data
            .filter((item) => item[3] == predictedCluster3 + 1)
            .map((item) => {
                const [
                    name,
                    despesasporfuncao_gastosgerais,
                    assistenciahospitalar_despesasporfuncao,
                    atencaobasica_gastosgerais,
                    assistenciahospitalar_gastosgerais,
                    despesasporfuncao_atencaobasica,
                    idhm,
                    despesa_por_função,
                    assistencia_hospitalar,
                    atencao_basica,
                    gastos_gerais_saude
                ] = item;
                return `
                <span id="myTooltip" data-toggle="tooltip" 
                data-title="IDHM: ${idhm}\n\n
                Atenção básica: ${atencao_basica}\n\n
                Gastos gerais: ${gastos_gerais_saude}" data-placement="top">
                ${name}</span>`;
            })
            .join(', ')}
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
                                ${data
            .filter((item) => item[4] == predictedCluster4 + 1)
            .map((item) => {
                const [
                    name,
                    despesasporfuncao_gastosgerais,
                    assistenciahospitalar_despesasporfuncao,
                    atencaobasica_gastosgerais,
                    assistenciahospitalar_gastosgerais,
                    despesasporfuncao_atencaobasica,
                    idhm,
                    despesa_por_função,
                    assistencia_hospitalar,
                    atencao_basica,
                    gastos_gerais_saude
                ] = item;
                return `
                <span id="myTooltip" data-toggle="tooltip" 
                 data-title="IDHM: ${idhm}\n\n
                 Assistência hospitalar: ${assistencia_hospitalar}\n\n
                 Gastos gerais: ${gastos_gerais_saude}" data-placement="top">
                ${name}</span>`;
            })
            .join(', ')}.
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
                                
                        ${data
            .filter((item) => item[5] == predictedCluster5 + 1)
            .map((item) => {
                const [
                    name,
                    despesasporfuncao_gastosgerais,
                    assistenciahospitalar_despesasporfuncao,
                    atencaobasica_gastosgerais,
                    assistenciahospitalar_gastosgerais,
                    despesasporfuncao_atencaobasica,
                    idhm,
                    despesa_por_função,
                    assistencia_hospitalar,
                    atencao_basica,
                    gastos_gerais_saude
                ] = item;
                return `
                <span id="myTooltip" data-toggle="tooltip" 
                data-title="IDHM: ${idhm}\n\n
                Despesas por função: ${despesa_por_função}\n\n
                Atenção básica: ${atencao_basica}" data-placement="top">
                ${name}</span>`;
            })
            .join(', ')}
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
    `
    $('[data-toggle="tooltip"]').tooltip();
}

function get_group() {
    predict();
}



data = [
    ['Açailândia (MA)', 2, 2, 2, 1, 2, 0.672, 'R$ 2.022,90', 'R$ 202,39', 'R$ 152,29', 'R$ 475,72'],
    ['Alagoinhas (BA)', 2, 2, 2, 1, 2, 0.683, 'R$ 1.888,16', 'R$ 236,18', 'R$ 138,07', 'R$ 468,87'],
    ['Americana (SP)', 1, 1, 3, 2, 1, 0.811, 'R$ 3.259,38', 'R$ 458,36', 'R$ 316,91', 'R$ 797,75'],
    ['Anápolis (GO)', 2, 2, 1, 2, 2, 0.737, 'R$ 2.473,42', 'R$ 400,37', 'R$ 181,90', 'R$ 678,70'],
    ['Aracaju (SE)', 2, 2, 3, 2, 2, 0.77, 'R$ 2.419,27', 'R$ 382,58', 'R$ 230,63', 'R$ 802,01'],
    ['Araçatuba (SE)', 2, 2, 1, 1, 2, 0.788, 'R$ 2.703,54', 'R$ 243,46', 'R$ 372,45', 'R$ 661,86'],
    ['Arapiraca (AL)', 2, 2, 3, 2, 2, 0.649, 'R$ 2.140,13', 'R$ 443,93', 'R$ 231,22', 'R$ 789,11'],
    ['Araras (SP)', 1, 1, 1, 2, 1, 0.781, 'R$ 3.428,56', 'R$ 413,80', 'R$ 215,39', 'R$ 682,88'],
    ['Atibaia (SP)', 2, 2, 1, 1, 2, 0.765, 'R$ 3.143,20', 'R$ 247,21', 'R$ 368,60', 'R$ 646,06'],
    ['Barbacena (MG)', 2, 2, 3, 2, 2, 0.769, 'R$ 2.298,56', 'R$ 573,29', 'R$ 107,76', 'R$ 843,68'],
    ['Belém (PA)', 2, 2, 1, 1, 2, 0.746, 'R$ 1.873,25', 'R$ 237,75', 'R$ 93,01', 'R$ 603,92'],
    ['Belo Horizonte (MG)', 1, 1, 4, 2, 1, 0.81, 'R$ 3.488,35', 'R$ 638,35', 'R$ 109,61', 'R$ 1.097,67'],
    ['Betim (MG)', 1, 1, 4, 2, 1, 0.749, 'R$ 3.642,34', 'R$ 393,95', 'R$ 102,38', 'R$ 1.020,08'],
    ['Birigui (SP)', 2, 2, 1, 1, 2, 0.78, 'R$ 2.492,41', 'R$ 230,15', 'R$ 213,20', 'R$ 538,29'],
    ['Blumenau (SC)', 1, 1, 5, 2, 1, 0.806, 'R$ 3.560,14', 'R$ 446,53', 'R$ 454,84', 'R$ 912,35'],
    ['Boa Vista (RR)', 2, 2, 1, 1, 2, 0.752, 'R$ 2.722,54', 'R$ 171,17', 'R$ 236,04', 'R$ 547,61'],
    ['Brusque (SC)', 2, 2, 1, 1, 2, 0.795, 'R$ 2.765,65', 'R$ 263,96', 'R$ 218,04', 'R$ 582,67'],
    ['Cachoeiro de Itapemirim (ES)', 2, 2, 2, 1, 2, 0.746, 'R$ 1.865,21', 'R$ 46,83', 'R$ 162,04', 'R$ 306,91'],
    ['Camaçari (BA)', 1, 1, 3, 1, 1, 0.694, 'R$ 3.877,83', 'R$ 156,18', 'R$ 192,34', 'R$ 744,84'],
    ['Campina Grande (PB)', 2, 2, 1, 1, 2, 0.72, 'R$ 1.885,84', 'R$ 344,83', 'R$ 183,49', 'R$ 651,25'],
    ['Campinas (SP)', 1, 1, 4, 2, 1, 0.805, 'R$ 3.634,80', 'R$ 373,76', 'R$ 157,35', 'R$ 991,94'],
    ['Campo Grande (MS)', 1, 1, 4, 2, 1, 0.784, 'R$ 3.359,02', 'R$ 744,57', 'R$ 285,78', 'R$ 1.165,83'],
    ['Canoas (RS)', 1, 1, 4, 2, 1, 0.75, 'R$ 3.317,05', 'R$ 599,84', 'R$ 192,95', 'R$ 996,62'],
    ['Caxias do Sul (RS)', 1, 1, 3, 2, 1, 0.782, 'R$ 3.408,70', 'R$ 497,47', 'R$ 183,86', 'R$ 884,58'],
    ['Chapecó (SC)', 2, 2, 5, 2, 2, 0.79, 'R$ 2.907,33', 'R$ 437,09', 'R$ 481,19', 'R$ 979,04'],
    ['Colatina (ES)', 2, 2, 1, 1, 2, 0.746, 'R$ 2.513,84', 'R$ 217,66', 'R$ 297,63', 'R$ 620,32'],
    ['Coronel Fabriciano (MG)', 2, 2, 2, 1, 2, 0.755, 'R$ 1.453,90', 'R$ 61,08', 'R$ 172,94', 'R$ 294,50'],
    ['Crato (CE)', 2, 2, 1, 1, 2, 0.713, 'R$ 1.667,05', 'R$ 362,55', 'R$ 118,23', 'R$ 601,24'],
    ['Curitiba (PR)', 1, 1, 3, 2, 1, 0.823, 'R$ 3.701,61', 'R$ 446,63', 'R$ 342,06', 'R$ 807,94'],
    ['Divinópolis (MG)', 2, 2, 3, 2, 2, 0.764, 'R$ 2.110,26', 'R$ 488,14', 'R$ 145,79', 'R$ 785,14'],
    ['Dourados (MS)', 2, 2, 4, 2, 2, 0.747, 'R$ 3.104,94', 'R$ 667,19', 'R$ 263,59', 'R$ 1.032,64'],
    ['Embu das Artes (SP)', 2, 2, 2, 1, 2, 0.735, 'R$ 1.849,91', 'R$ 93,93', 'R$ 104,00', 'R$ 312,91'],
    ['Feira de Santana (BA)', 2, 2, 1, 1, 2, 0.712, 'R$ 1.513,15', 'R$ 299,99', 'R$ 138,42', 'R$ 528,08'],
    ['Florianópolis (SC)', 1, 1, 1, 1, 1, 0.847, 'R$ 3.287,03', 'R$ 133,51', 'R$ 377,16', 'R$ 597,80'],
    ['Fortaleza (CE)', 2, 2, 3, 2, 2, 0.754, 'R$ 2.144,60', 'R$ 430,16', 'R$ 133,81', 'R$ 694,09'],
    ['Foz do Iguaçu (PR)', 2, 2, 3, 2, 2, 0.751, 'R$ 2.715,72', 'R$ 496,86', 'R$ 219,35', 'R$ 810,35'],
    ['Franca (SP)', 2, 2, 1, 1, 2, 0.78, 'R$ 1.797,29', 'R$ 299,32', 'R$ 209,54', 'R$ 542,20'],
    ['Garanhuns (PE)', 2, 2, 2, 1, 2, 0.664, 'R$ 1.665,40', 'R$ 147,95', 'R$ 140,02', 'R$ 354,43'],
    ['Governador Valadares (MG)', 2, 2, 1, 1, 2, 0.727, 'R$ 2.493,26', 'R$ 319,01', 'R$ 74,57', 'R$ 566,59'],
    ['Guarulhos (SP)', 2, 2, 1, 2, 2, 0.763, 'R$ 2.806,67', 'R$ 391,74', 'R$ 172,85', 'R$ 675,09'],
    ['Igarassu (PE)', 2, 2, 2, 1, 2, 0.665, 'R$ 1.526,10', 'R$ 152,93', 'R$ 121,11', 'R$ 304,14'],
    ['Imperatriz (MA)', 2, 2, 3, 2, 2, 0.731, 'R$ 2.078,18', 'R$ 455,85', 'R$ 131,59', 'R$ 769,76'],
    ['Indaiatuba (SP)', 1, 1, 3, 2, 1, 0.788, 'R$ 3.627,12', 'R$ 438,59', 'R$ 292,48', 'R$ 830,03'],
    ['Itabira (MG)', 1, 1, 4, 2, 1, 0.756, 'R$ 4.208,34', 'R$ 551,73', 'R$ 175,30', 'R$ 1.020,49'],
    ['Itajaí (SC)', 1, 1, , 2, -1, 0.795, 'R$ 5.009,65', 'R$ 402,77', 'R$ 570,29', 'R$ 1.060,05'],
    ['Itapecerica da Serra (SP)', 2, 2, 2, 1, 2, 0.742, 'R$ 2.175,73', 'R$ 298,32', 'R$ 127,57', 'R$ 483,04'],
    ['Itatiba (SP)', 2, 2, 1, 1, 2, 0.778, 'R$ 3.018,99', 'R$ 287,59', 'R$ 228,99', 'R$ 662,17'],
    ['Itu (SP)', 2, 2, 1, 1, 2, 0.773, 'R$ 3.053,14', 'R$ 216,77', 'R$ 205,89', 'R$ 599,68'],
    ['Jaboatão dos Guararapes (PE)', 2, 2, 2, 1, 2, 0.717, 'R$ 1.412,37', 'R$ 114,21', 'R$ 77,43', 'R$ 319,01'],
    ['Ji-Paraná (RO)', 2, 2, 2, 1, 2, 0.714, 'R$ 1.695,43', 'R$ 193,68', 'R$ 86,75', 'R$ 502,93'],
    ['João Pessoa (PB)', 2, 2, 3, 2, 2, 0.763, 'R$ 2.401,66', 'R$ 396,78', 'R$ 195,46', 'R$ 800,12'],
    ['Joinville (SC)', 2, 2, 4, 2, 2, 0.809, 'R$ 2.775,59', 'R$ 427,37', 'R$ 131,45', 'R$ 913,43'],
    ['Juiz de Fora (MG)', 2, 2, 4, 2, 2, 0.778, 'R$ 2.473,88', 'R$ 629,89', 'R$ 131,89', 'R$ 904,29'],
    ['Jundiaí (SP)', 1, 1, 4, 2, 1, 0.822, 'R$ 4.193,75', 'R$ 757,67', 'R$ 229,92', 'R$ 1.102,65'],
    ['Lages (SC)', 2, 2, 1, 1, 2, 0.77, 'R$ 2.756,24', 'R$ 270,68', 'R$ 394,49', 'R$ 683,74'],
    ['Lauro de Freitas (BA)', 2, 2, 2, 1, 2, 0.754, 'R$ 2.394,72', 'R$ 114,23', 'R$ 92,06', 'R$ 367,18'],
    ['Londrina (PR)', 2, 2, 4, 2, 2, 0.778, 'R$ 2.660,83', 'R$ 656,75', 'R$ 229,92', 'R$ 975,30'],
    ['Maceió (AL)', 2, 2, 1, 1, 2, 0.721, 'R$ 1.956,43', 'R$ 302,29', 'R$ 83,88', 'R$ 593,18'],
    ['Manaus (AM)', 2, 2, 2, 1, 2, 0.737, 'R$ 2.035,61', 'R$ 119,95', 'R$ 133,31', 'R$ 383,01'],
    ['Marabá (PA)', 2, 2, 1, 1, 2, 0.668, 'R$ 2.407,54', 'R$ 227,31', 'R$ 162,46', 'R$ 522,99'],
    ['Maracanaú (CE)', 2, 2, 3, 2, 2, 0.686, 'R$ 2.566,44', 'R$ 466,90', 'R$ 223,01', 'R$ 756,03'],
    ['Maringá (PR)', 2, 2, 4, 2, 2, 0.808, 'R$ 2.782,86', 'R$ 591,13', 'R$ 241,83', 'R$ 909,43'],
    ['Mauá (SP)', 2, 2, 1, 1, 2, 0.766, 'R$ 2.009,79', 'R$ 265,28', 'R$ 187,53', 'R$ 622,78'],
    ['Mogi das Cruzes (SP)', 2, 2, 1, 1, 2, 0.783, 'R$ 2.547,25', 'R$ 161,30', 'R$ 322,29', 'R$ 508,66'],
    ['Mogi Guaçu (SP)', 2, 2, 3, 2, 2, 0.774, 'R$ 2.985,30', 'R$ 412,55', 'R$ 327,59', 'R$ 774,06'],
    ['Montes Claros (MG)', 2, 2, 3, 2, 2, 0.77, 'R$ 1.801,57', 'R$ 480,20', 'R$ 164,09', 'R$ 709,24'],
    ['Mossoró (RN)', 2, 2, 1, 1, 2, 0.72, 'R$ 2.652,03', 'R$ 131,32', 'R$ 288,28', 'R$ 660,71'],
    ['Muriaé (MG)', 2, 2, 2, 1, 2, 0.734, 'R$ 1.999,01', 'R$ 135,64', 'R$ 131,54', 'R$ 432,99'],
    ['Niterói (RJ)', 1, 1, 3, 2, 1, 0.837, 'R$ 3.939,97', 'R$ 231,30', 'R$ 140,31', 'R$ 820,53'],
    ['Nova Iguaçu (RJ)', 2, 2, 2, 1, 2, 0.713, 'R$ 1.511,48', 'R$ 270,80', 'R$ 66,43', 'R$ 442,60'],
    ['Novo Hamburgo (RS)', 2, 2, 5, 1, 2, 0.747, 'R$ 2.855,62', 'R$ 250,30', 'R$ 474,24', 'R$ 767,02'],
    ['Palmas (TO)', 1, 1, 1, 1, 1, 0.788, 'R$ 3.251,96', 'R$ 276,71', 'R$ 239,70', 'R$ 688,71'],
    ['Parauapebas (PA)', 1, 1, 4, 2, 1, 0.715, 'R$ 5.761,67', 'R$ 528,75', 'R$ 310,36', 'R$ 963,05'],
    ['Parnaíba (PI)', 2, 2, 2, 1, 2, 0.687, 'R$ 1.720,54', 'R$ 170,35', 'R$ 135,09', 'R$ 430,05'],
    ['Passos (MG)', 2, 2, 2, 1, 2, 0.756, 'R$ 1.691,54', 'R$ 259,08', 'R$ 135,80', 'R$ 459,61'],
    ['Patos de Minas (MG)', 2, 2, 3, 2, 2, 0.765, 'R$ 2.077,14', 'R$ 455,92', 'R$ 214,39', 'R$ 814,37'],
    ['Paulista (PE)', 2, 2, 2, 1, 2, 0.732, 'R$ 1.230,23', 'R$ 73,23', 'R$ 118,48', 'R$ 264,36'],
    ['Pindamonhangaba (SP)', 2, 2, 3, 2, 2, 0.773, 'R$ 2.608,43', 'R$ 367,46', 'R$ 302,03', 'R$ 741,55'],
    ['Piracicaba (SP)', 1, 1, 3, 2, 1, 0.785, 'R$ 3.466,63', 'R$ 275,47', 'R$ 77,97', 'R$ 842,65'],
    ['Poá (SP)', 2, 2, 1, 2, 2, 0.771, 'R$ 3.120,23', 'R$ 348,55', 'R$ 313,72', 'R$ 698,76'],
    ['Ponta Grossa (PR)', 2, 2, 2, 1, 2, 0.763, 'R$ 1.913,25', 'R$ 125,25', 'R$ 96,67', 'R$ 443,74'],
    ['Porto Alegre (RS)', 1, 1, 4, 2, 1, 0.805, 'R$ 3.745,04', 'R$ 625,03', 'R$ 209,87', 'R$ 1.010,53'],
    ['Porto Seguro (BA)', 2, 2, 2, 1, 2, 0.676, 'R$ 2.065,96', 'R$ 153,58', 'R$ 216,31', 'R$ 431,18'],
    ['Praia Grande (SP)', 1, 1, 3, 2, 1, 0.754, 'R$ 3.959,18', 'R$ 425,82', 'R$ 274,43', 'R$ 810,10'],
    ['Presidente Prudente (SP)', 2, 2, 1, 1, 2, 0.806, 'R$ 2.596,37', 'R$ 132,15', 'R$ 331,61', 'R$ 494,57'],
    ['Resende (RJ)', 1, 1, 4, 2, 1, 0.768, 'R$ 3.285,70', 'R$ 493,01', 'R$ 172,42', 'R$ 939,75'],
    ['Ribeirão das Neves (MG)', 2, 2, 2, 1, 2, 0.684, 'R$ 1.137,10', 'R$ 151,15', 'R$ 198,01', 'R$ 389,38'],
    ['Ribeirão Pires (SP)', 2, 2, 1, 1, 2, 0.784, 'R$ 2.208,03', 'R$ 398,88', 'R$ 183,71', 'R$ 635,23'],
    ['Ribeirão Preto (SP)', 1, 1, 5, 2, 1, 0.8, 'R$ 3.304,45', 'R$ 312,11', 'R$ 460,40', 'R$ 859,05'],
    ['Rio das Ostras (RJ)', -1, -1, 5, 2, -1, 0.773, 'R$ 8.637,25', 'R$ 697,55', 'R$ 313,30', 'R$ 1.376,11'],
    ['Rio de Janeiro (RJ)', 1, 1, 1, 2, 1, 0.799, 'R$ 3.522,63', 'R$ 427,36', 'R$ 174,97', 'R$ 641,01'],
    ['Rio Grande (RS)', 2, 2, 2, 1, 2, 0.744, 'R$ 2.398,55', 'R$ 31,17', 'R$ 177,07', 'R$ 397,56'],
    ['Sabará (MG)', 2, 2, 2, 1, 2, 0.731, 'R$ 1.548,00', 'R$ 64,52', 'R$ 37,76', 'R$ 317,60'],
    ['Santa Cruz do Sul (RS)', 2, 2, 4, 2, 2, 0.773, 'R$ 2.884,29', 'R$ 593,97', 'R$ 245,69', 'R$ 950,35'],
    ['São Bernardo do Campo (SP)', 1, 1, 4, 2, 1, 0.805, 'R$ 4.515,70', 'R$ 802,94', 'R$ 206,91', 'R$ 1.143,99'],
    ['São Caetano do Sul (SP)', -1, -1, , 2, -1, 0.862, 'R$ 8.438,62', 'R$ 1.522,07', 'R$ 164,14', 'R$ 1.746,20'],
    ['São Carlos (SP)', 2, 2, 3, 2, 2, 0.805, 'R$ 2.958,13', 'R$ 533,14', 'R$ 138,49', 'R$ 770,16'],
    ['São José de Ribamar (MA)', 2, 2, 2, 1, 2, 0.708, 'R$ 1.346,57', 'R$ 115,86', 'R$ 193,41', 'R$ 342,88'],
    ['São José do Rio Preto (SP)', 2, 2, 1, 1, 2, 0.797, 'R$ 3.039,39', 'R$ 247,83', 'R$ 150,20', 'R$ 654,64'],
    ['São José dos Campos (SP)', 1, 1, , 2, -1, 0.807, 'R$ 3.565,85', 'R$ 302,24', 'R$ 626,72', 'R$ 945,75'],
    ['São José dos Pinhais (PR)', 2, 2, 1, 2, 2, 0.758, 'R$ 2.704,37', 'R$ 395,48', 'R$ 186,17', 'R$ 681,96'],
    ['São Luís (MA)', 2, 2, 3, 2, 2, 0.768, 'R$ 2.302,04', 'R$ 398,99', 'R$ 44,51', 'R$ 728,99'],
    ['São Mateus (ES)', 2, 2, 2, 1, 2, 0.735, 'R$ 2.517,08', 'R$ 12,97', 'R$ 236,68', 'R$ 360,17'],
    ['São Paulo (SP)', 1, 1, 3, 1, 1, 0.805, 'R$ 3.995,69', 'R$ 283,24', 'R$ 217,96', 'R$ 741,35'],
    ['São Vicente (SP)', 2, 2, 1, 1, 2, 0.768, 'R$ 2.414,69', 'R$ 139,08', 'R$ 381,12', 'R$ 529,69'],
    ['Serra (ES)', 2, 2, 2, 1, 2, 0.739, 'R$ 2.488,62', 'R$ 61,61', 'R$ 89,54', 'R$ 453,92'],
    ['Sete Lagoas (MG)', 2, 2, 3, 2, 2, 0.76, 'R$ 2.363,49', 'R$ 510,68', 'R$ 91,66', 'R$ 717,84'],
    ['Sinop (MT)', 2, 2, 1, 1, 2, 0.754, 'R$ 2.377,00', 'R$ 268,90', 'R$ 259,37', 'R$ 592,40'],
    ['Sorocaba (SP)', 1, 1, 3, 2, 1, 0.798, 'R$ 3.345,58', 'R$ 421,88', 'R$ 316,16', 'R$ 774,17'],
    ['Teófilo Otoni (MG)', 2, 2, 3, 2, 2, 0.701, 'R$ 1.885,90', 'R$ 555,36', 'R$ 123,64', 'R$ 792,88'],
    ['Teresina (PI)', 2, 2, 4, 2, 2, 0.751, 'R$ 2.526,46', 'R$ 497,27', 'R$ 115,18', 'R$ 999,58'],
    ['Teresópolis (RJ)', 2, 2, 3, 2, 2, 0.73, 'R$ 2.624,50', 'R$ 399,12', 'R$ 96,43', 'R$ 723,26'],
    ['Umuarama (PR)', 2, 2, 3, 2, 2, 0.761, 'R$ 2.398,47', 'R$ 475,39', 'R$ 310,21', 'R$ 833,55'],
    ['Várzea Grande (MT)', 2, 2, 2, 1, 2, 0.734, 'R$ 1.768,42', 'R$ 67,19', 'R$ 54,35', 'R$ 449,29'],
    ['Viamão (RS)', 2, 2, 2, 1, 2, 0.717, 'R$ 1.307,83', 'R$ 21,25', 'R$ 149,70', 'R$ 203,09'],
    ['Vitória (ES)', 1, -1, 3, 1, 1, 0.845, 'R$ 5.055,05', 'R$ 106,60', 'R$ 100,46', 'R$ 822,82'],
    ['Vitória da Conquista (BA)', 2, 2, 1, 1, 2, 0.678, 'R$ 1.714,51', 'R$ 278,78', 'R$ 131,95', 'R$ 605,28'],

]

async function populateTable() {
    const predictions = await predict();
    const [predictedCluster1, predictedCluster2, predictedCluster3, predictedCluster4, predictedCluster5] = predictions;

    document.getElementById('group_cities').innerHTML = `
    <h2 class="card-title text-center mt-4 mb-2">Classificação por variáveis</h2>
    
    <div class="container background">
        <div class="row">
            <div class="col-xs-12 col-md-6">
                <div class="card background">
                    <div class="card-header card-background-header">
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
            <div class="col-xs-12 col-md-6">
                <div class="card background">
                    <div class="card-header card-background-header">
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
        </div>
        <div class="row">
            <div class="col-xs-12 col-md-6">
                <div class="card background mt-3">
                    <div class="card-header card-background-header">
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
            <div class="col-xs-12 col-md-6">
                <div class="card background mt-3">
                    <div class="card-header card-background-header">
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
        </div>
        <div class="row">
            <!-- Adicione o quinto card separadamente, ocupando uma coluna -->
            <div class="col-xs-12">
                <div class="card background mt-3">
                    <div class="card-header card-background-header">
                        <h5 class="card-title">Despesas por Função e Atenção Básica</h5>
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
    </div>
    `;
    $('[data-toggle="tooltip"]').tooltip();
}

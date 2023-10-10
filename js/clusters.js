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

async function predict(valores = null) {
    if (valores == null) {
        var despesas_funcao = document.getElementById('despesas_funcao').value;
        var assistencia_hospitalar = document.getElementById('assistencia_hospitalar').value;
        var atencao_basica = document.getElementById('atencao_basica').value;
        var gastos_gerais = document.getElementById('gastos_gerais').value;
        var check = document.getElementById('check').checked;
    } else{
        despesas_funcao = valores.slider1;
        assistencia_hospitalar = valores.slider2;
        atencao_basica = valores.slider3;
        gastos_gerais = valores.slider4;
        check = false;
    }


    if (check) {
        model_despesasporfuncao_gastosgerais = convertModel(despesasporfuncao_gastosgerais_ckeck);
        model_assistenciahospitalar_despesasporfuncao = convertModel(assistenciahospitalar_despesasporfuncao_check);
        model_atencaobasica_gastosgerais = convertModel(atencaobasica_gastosgerais_check);
        model_assistenciahospitalar_gastosgerais = convertModel(assistenciahospitalar_gastosgerais_check);
        model_despesasporfuncao_atencaobasica = convertModel(despesasporfuncao_atencaobasica_check);
    } else {
        model_despesasporfuncao_gastosgerais = convertModel(despesasporfuncao_gastosgerais);
        model_assistenciahospitalar_despesasporfuncao = convertModel(assistenciahospitalar_despesasporfuncao);
        model_atencaobasica_gastosgerais = convertModel(atencaobasica_gastosgerais);
        model_assistenciahospitalar_gastosgerais = convertModel(assistenciahospitalar_gastosgerais);
        model_despesasporfuncao_atencaobasica = convertModel(despesasporfuncao_atencaobasica);

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

    return [predictedCluster1, predictedCluster2, predictedCluster3, predictedCluster4, predictedCluster5];
}
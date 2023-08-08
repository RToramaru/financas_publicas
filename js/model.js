const fs = require('fs');
const tf = require('@tensorflow/tfjs-node');

async function loadModel() {
  const rawData = fs.readFileSync('model.json', 'utf8');
  const modelConfig = JSON.parse(rawData);

  // Crie um novo modelo TensorFlow.js e defina as configurações a partir do JSON
  const model = await tf.loadLayersModel(
    tf.io.fromMemory(modelConfig.modelTopology, modelConfig.weightsManifest)
  );

  return model;
}

async function performPrediction() {
  const loadedModel = await loadModel();

  // Faça previsões ou execute outras operações com o modelo carregado aqui
  // Por exemplo:
  const input = tf.tensor2d([[1.0, 2.0, 3.0, 4.0]]);
  const prediction = loadedModel.predict(input);
  prediction.print();
}

// Associar a função ao evento de clique do botão
document.getElementById('loadModelButton').addEventListener('click', () => {
  performPrediction();
});

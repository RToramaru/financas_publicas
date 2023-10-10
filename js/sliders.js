function criarControlesDeslizantes() {
    const sliders = document.querySelectorAll('input[type="range"]');
    
    function atualizarValores() {
        sliders.forEach(slider => {
            const valueSpan = document.getElementById(`value${slider.id.slice(-1)}`);
            valueSpan.textContent = slider.value;
        });
    }

    sliders.forEach(slider => {
        const valueSpan = document.getElementById(`value${slider.id.slice(-1)}`);

        slider.addEventListener('input', () => {
            valueSpan.textContent = slider.value;
            pegarValoresDosSliders(); 
        });
    });

    async function pegarValoresDosSliders() {
        const valores = {};
        sliders.forEach(slider => {
            valores[slider.id] = slider.value;
        });
        result = await predict(valores);
        document.getElementById('result_0').textContent = result[0];
        document.getElementById('result_1').textContent = result[1];
        document.getElementById('result_2').textContent = result[2];
        document.getElementById('result_3').textContent = result[3];
        document.getElementById('result_4').textContent = result[4];

    }

    atualizarValores();
}

criarControlesDeslizantes();

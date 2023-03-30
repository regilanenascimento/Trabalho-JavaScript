function imc() {
    const resultado = document.querySelector('#resultado');
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const calcular = document.querySelector('calcular');

    const imc = (peso / (altura * altura)).toFixed(2)

    let classification = ''

    if (imc < 18.5) {
        classification = 'Abaixo do peso'
    }else if (imc < 25) {
        classification = 'Peso normal'
    }else if (imc < 30) {
        classification = 'Acima do peso'
    }else if (imc < 35) {
        classification = 'Obesidade Graus I'
    }else if (imc < 41) {
        classification = 'obesidade Grau II'
    }else{
        classification = 'Obesidade Grau III'
    }

    document.getElementById('resultado').innerText = `IMC: ${imc} (${classification})`
}
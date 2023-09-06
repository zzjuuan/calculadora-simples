function addVisor(value) {
    const visor = document.getElementById('visor');
    const valorAtual = visor.value;

    const ultimoCaracter = valorAtual.charAt(valorAtual.length - 1);
    const operators = "+-*/÷^x.";

    if (operators.includes(ultimoCaracter) && operators.includes(value)) {
        document.getElementById('visor').value = valorAtual.substring(0, valorAtual.length - 1) + value;;
    } else {
        document.getElementById('visor').value += value;
    }
}

function calcular() {
    let valor = document.getElementById('visor');
    const valorAtual = visor.value;
    const ultimoCaracter = valorAtual.charAt(valorAtual.length - 1);
    const operators = "+-*/÷^x.";

    if (operators.includes(ultimoCaracter)) {
        valor = valorAtual.substring(0, valorAtual.length - 1);;
    }

    valor = valor.replace(/÷/g, '/');
    valor = valor.replace(/x/g, '*');
    valor = valor.replace(/\^/g, '**');

    const resultado = eval(valor)
    if (resultado == undefined || resultado == null) {
        return 0;
    } else {
        document.getElementById('visor').value = resultado;
    }
}

function limparVisor() {
    document.getElementById('visor').value = ''
}

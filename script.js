function addVisor(value) {
    document.getElementById('visor').value += value;
}

function calcular() {
    let valor = document.getElementById('visor').value;
    valor = valor.replace(/÷/g, '/');
    valor = valor.replace(/x/g, '*');
    valor = valor.replace(/\^/g, '**');
    const resultado = eval(valor)
    if(resultado == undefined || resultado == null){
        return 0;
    }else {
        document.getElementById('visor').value  = resultado;  
    }
}

function limparVisor() {
    document.getElementById('visor').value = ''
}

const comprasRegistradas = [
    { nome: 'Lucas', valor: 2500 },
    { nome: 'Leila', valor: 520 },
    { nome: 'Daniel', valor: 4150 }
];

function calcularDesconto() {
    const nomeCliente = document.getElementById('nomeCliente').value;
    const valorCompra = parseFloat(document.getElementById('valorCompra').value);
    let desconto = 0;

    if (valorCompra >= 3000) {
        desconto = 10;
    } else if (valorCompra >= 2501 && valorCompra <= 2999) {
        desconto = 5;
    }

    const valorComDesconto = valorCompra * (1 - desconto / 100);

    const resultadoAnterior = document.getElementById('resultado').textContent;
    const novoResultado = `${resultadoAnterior}\n${nomeCliente}, gastou R$${valorCompra.toFixed(2)}, teve ${desconto}% de desconto e pagou apenas: R$${valorComDesconto.toFixed(2)}.`;

    document.getElementById('resultado').textContent = novoResultado;
}

comprasRegistradas.forEach(compra => {
    document.getElementById('nomeCliente').value = compra.nome;
    document.getElementById('valorCompra').value = compra.valor;
    calcularDesconto();
});

function calcularImposto() {
    const valorCarro = parseFloat(document.getElementById("valorCarro").value);
    const metodoPagamento = parseInt(document.getElementById("metodoPagamento").value);
    const imposto = 0;

    switch (metodoPagamento) {
        case 1:
            imposto = valorCarro * 0.3;
            break;
        case 2:
            imposto = valorCarro * 0.15;
            break;
        case 3:
            imposto = 0;
            break;
        default:
            alert("Método de pagamento inválido!");
            return;
    }

    const valorFinal = valorCarro + imposto;

    document.getElementById("resultado").textContent = `O valor inicial do carro é R$${valorCarro.toFixed(2)}. Já que a forma de pagamento foi ${getMetodoPagamento(metodoPagamento)}, o valor final do carro ficou em R$${valorFinal.toFixed(2)}.`;
}

function getMetodoPagamento(metodoPagamento) {
    switch (metodoPagamento) {
        case 1:
            return "Financiamento";
        case 2:
            return "Consórcio";
        case 3:
            return "Pagamento à vista";
    }
}

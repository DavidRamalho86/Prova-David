
function calcularImposto() {
    const valorCarro = parseFloat(document.getElementById('valorDoCarro').value);
    const metodoPagamento = parseInt(document.getElementById('formaDePagamento').value);
    let imposto = 0;

    switch (metodoPagamento) {
        case 1:
            imposto = valorCarro * 0.3;
            break;
        case 2:
            imposto = valorCarro * 0.15;
            break;
        // Caso 3 (Pagamento à Vista) não tem imposto
        default:
            imposto = 0;
    }

    const valorFinal = valorCarro + imposto;
    const metodoEscolhido = (metodoPagamento === 3) ? 'Pagamento à Vista' : (metodoPagamento === 1) ? 'Financiamento' : 'Consórcio';

    document.getElementById('resultado').textContent = `O valor inicial do carro é R$${valorCarro.toFixed(2)}. Já que a forma de pagamento foi ${metodoEscolhido}, o valor final do carro ficou em R$${valorFinal.toFixed(2)}.`;
}

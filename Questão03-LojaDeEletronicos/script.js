function calcularDesconto() {
    const valorCompra = parseFloat(document.getElementById("valorCompra").value);
    const desconto = 0;

    if (valorCompra >= 3000) {
        desconto = 0.1;
    } else if (valorCompra >= 2501 && valorCompra <= 2999) {
        desconto = 0.05;
    }

    const valorFinal = valorCompra - (valorCompra * desconto);
       
    
    const compraLucas = 2500.00;
    const compraLeila =5250.00;
    const compraDaniel =4150.00;

    const totalDaniel =  compraDaniel - (valorCompra * desconto);
    console.log("Total das compras de Daniel", totalDaniel.toFixed(2));
    const totalLeila =  compraLeila - (valorCompra * desconto);
    console.log("Total das compras de Leila", totalLeila.toFixed(2));
    const totalLucas =  compraLucas - (valorCompra * desconto);
    console.log("Total das compras de Lucas", totalLucas.toFixed(2));
    
    document.getElementById("resultado").textContent = `O valor da compra é R$${valorCompra.toFixed(2)}. O desconto aplicado é de ${desconto * 100}%. O valor final a ser pago é R$${valorFinal.toFixed(2)}.`;
}
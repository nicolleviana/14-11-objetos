/*

Elabore um programa que apresente e solicite qual lanche o usuário deseja adicionar, pergunte a quantidade e adicione a uma lista de pedido.
Pergunte se deseja adicionar mais lanches e refaça o processo se positivo.

Apresente a lista e solicite se o usuário deseja bebida, solicite a quantidade e adicione a mesma lista de pedidos, solicite se deseja mais produtos.

Ao final, apresente o pedido com todos os itens, total dos lanches, total das bebidas e total do pedido.

Bonus: adicione formas de pagamento, ex: A Vista com 5% de desconto e valor para frete caso seja entrega.
*/

// Lista de lanches
var listaLanches = [
    { codigo: 1, nome: "Hamburgue", preco: 10 },
    { codigo: 2, nome: "Dogão", preco: 15 },
    { codigo: 3, nome: "X-Infarto", preco: 30 }
];

var listaBebidas = [
    { codigo: 1, nome: "Coca-Cola", preco: 10 },
    { codigo: 2, nome: "Suco de Laranja", preco: 15 },
    { codigo: 3, nome: "Chorume", preco: 30 }
];

var iPedido = 0;
listaPedido = [];

var continuar = 1;

while (continuar) {
    console.log(" == LANCHES DA SUPER LANCHONETE DO INFO ==");
    console.log("Código | Nome | Preço")
    for (var i = 0; i < listaLanches.length; i++) {
        console.log(`${listaLanches[i].codigo} | ${listaLanches[i].nome} | ${listaLanches[i].preco}`);
    }

    var codigoLanche = parseInt(prompt("Digite o código do Lanche"));
    var quantidadeLanche = parseInt(prompt("Digite a quantidade de lanches que deseja:"));

    for (var i = 0; i < listaLanches.length; i++) {
        if (codigoLanche == listaLanches[i].codigo) {
            listaPedido[iPedido] = listaLanches[i];
            listaPedido[iPedido].quantidade = quantidadeLanche;
        }
    }

    continuar = parseInt(prompt("Digite 1 se deseja adicionar mais lanches\nDigite 0 para continuar o pedido."));
    iPedido++;
}

continuar = 1;

while (continuar) {
    console.log(" == BEBIDAS DA SUPER LANCHONETE DO INFO ==");
    console.log("Código | Nome | Preço")
    for (var i = 0; i < listaBebidas.length; i++) {
        console.log(`${listaBebidas[i].codigo} | ${listaBebidas[i].nome} | ${listaBebidas[i].preco}`);
    }

    var codigoBebida = parseInt(prompt("Digite o código da bebida"));
    var quantidadeBebida = parseInt(prompt("Digite a quantidade de bebidas que deseja:"));

    for (var i = 0; i < listaBebidas.length; i++) {
        if (codigoLanche == listaLanches[i].codigo) {
            listaPedido[iPedido] = listaBebidas[i];
            listaPedido[iPedido].quantidade = quantidadeBebida;
        }
    }

    continuar = parseInt(prompt("Digite 1 se deseja adicionar mais lanches\nDigite 0 para continuar o pedido."));
    iPedido++;
}

var totalPedido = 0;
for (var i = 0; i< listaPedido.length; i++){
    totalPedido += listaPedido[i].preco * listaPedido.quantidade;
}
console.log("Total do pedido: ", totalPedido);
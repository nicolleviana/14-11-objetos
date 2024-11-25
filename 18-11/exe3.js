/*

Elabore um programa que apresente e solicite qual lanche o usuário deseja adicionar, pergunte a quantidade e adicione a uma lista de pedido.
Pergunte se deseja adicionar mais lanches e refaça o processo se positivo.

Apresente a lista e solicite se o usuário deseja bebida, solicite a quantidade e adicione a mesma lista de pedidos, solicite se deseja mais produtos.

Ao final, apresente o pedido com todos os itens, total dos lanches, total das bebidas e total do pedido.

Bonus: adicione formas de pagamento, ex: A Vista com 5% de desconto e valor para frete caso seja entrega.
*/

var lanche = [];
var i = 0;
var condicao = 'sim';
var quantidadeLanche = [];

var listaProdutos = [
	{codigo: 1, nome: "Hamburguer" , valor: 10},
	{codigo: 2, nome: "X-Salada" , valor: 15},
	{codigo: 3, nome: "X-Bacon" , valor: 20},
	
];

console.log("Código | nome | valor");

for(var i = 0; i < listaProdutos.length; i++){
	console.log(listaProdutos[i].codigo, "    | " , listaProdutos[i].nome,"  | ", listaProdutos[i].valor);

}


while( condicao == 'sim'){
    var codigo = parseInt(prompt("Escolha o código do lanche: "));
    var achou = false;
    for (var i = 0; i< listaProdutos.length;i++){
        if(codigo == listaProdutos[i].codigo){
            console.log("\n\n==== ESCOLHIDO FOI =====");
            console.log(listaProdutos[i].codigo, "     |" , listaProdutos[i].nome , " | " , listaProdutos[i].valor );
            achou = true;
        }
    }

quantidadeLanche[i] = parseFloat(prompt("Digite a quantidade de lanches desejado: "));

condicao = prompt("Deseja adicionar mais um lanche?\n Digite 'sim' para continuar: ");
}

var totalLanche = 0;

var total = 0;
for (var i = 0; i < lanche.length; i++){
   totalLanche += quantidadeLanche * lanche[i].valor;
}

console.log("O valor do pedido de lanches foi: " + totalLanche.length);


var bebida = [];
var i = 0;
var pergunta = 'sim';
var quantidadeBebida = [];


var listaBebidas = [
	{codigo: 1, nome: "Coca-Cola" , valor: 10},
	{codigo: 2, nome: "Fanta" , valor: 8},
    {codigo: 3, nome: "ConquistaCola" , valor: 5},
	{codigo: 4, nome: "Água" , valor: 3},
	
];

console.log("Código | nome | valor");

for(var i = 0; i < listaBebidas.length; i++){
	console.log(listaBebidas[i].codigo, "    | " , listaBebidas[i].nome,"  | ", listaBebidas[i].valor);

}


while( pergunta == 'sim'){
    var bebida = parseInt(prompt("Escolha o código da bebida: "));
var achou = false;
for (var i = 0; i< listaBebidas.length;i++){
	if(codigo == listaBebidas[i].codigo){
		console.log("\n\n==== ESCOLHIDO FOI =====");
		console.log(listaBebidas[i].codigo, "     |" , listaBebidas[i].nome , " | " , listaBebidas[i].valor );
		achou = true;
	}
}
    
    quantidadeBebida[i] = parseFloat(prompt("Digite a quantidade de bebidas desejada: "));
    
    pergunta = prompt("Deseja adicionar mais uma bebida?\n Digite 'sim' para continuar: ");
    }
    

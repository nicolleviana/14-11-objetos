/*
	Elabore um programa que contenha uma lista de produtos:
	1 - Hamburguer - R$ 10
	2 - X-Salada - R$ 15
	3 - X-Bacon - R$ 20
	
	Solicite um código de produto, percorra a lista e exiba seus dados
*/


var listaProdutos = [
	{codigo: 1, nome: "Hamburguer" , valor: 10},
	{codigo: 2, nome: "X-Salada" , valor: 15},
	{codigo: 3, nome: "X-Bacon" , valor: 20},
	
];

console.log("Código | nome | valor");

for(var i = 0; i < listaProdutos.length; i++){
	console.log(listaProdutos[i].codigo, "    | " , listaProdutos[i].nome,"  | ", listaProdutos[i].valor);

}

var codigo = parseInt(prompt("Escolha o código do lanche: "));
var achou = false;
for (var i = 0; i< listaProdutos.length;i++){
	if(codigo == listaProdutos[i].codigo){
		console.log("\n\n==== ESCOLHIDO FOI =====");
		console.log(listaProdutos[i].codigo, "     |" , listaProdutos[i].nome , " | " , listaProdutos[i].valor );
		achou = true;
	}
}
 
if(achou == false){
	console.error("\n\n ==== PRODUTO NÂO ENCONTRADO ====");
}
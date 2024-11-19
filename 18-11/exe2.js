/*
	Elabore um progra de cadastro de bebidas com código, nome e valor;
	Ao final, percorra a lista e exiba os dados.
*/

var listaBebidas = [
	{codigo: 1, nome: "Coca-Cola" , valor: 10},
	{codigo: 2, nome: "Fanta" , valor: 8},
    {codigo: 3, nome: "ConquistaCola" , valor: 5},
	{codigo: 4, nome: "Àgua" , valor: 3},
	
];

console.log("Código | nome | valor");

for(var i = 0; i < listaBebidas.length; i++){
	console.log(listaBebidas[i].codigo, "    | " , listaBebidas[i].nome,"  | ", listaBebidas[i].valor);

}

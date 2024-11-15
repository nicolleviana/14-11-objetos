var produtos = [];

var i = 0;
var condicao = 1;

while(condicao){
    // Criar o produto vazio que vamos preencher 
    var produto = {};

    produto.codigo = i + 1;   // Como o i começa em zero, aumentamos 1;
    produto.nome = prompt("Digite o nome do produto:");
    produto.preco = parseFloat(prompt("Digite o preço do produto:"));

    produtos[i] = produto;

    condicao = parseInt(prompt("Digite 1 para adicionar mais produtos\n Digite 0 para SAIR"));

    i++;

}

console.log(produtos);

// Como imprimir o nome do segundo produto da lista:
console.log (produtos[1])

console.log ("------ PRODUTOS CADASTRADOS -------");
for ( var i = 0; i < produtos.length; i++){

    console.log("Código : ", produtos[i].codigo);
    console.log("Nome : ", produtos[i].nome);
    console.log("Preço : ", produtos[i].preco);
    console.log(" -----------------------------")

}
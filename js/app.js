let totalGeral;
limpar();


function adicionar(){

    //Obter nome, quantidade e valor dos produtos

    let produto = document.getElementById('produto').value;


    // Verificar se o produto selecionado é válido
    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }


    



    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    // Verificar se a quantidade inserida é válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    // Calculo do preco
    let preco = quantidade * valorUnitario;


    // Selecionando o id da lista para digitar nos campos da section os produtos adicionados
    let carrinho = document.getElementById('lista-produtos');

    // Adicionar no carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R${preco}</span>
  </section>`;


  //Atualizar total 
  totalGeral = totalGeral + preco;
  let campoTotal = document.getElementById('valor-total');
  campoTotal.textContent = `R$ ${totalGeral}`;

  //zerando a quantidade após o clique  
  document.getElementById('quantidade').value = 0;


}

function limpar (){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';

}



    
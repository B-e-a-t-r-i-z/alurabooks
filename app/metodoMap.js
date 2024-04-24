function aplicarDesconto(livros) {
    const desconto = 0.3;
    livrosComDesconto = livros.map(livro => {
        /*pegar tudo o que tem no livro e faz uma cópia, só que o preço será o 
        valor do livro menos o deconto*/
        return {...livro, preco: livro.preco - (livro.preco * desconto)};
    })
    return livrosComDesconto;
}

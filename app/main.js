let livros = [];

const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosDaApi();

async function getBuscarLivrosDaApi() {
    const res = await fetch (endpointDaApi);
    livros = await res.json();//pegar os livros
    let livrosComDesconto = aplicarDesconto(livros);//aplica o desconto nesses livros e armazena o obejtivo(return) dentro da variavel livrosComDesconto
    exibirOsLivrosNaTela(livrosComDesconto);//exibe os livros com descontos 
}

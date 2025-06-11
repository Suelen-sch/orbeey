const nome = "Orbeey";
var idade = 10;

 function retournarNome() {
    return nome;
}

function retornarIdade() {
    return idade;
}

export default function Variaveis() {
    return (
        <div>
            <h1>Variáveis</h1>
            <p>Nome:{nome} </p>
            <p>Idade:{idade} </p>
            <p>função que retorna essa idade {retornarIdade()}</p>
            <p>função que retorna esse nome {retournarNome()}</p>
        </div>
    );
}
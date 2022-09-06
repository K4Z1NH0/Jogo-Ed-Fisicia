let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
const palavras = [
    palavra001= {
        nome: "BOXE",
        categoria: "Tipo de Luta"
    },
    palavra002= {
        nome: "MMA",
        categoria: "Tipo de Luta"
    },
    palavra003= {
        nome: "KARATE",
        categoria: "Tipo de Luta"
    },
    palavra004= {
        nome: "KUNGFU",
        categoria: "Tipo de Luta"
    },
    palavra005= {
        nome: "CAPOEIRA",
        categoria: "Tipo de Luta"
    },
    palavra006= {
        nome: "BEISEBOL",
        categoria: "Esporte jogado em Campo"
    },
    palavra007= {
        nome: "BASQUETE",
        categoria: "Esporte jogado em Quadra"
    },
    palavra008= {
        nome: "HANDEBOL",
        categoria: "Esporte Jogado em Quadra"
    },
    palavra009= {
        nome: "FUTSAL",
        categoria: "Esporte jogado em Quadra"
    },
    palavra010= {
        nome: "VOLEI",
        categoria: "Esporte jogado em Quadra"
    },
    palavra011= {
        nome: "GOLFE",
        categoria: "Esporte o Equipamento é Um Taco"
    },
    palavra012= {
        nome: "HOQUEI",
        categoria: "Esporte Jogado No Gelo"
    },
    palavra013= {
        nome: "SINUCA",
        categoria: "Esporte de Precisão"
    },
    palavra014= {
        nome: "DARDO",
        categoria: "Esporte de Precisão"
    },
    palavra015= {
        nome: "PARAQUEDISMO",
        categoria: "Esporte de Aventura"
    },

];

criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
    
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;

}   

montarPalavraNaTela();
function montarPalavraNaTela(){
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined ){
            listaDinamica[i] = "&nbsp;" 
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
        else{
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }

}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled=true;
    if(tentativas > 0)
    {
        mudarStyleLetra("tecla-" + letra);
        comparalistas(letra);
        montarPalavraNaTela();  
    }

}

function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "rgba(177, 238, 128, 0.76)";
    document.getElementById(tecla).style.color = "#000000";
}

function comparalistas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        carregaImagemForca()

        if(tentativas == 0)
        { 
            abreModal("Frango!", "Esta precisando exercitar seu cérebro a palavra erá "  + palavraSecretaSorteada);
        }
    }
    else{
        for(i = 0; i < palavraSecretaSorteada.length; i++)
        {
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }
        
    if(vitoria == true)
        {
            abreModal("Deu bomba pro seu cérebro?", "Ta treinando aonde?");
            tentativas = 0;
        }
    
}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('./img/forca02.png')";
            break; 
        case 3:
            document.getElementById("imagem").style.background = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background = "url('./img/forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let btnReiniciar = document.querySelector("#btnReiniciar")
btnReiniciar.addEventListener("click", function(){
   location.reload(); 
});

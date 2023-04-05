document.addEventListener( "click" , showcolor );

document.getElementById("botao").addEventListener( "click", showname );

document.getElementById("botao-soma").addEventListener("click", shownumber);

function showcolor ()
{
    document.body.style.backgroundColor = "red";
}

function showname()
{
    let usuario = document.getElementById ("nome").value;
    document.getElementById("mensagem").innerHTML = "Meu nome é: " + usuario;
    document.getElementById("nome").value = ""
}

function shownumber()
{
    let numero = document.getElementById("numero").value;
    let numero2 = document.getElementById("numero2").value;
    let numero3 = parseFloat(numero) + parseFloat(numero2);
    document.getElementById("resultado").innerHTML = "Resultado: " + numero3;
}

document.getElementById("botao-div").addEventListener("click", showdiv);

function showdiv()
{
    let numerodiv = document.getElementById("numerodiv").value;
    let numerodiv2 = document.getElementById("numerodiv2").value;
    let numero3 = parseFloat(numerodiv) / parseFloat(numerodiv2);
    document.getElementById("resultadodiv").innerHTML = "Resultado: " + numero3;
}


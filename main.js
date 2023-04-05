document.addEventListener( "click" , showcolor );

document.getElementById("botao").addEventListener( "click", showname );

document.getElementById("botao2").addEventListener("click", shownumber);

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
    let result = document.getElementById("numero1");
    document.getElementById("resultado").innerHTML = "numero" + "numero2";
    document.getElementById("numero").value = "";
}


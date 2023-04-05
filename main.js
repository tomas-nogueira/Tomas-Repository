document.addEventListener( "click" , showcolor );

document.getElementById("botao").addEventListener( "click", showname );

function showcolor ()
{
    document.body.style.backgroundColor = "red";
}

function showname()
{
    let usario = document.getElementById ("nome").value;
    document.getElementById("mensagem").innerText = "Meu nome é" + usuario;
}

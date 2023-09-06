var nomeArmazenado = localStorage.getItem("nome");

var nomeParaColocar = document.getElementById("Colocar_Nome");
if (nomeArmazenado) 
{
    nomeParaColocar.innerHTML = "Seu nome é: " + nomeArmazenado;
} 
else 
{
    nomeParaColocar.innerHTML = "Nome não encontrado.";
}


        
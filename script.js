function pegarEColocarNome() {
    var nome = document.getElementById("Pegar_Nome").value;
    localStorage.setItem("nome", nome);
    window.location.href = "logado.html";
}

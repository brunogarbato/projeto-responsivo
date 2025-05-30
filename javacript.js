function chamarMenu () {
    let menu = document.getElementById("itens");
    let botao = document.getElementById("burguer");
    if (menu.style.display == "block") {
        menu.style.display = "none";
        botao.backgroundColor = "black"
        ;
    } else {
        menu.style.display = "block";
        botao.style.backgroundColor = "white";
    }

}

function chamarMenu () {
    let menu = document.getElementById("itens");
    if (menu.style.display == "block") {
        menu.style.display = "none";
        menu.backgroundColor = "white";
    } else {
        menu.style.display = "block";
        menu.backgroundColor = "black";
    }

    
}

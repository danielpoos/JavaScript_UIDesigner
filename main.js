document.addEventListener("DOMContentLoaded", init);
function init() {
    document.getElementById('minta').addEventListener("input", inputa);
    document.getElementById('pt').addEventListener("input", inputb);
    document.getElementById('color').addEventListener("input", inputc);
    document.getElementById('bgcolor').addEventListener("input", inputd);
    document.getElementById('submit').addEventListener("click", alap);
}

function inputa() {
    let minta = document.getElementById('minta').value;
    if (minta == null || minta == "" || minta == " " || minta == "  ") {
        document.getElementById('mintaerror').innerHTML = "Nem lehet üres a mező";
    }else{
    document.getElementById('preview').innerHTML = minta;
    document.getElementById('mintaerror').innerHTML = "";
}
}
function inputb() {
    let pt = document.getElementById('pt').value;
    document.getElementById('preview').style.fontSize = pt +"pt";
}
function inputc() {
    let color = document.getElementById('color').value;
    document.getElementById('preview').style.color = color;
}
function inputd() {
    let bgcolor = document.getElementById('bgcolor').value;
    document.getElementById('preview').style.backgroundColor = bgcolor;
}
function alap() {
    document.getElementById('preview').style.fontSize = "12pt";
    document.getElementById('preview').style.color = "#000000";
    document.getElementById('preview').style.backgroundColor = "#FFFFFF";
    document.getElementById('preview').innerHTML = "Árvíztűrő tükörfúrógép";
    document.getElementById('minta').value = "";
    document.getElementById('pt').value = 12;
    document.getElementById('color').value = "#000000";
    document.getElementById('bgcolor').value = "#FFFFFF";
}

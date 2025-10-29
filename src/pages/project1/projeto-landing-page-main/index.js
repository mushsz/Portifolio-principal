var setaDireita = window.document.getElementById("seta-direita")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    leonardo.style = "display:none"
    samantha.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top:55px"
}
function RolarParaEsquerda() {
    samantha.style ="display:none"
    leonardo.style = "display:flex"
    setaEsquerda.style = "display:none"
    setaDireita.style = "display:flex; margin-top:55px"
}
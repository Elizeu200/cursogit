function addBola(){
  var bola = document.createElement("div");
  bola.setAttribute("class", "bola");
  var p1 = Math.floor(Math.random() * 500);
  var p2 = Math.floor(Math.random() * 400);
  bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;");
  bola.setAttribute("onclick", "estourar(this)");
  var cores = cor.sort(randOrd)
  bola.style.backgroundColor = cores[0];

  document.body.appendChild(bola);
}

function estourar(elemento){
  document.body.removeChild(elemento);
}

function iniciar() {
  setInterval(addBola, 1000);
}

function randOrd() {
  return (Math.round(Math.random()) - 0.5);
}
var cor = Array();
cor[0] = "#F88383";
cor[1] = "#060606";
cor[2] = "#65FA61";
cor[3] = "#8A2BE2";
cor[4] = "#FAAA49";


setInterval(function () {
  var cor1 = Math.floor(Math.random() * 256) - 1
  var cor2 = Math.floor(Math.random() * 256) - 1
  var cor3 = Math.floor(Math.random() * 256) - 1
  document.body.setAttribute("style", "background-color: rgb("+cor1+","+cor2+","+cor3+");");
}, 2000);
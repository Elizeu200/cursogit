function addBola(){
  var bola = document.createElement("div");
  bola.setAttribute("class", "bola");
  var p1 = Math.floor(Math.random() * 500);
  var p2 = Math.floor(Math.random() * 400);
  var cor1 = Math.floor(Math.random() * 256) - 1
  var cor2 = Math.floor(Math.random() * 256) - 1
  var cor3 = Math.floor(Math.random() * 256) - 1
  bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;background-Color:rgb("+cor1+","+cor2+","+cor3+")");
  document.body.setAttribute("style", "background-color: rgb("+cor1+","+cor2+","+cor3+");");
  bola.setAttribute("onclick", "estourar(this)");

  document.body.appendChild(bola);
}

function estourar(elemento){
  document.body.removeChild(elemento);
}

function iniciar() {
  setInterval(addBola, 1000);
}





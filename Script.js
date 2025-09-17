const contadorElemento = document.getElementById("contador-numero");
const btnAumentar = document.getElementById("btn-aumentar");
const btnDiminuir = document.getElementById("btn-diminuir");

let contador = 0;

btnAumentar.addEventListener("click", function() {
  contador = contador + 1;
  contadorElemento.textContent = contador;
  console.log("O contador foi aumentado para: " + contador);
});

btnDiminuir.addEventListener("click", function() {
  contador = contador - 1;
  contadorElemento.textContent = contador;
  console.log("O contador foi diminuído para: " + contador);
});
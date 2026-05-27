const objetivo = document.getElementById("objetivo");
const pantalla = document.getElementById("pantalla");

const puntosTexto = document.getElementById("puntos");
const vidasTexto = document.getElementById("vidas");
const jugadorTexto = document.getElementById("jugador");

let jugador = prompt("Ingrese su nombre");

if(jugador == "" || jugador == null){
    jugador = "Jugador";
}

jugadorTexto.innerText = jugador;

let puntos = 0;
let vidas = 3;

let tamaño = 100;

function mover(){

    const x = Math.floor(Math.random() * (pantalla.offsetWidth - tamaño));

    const y = Math.floor(Math.random() * (pantalla.offsetHeight - tamaño));

    objetivo.style.left = x + "px";
    objetivo.style.top = y + "px";
}

const intervalo = setInterval(mover, 1000);

objetivo.addEventListener("click", function(evento){

    evento.stopPropagation();

    puntos++;

    puntosTexto.innerText = puntos;

    if(puntos >= 10){

        tamaño = 50;

        objetivo.style.width = "50px";
        objetivo.style.height = "50px";
    }

    mover();
});

pantalla.addEventListener("click", function(){

    vidas--;

    vidasTexto.innerText = vidas;

    pantalla.style.backgroundColor = "red";

    setTimeout(function(){

        pantalla.style.backgroundColor = "transparent";

    }, 200);

    if(vidas <= 0){

        clearInterval(intervalo);

        alert("GAME OVER " + jugador + 
        "\nPuntaje final: " + puntos);

        location.reload();
    }
});

mover();
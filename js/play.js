// var tree = document.getElementById("tree").textContent;

var consejos = [
    'Sin los arboles el CO2 no podria ser convertido en oxigeno, un arbol mas significa un filtro de CO2 mas',
    'Hay miles y miles de especies que tienen su habitat en los arboles. </br>Adopta un arbol, sera el hogar de diversos seres vivos',
    'Si no hay arboles aumenta la frontera de la desertificacion, la tierra puede volverse arida',
    'Los bosques ayudan a preservar la seguridad alimentaria, ya que reservan alimentos diversos para el futuro',
    'Las acciones individuales que ejecutamos en nuestra relacion con la naturaleza son clave, Se amigable con el planeta en el que vives',
    'La tala de arboles puede provocar inundaciones, ya que se retira la barrera natural',
    'La educacion ambiental podria cambiar el mundo, es nustra decision informarnos para ayudar'
];
var index = Math.floor((Math.random() * consejos.length));
var nivel = 1;

function action_coins() {
    var coins = parseInt(document.getElementById("coins").textContent);

    if (true) {
        coins += 10;
        document.getElementById("coins").textContent = coins.toString();
    }
    else {
        document.getElementById("titulo-emergente").innerHTML = "Alerta";
        document.getElementById("texto-emergente").innerHTML = "Error en la compra";
    }

}

// function action_fertilizer() {
//     var coins = parseInt(document.getElementById("coins").textContent);
//     var fertilizer = parseInt(document.getElementById("fertilizer").textContent);

//     if (coins >= 10) {
//         coins -= 10;
//         fertilizer += 1;
//         document.getElementById("coins").textContent = coins.toString();
//         document.getElementById("fertilizer").textContent = fertilizer.toString();
//     }
//     else {
//         alert("No tienes monedas suficientes");
//     }

// }

// function action_water() {
//     var coins = parseInt(document.getElementById("coins").textContent);
//     var water = parseInt(document.getElementById("water").textContent);

//     if (coins >= 2) {
//         coins -= 2;
//         water += 1;
//         document.getElementById("coins").textContent = coins.toString();
//         document.getElementById("water").textContent = water.toString();
//     }
//     else {
//         alert("No tienes monedas suficientes");
//     }
// }

function useFertilizante() {
    var fertilizer = parseInt(document.getElementById("fertilizer").textContent);
    var xp = parseInt(document.getElementById('xp').style.width);

    if (fertilizer > 0) {
        fertilizer -= 1;
        document.getElementById("fertilizer").textContent = fertilizer.toString();

        xp += 30 / nivel;

        $("#xp")
            .css("width", xp + "%")
            .attr("aria-valuenow", xp);
        if (xp > 100) {
            xp = 0;
            $("#xp")
                .css("width", xp + "%")
                .attr("aria-valuenow", xp);
            $('.animated').toggleClass('tada');
            ++nivel;
            document.getElementById("show-nivel").innerHTML = nivel;
            document.getElementById("titulo-emergente").innerHTML = "NIVEL " + nivel;
            document.getElementById("texto-emergente").innerHTML = "Haz subido de nivel</br>Sigue jugando y ayudanos a cuidar el medio ambiente";
        }
        else {
            $('.animated').toggleClass('rubberBand');
            document.getElementById("titulo-emergente").innerHTML = "Consejo 🌳🎮";
            document.getElementById("texto-emergente").innerHTML = consejos[index];
        }
    }
    else {
        return alert("Abonos Insuficientes");
    }

}
d
function useAgua() {
    var water = parseInt(document.getElementById("water").textContent);
    var xp = parseInt(document.getElementById('xp').style.width);

    if (water > 0) {
        water -= 1;
        document.getElementById("water").textContent = water.toString();

        xp += 15 / nivel;

        $("#xp")
            .css("width", xp + "%")
            .attr("aria-valuenow", xp);
        if (xp > 100) {
            xp = 0;
            $("#xp")
                .css("width", xp + "%")
                .attr("aria-valuenow", xp);
            $('.animated').toggleClass('tada');
            ++nivel;
            document.getElementById("show-nivel").innerHTML = nivel;
            document.getElementById("titulo-emergente").innerHTML = "NIVEL " + nivel;
            document.getElementById("texto-emergente").innerHTML = "Haz subido de nivel</br>Sigue jugando y ayudanos a cuidar el medio ambiente";
        }
        else {
            $('.animated').toggleClass('rubberBand');
            document.getElementById("titulo-emergente").innerHTML = "Consejo 🌳🎮";
            document.getElementById("texto-emergente").innerHTML = consejos[index];
        }
    }
    else {
        return alert("Agua Insuficientes");
    }
}


function click_arbol() {


    $('.animated').toggleClass('rubberBand');
    document.getElementById("titulo-emergente").innerHTML = "Consejo 🌳🎮";
    document.getElementById("texto-emergente").innerHTML = consejos[index];
}
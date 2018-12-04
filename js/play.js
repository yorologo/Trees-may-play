// var tree = document.getElementById("tree").textContent;

function action_coins() {
    var coins = parseInt(document.getElementById("coins").textContent);

    if (true) {
        coins += 10;
        document.getElementById("coins").textContent = coins.toString();
    }
    else {
        alert("Error en la compra");
    }

}

function action_fertilizer() {
    var coins = parseInt(document.getElementById("coins").textContent);
    var fertilizer = parseInt(document.getElementById("fertilizer").textContent);

    if (coins > 0) {
        coins -= 2;
        fertilizer += 1;
        document.getElementById("coins").textContent = coins.toString();
        document.getElementById("fertilizer").textContent = fertilizer.toString();
    }
    else {
        alert("No tienes monedas suficientes");
    }

}

function action_water() {
}

function click_arbol() {
    var fertilizer = parseInt(document.getElementById("fertilizer").textContent);
    var xp = parseInt(document.getElementById('xp').style.width);

    if (fertilizer > 0) {
        fertilizer -= 1;
        document.getElementById("fertilizer").textContent = fertilizer.toString();
        xp += 10;
        $("#xp")
            .css("width", xp + "%")
            .attr("aria-valuenow", xp);
        if (xp > 100) {
            xp = 0;
            $("#xp")
                .css("width", xp + "%")
                .attr("aria-valuenow", xp);
        }
    }
    else {
        alert("Abono insuficioente");
    }
}
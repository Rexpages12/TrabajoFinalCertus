

function calcularMC() {
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    if (nombre == "" || apellidos == "" || isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Debes colocar lo que se te pide correctamente.");
        return;
    }

    let MC = peso / (altura * altura);
    document.getElementById("MC").textContent = `Su estado de masa corporal Sr. ${nombre} ${apellidos} es de ${MC.toFixed(2)}`;
    Texto(MC)
}

function volveintentar() {
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    if (nombre =="" && apellidos =="" && peso == 0 && altura ==0){
        alert("Debes colocar los datos indicados antes de ejecutar")
    }
    document.getElementById("nombre").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";

    document.getElementById("MC").textContent = "";
    document.getElementById("texto_final").textContent = "";
}

function Texto(MC) {
    let textofinal = document.getElementById("texto_final");
    if (MC < 18.5) {
        textofinal.textContent = "Su estado actual es: Peso bajo";
    } else if (MC >= 18.5 && MC <= 24.9) {
        textofinal.textContent = "Su estado actual es: Peso Normal";

    } else if (MC >= 25 && MC <= 29.9) {
        textofinal.textContent = "Su estado actual es: Sobrepeso";

    } else if (MC >= 30 && MC <= 34.9) {
        textofinal.textContent = "Su estado actual es: Obesidad leve";

    } else if (MC >= 35 && MC <= 39.9) {
        textofinal.textContent = "Su estado actual es: Obesidad media";

    } else if (MC >= 40) {
        textofinal.textContent = "Su estado actual es: Obesidad Morbida";

    }
}

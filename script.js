let resultCalend = document.getElementById("resultadoCal");

function calendarioLaboral() {
    let dia = document.getElementById("inputDia").value;
    let mes = document.getElementById("inputMes").value;
    let anio = document.getElementById("inputAnio").value;
    let fecha = new Date(anio, mes - 1, dia);
    console.log("Variable fecha: " + fecha);
    let diaLaboral = fecha.getDay();
    console.log("Variable diaLaboral: " + diaLaboral);

    switch (diaLaboral) {
        case 0:
            resultCalend.innerHTML="Domingo, día no laboral";
            break;
        case 1:
            resultCalend.innerHTML="Lunes, día laboral";
            break;
        case 2:
            resultCalend.innerHTML="Martes, día laboral";
            break;
        case 3:
            resultCalend.innerHTML="Miércoles, día laboral";
            break;
        case 4:
            resultCalend.innerHTML="Jueves, día laboral";
            break;
        case 5:
            resultCalend.innerHTML="Viernes, día laboral";
            break;
        case 6:
            resultCalend.innerHTML="Sábado, día no laboral";
            break;
    }
}
let resultCalend = document.getElementById("resultadoCal");

function calendarioLaboral() {
    let dia = Number(document.getElementById("inputDia").value);
    let mes = Number(document.getElementById("inputMes").value);
    let sAnio = document.getElementById("inputAnio").value;
    let anio = Number(sAnio);

    if (dia == false || mes == false || anio == false) {
        resultCalend.innerHTML = "Es necesario completar todos los campos";
    } else {
        if (sAnio.length != 4) {
            resultCalend.innerHTML = "Ingresar el año con 4 digitos";
        } else {
            let fecha = new Date(anio, mes - 1, dia);
            let diaLaboral = fecha.getDay();

            switch (diaLaboral) {
                case 0:
                    resultCalend.innerHTML = "Domingo, día no laboral";
                    break;
                case 1:
                    resultCalend.innerHTML = "Lunes, día laboral";
                    break;
                case 2:
                    resultCalend.innerHTML = "Martes, día laboral";
                    break;
                case 3:
                    resultCalend.innerHTML = "Miércoles, día laboral";
                    break;
                case 4:
                    resultCalend.innerHTML = "Jueves, día laboral";
                    break;
                case 5:
                    resultCalend.innerHTML = "Viernes, día laboral";
                    break;
                case 6:
                    resultCalend.innerHTML = "Sábado, día no laboral";
                    break;
            }
        }
    }
}
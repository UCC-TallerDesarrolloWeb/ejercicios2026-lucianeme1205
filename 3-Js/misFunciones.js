/**
 * Conversion de unidades de metros, pies, yardas y pulgadas
 * 
 * @method convertirUnidades
 * @param {string} id . id del elemento input del html
 *@param {number} valor .Valor ingresado por el usuario
  
 */
function convertirUnidades(id, Valor){
    if(isNaN(Valor)){

        alert("Se ingreso un valor incorrecto:" +id)
        document.getElementById("metro").value = "";
        document.getElementById("pie").value = "";
        document.getElementById("pulgada").value = "";
    }else if(id == "metro"){
        document.getElementById("pulgada").value = Valor * 39.09361;
        document.getElementById("pie").value = Valor * 3.28084;
        document.getElementById("yarda").value = Valor * 1.09361;
    }else if (id === "pulgada") {
        document.getElementById("metro").value = (num / 39.3701).toFixed(4);
        document.getElementById("pie").value = (num / 12).toFixed(4);
        document.getElementById("yarda").value = (num / 36).toFixed(4);

    } else if (id === "pie") {
        document.getElementById("metro").value = (num / 3.28084).toFixed(4);
        document.getElementById("pulgada").value = (num * 12).toFixed(4);
        document.getElementById("yarda").value = (num / 3).toFixed(4);

    } else if (id === "yarda") {
        document.getElementById("metro").value = (num / 1.09361).toFixed(4);
        document.getElementById("pulgada").value = (num * 36).toFixed(4);
        document.getElementById("pie").value = (num * 3).toFixed(4);
    }

}
/**
 * Conversion de unidades de grados a radianes
 * @method convertirGR
 * @param {string} id . id del elemento input del html

 */

function convertirGR(id){
    let grad, rad;

    if(id=="grados"){
        grad = document.getElementById("grados").value;
        rad = grad*Math.PI/180;
    }else{
        rad = document.getElementById("radianes").value;
        grad = rad*180/Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}
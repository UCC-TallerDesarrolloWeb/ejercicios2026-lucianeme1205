/**
 * Conversion de unidades de metros, pies, yardas y pulgadas
 * 
 * @method convertirUnidades
 * @param {string} id . id del elemento input del html
 *@param {number} valor .Valor ingresado por el usuario
  
 */
convertirUnidades = (id, Valor) => {
    let metros, pulgadas, pie, yardas;
    if(isNaN(Valor)){

        alert("Se ingreso un valor incorrecto:" +id)
        metros = "";
        pulgadas = "";
        pie = "";
        yardas = "";

    }else if(id == "metro"){
        metros = valor;
        pulgadas = Valor * 39.09361;
        pie = Valor * 3.28084;
        yardas= Valor * 1.09361;
    }else if (id == "pulgada") {
    pulgadas = Valor;
    metros = Valor / 39.3701;
    pie = Valor / 12;
    yardas = Valor / 36;
} else if (id == "pie") {
    pie = Valor;
    metros = Valor / 3.28084;
    pulgadas = Valor * 12;
    yardas = Valor / 3;
} else if (id == "yarda") {
    yardas = Valor;
    metros = Valor / 1.09361;
    pulgadas = Valor * 36;
    pie = Valor * 3;
}
    document.getElementById("metro").value = metros;
    document.getElementById("pulgada").value = pulgadas;
    document.getElementById("pie").value = pie;
    document.getElementById("yarda").value = yardas;
    


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

/**
 * mostrar u ocultat div
 * @method mostrarOcultar
 * @param {string} valor . Valor del id del radio buttom seleccionado;

 */

mostrarOcultar = (valor) => {
    const displayDiv = valor=="val_mostrar" ? 'block' : 'none';
    document.getElementById("unDiv").style.display = displayDiv;
}
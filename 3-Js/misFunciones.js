/**
 * Conversion de unidades de metros, pies, yardas y pulgadas
 * 
 * @method convertirUnidades
 * @param {string} id . id del elemento input del html
 *@param {number} valor .Valor ingresado por el usuario
  
 */
convertirUnidades = (id, Valor) => {
    let metros, pulgadas, pie, yardas;

    Valor = Valor.repleace(",","." );
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
    document.getElementById("metro").value = Math.round(metros*100)/100;
    document.getElementById("pulgada").value = Math.round(pulgadas*100)/100;
    document.getElementById("pie").value = Math.round(pie*100)/100;
    document.getElementById("yarda").value = yardas.toFixed(2);
    


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

/**
 * Realiza la suma de dos números ingresados en el HTML y muestra el resultado.
 * 
 * @method calcularSuma
 */
function calcularSuma(){
    let sum1, sum2;
    sum1 = document.getElementById("nums1").value;
    sum2 = document.getElementById("nums2").value;
    document.getElementById("totalS").innerText= Number(sum1) + Number(sum2);
}

/**
 * Realiza la resta de dos números ingresados en el HTML y muestra el resultado.
 * 
 * @method calcularResta
 */
function calcularResta(){
    let rest1, rest2;
    rest1 = document.getElementById("numr1").value;
    rest2 = document.getElementById("numr2").value;
    document.getElementById("totalR").innerText= Number(rest1) - Number(rest2);

}

/**
 * Realiza la multiplicación de dos números ingresados en el HTML y muestra el resultado.
 * 
 * @method calcularMultiplicacion
 */
function calcularMultiplicacion(){
    let mult1, mult2;
    mult1 = document.getElementById("numm1").value;
    mult2 = document.getElementById("numm2").value;
    document.getElementById("totalM").innerText= Number(mult1) *  Number(mult2);

}

/**
 * Realiza la división de dos números ingresados en el HTML y muestra el resultado.
 * Valida que el divisor no sea igual a cero para evitar resultados infinitos.
 * 
 * @method calcularDivision
 */
function calcularDivision() {
    let div1, div2;
    div1 = document.getElementById("numd1").value;
    div2 = document.getElementById("numd2").value;

    if (Number(div2) === 0) {
        document.getElementById("totalD").innerText = "No se puede dividir por 0";
    } else {
        document.getElementById("totalD").innerText = Number(div1) / Number(div2);
    }
}
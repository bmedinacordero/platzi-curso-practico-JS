//Código del cuadrado

console.group("Cuadrados");


function perimetroCuadrado(lado){
return lado * 4;
} 


function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();


//Código del triángulo

console.group("triangulos");


function perimetroTriangulo(lado1, lado2, base){
    return (lado1 + lado2 + base);
}

function areaTriangulo (base, altura){
    return (base * altura) / 2;
}

function alturaTriangulo(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {

        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;

}

console.groupEnd();


//Código del círculo

console.group("Círculos");

// --Diametro
function diametroCirculo(radio) {
    return radio * 2;
    
}

// --Pi
const PI = Math.PI;
console.log("PI es: " + PI);


// --Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


// --Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();


//Aqui interactuamos con el HTML

// CUADRADO

function calcularPerimetroCuadrado() {
    const input = document.getElementById("input-cuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value)
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("input-cuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value)
    alert(area);
}

// TRIANGULO

function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("input-triangulo-lado1");
    const inputLado2 = document.getElementById("input-triangulo-lado2");
    const inputBase = document.getElementById("input-triangulo-base");

    const valueLado1 = parseInt (inputLado1.value);
    const valueLado2 = parseInt (inputLado2.value);
    const valueBase = parseInt (inputBase.value);

    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input = document.getElementById("input-triangulo");
    const value = input.value;
    
    const area = areaTriangulo(value)
    alert(area);
}

function calcularAlturaTriangulo() {
    const inputLado1 = document.getElementById("input-triangulo-lado1");
    const inputLado2 = document.getElementById("input-triangulo-lado2");
    const inputBase = document.getElementById("input-triangulo-base");

    const valueLado1 = parseInt (inputLado1.value);
    const valueLado2 = parseInt (inputLado2.value);
    const valueBase = parseInt (inputBase.value);

    const altura = alturaTriangulo(valueLado1, valueLado2, valueBase);

    if (valueLado1 == valueLado2) {
    alert(altura);
    }
    else{
        alert("La altura que intentas calcular no es de un triangulo isosceles");
    }
}


// CIRCULO

function calcularPerimetroCirculo() {
    const inputRadio = document.getElementById("input-circulo-radio");

    const valueRadio = parseInt (inputRadio.value);

    const perimetro = perimetroCirculo(valueRadio);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const inputRadio = document.getElementById("input-circulo-radio");

    const valueRadio = parseInt(inputRadio.value);

    const area = areaCirculo(valueRadio);
    alert(area);    
}
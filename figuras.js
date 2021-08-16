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



function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
// console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo (base, altura){
    return (base * altura) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo + "cm^2");


console.groupEnd();


//Código del círculo

console.group("Círculos");

// --Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");


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
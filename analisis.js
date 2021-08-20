// Helpers

function esPar(numero) {
    return (numero % 2 == 0);
}

function calcularPromedio(lista) {

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// Calculadora de mediana

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularPromedio([personaMitad1,personaMitad2])
        return mediana;
        
    } else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}


//Mediana General

const salariosVE = venezuela.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosSortedVE = salariosVE.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralVE = medianaSalarios(salariosSortedVE)

//Mediana del top 10%
const spliceStart = (salariosSortedVE.length * 90) / 100;
const splicesCount = salariosSortedVE.length - spliceStart;


const salariosTop10VE = salariosSortedVE.splice(
    spliceStart,
    splicesCount,
);

const medianaTop10VE = medianaSalarios(salariosTop10VE);



//CONSOLE.LOG

console.log({
    medianaGeneralVE,
    medianaTop10VE
}
);
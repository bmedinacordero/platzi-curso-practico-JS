// const precioOriginal = 120;
// const descuento = 18;


function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescento;
        
}



// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescento
// });
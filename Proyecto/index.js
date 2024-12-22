//variable global para almacenar los productos seleccionados

let carrito = [];

const agregarAlCarrito = (nombre,precio) => {
    //agregar el producto como un objeto al carrito
    carrito.push({nombre,precio})

    //actualizar el contador visual del carrito
    actualizarcontador ()

    //muestra una alerta de confirmacion
    alert(`Agregaste : ${nombre} al carrito`)
}


//funcion para actualizar el contador del carrito
const actualizarcontador = ()=>{
    //cambiamos el contenido del HTML con el ID contador-carrito
    document.getElementById("contador-carrito").textContent = carrito.length

}

//guarda el contenido del carrito en el almacenamiento local antes de cerrar la pagina
window.addEventListener("beforeunload",()=>{
    localStorage.setItem("carrito",JSON.stringify(carrito))
});
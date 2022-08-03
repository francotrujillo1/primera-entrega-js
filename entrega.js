const productos = [
    { nombre: "harina", precio: 80 },
    { nombre: "galletitas", precio: 200 },
    { nombre: "vino", precio: 350 },
    { nombre: "leche", precio: 150 },
    { nombre: "gaseosa", precio: 180 },
];
let carrito = []

let seleccion = prompt("hola desea comprar algun producto si o no")

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingresa si o no")
    seleccion=prompt("hola desa comprar algo si o no")
}

if(seleccion == "si"){
    alert("a continuación nuestra lista de productos")
    let todoslosProductos = productos.map(
       (producto) => producto.nombre + " " + producto.precio + "$"
    );
    alert(todoslosProductos.join(" - "))
}else if (seleccion == "no"){
    alert("gracias por venir, hasta pronto!!")
}

while(seleccion != "no"){
    let producto = prompt("agrega un producto a tu carrito")
    let precio = 0
    if(producto == "harina" || producto == "galletitas" || producto == "vino" || producto == "leche" || producto == "gaseosa"){
        switch(producto){
            case"harina":
              precio = 80;
              break;
            case"galletitas":
              precio = 200;
              break;
            case"vino":
              precio = 350;
              break;
            case"leche":
              precio = 150;
              break;
            case"gaseosa":
              precio = 180;
              break;
            default:
              break;
        }
     let unidades = parseInt(prompt("cuantas unidades quiere llevar"))
     
     carrito.push({producto, unidades, precio})
     console.log(carrito)
    }else{
        alert("no tenemos ese producto")
    }

    seleccion = prompt("desa seguir comprando?")

    while(seleccion ==="no"){
        alert("gracias por su compra! hasta pronto")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto
            ${carritoFinal.unidades * carritoFinal.precio}`)
        }) 
    break;    
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagar por su compra es: ${total}`)
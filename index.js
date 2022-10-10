//Creo todas las constantes  para llamarlas con los getElementById
const div = document.getElementById("cards")
const boton = document.getElementById("boton")
const inputAfter = document.getElementById("inputAfter")
const botonInput = document.getElementById("botonInput")
const botonVaciar = document.getElementById("botonVaciar")
const listaProductosComprados = document.getElementById("listaProductosComprados")
//Creo un array con los productos, tengo que actualizarlos para poder ofrecer de a 30 y 50 lts,
//porque yo alquilo los barriles asi y encima ponerles distinto precio porque el de 50 vale menos por llevar en cantidad, eso es una de las dudas que tengo a solucionar.
const canillas = [
       
    {
    id:1,
    nombre: "Honey",
    precio: 600,
    imagen : "https://scontent.fepa5-1.fna.fbcdn.net/v/t1.6435-9/39880697_495043594303541_7067031410376179712_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=P7NULI4aIvgAX9LkhpV&tn=wuczSacM8zkCgrWK&_nc_ht=scontent.fepa5-1.fna&oh=00_AT-odzcT0dGptrLaGBQ5g5B5CuDIJ56yyOMmt-w7T9WguQ&oe=635E3929"
    },
    {
    id:2,
    nombre: "Ipa",
    precio: 670,
    imagen :  "https://scontent.fepa5-1.fna.fbcdn.net/v/t1.6435-9/35744157_434690017005566_8094010382076608512_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9267fe&_nc_ohc=OxJTJ_InOWQAX_jf0N5&_nc_ht=scontent.fepa5-1.fna&oh=00_AT_k4SkVZ3ECt_hSVaPZ1ydWbBsnzfliZJZxGOwYECayug&oe=635E74A0"
    },
    {
    id:3,
    nombre: "Apa",
    precio: 650,
    imagen : "https://scontent.fepa5-1.fna.fbcdn.net/v/t1.6435-9/57909072_624065161401383_2102546019362275328_n.jpg?stp=dst-jpg_s370x247&_nc_cat=102&ccb=1-7&_nc_sid=cad550&_nc_ohc=rX1XLQKYTy8AX8-uIyR&_nc_ht=scontent.fepa5-1.fna&oh=00_AT-PZVEK__vYWKWeYC8fF2b86VA5rLldUQIw55YDTl2J3w&oe=635D70A5"
    },
    {
    id:4,
    nombre: "Stout",
    precio: 620,
    imagen : "https://scontent.fepa5-1.fna.fbcdn.net/v/t1.6435-9/36667488_448610242280210_3270373053351067648_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=iU-b9n31-eEAX93d6dc&tn=wuczSacM8zkCgrWK&_nc_ht=scontent.fepa5-1.fna&oh=00_AT9f0_MN53aLNtLOURLh2rwfv7mAlTTrhKT0rbmSEP47QA&oe=636011A9"
    },
    {
    id:5,
    nombre: "Scotish",
    precio: 600,
    imagen : "https://scontent.fepa5-1.fna.fbcdn.net/v/t1.6435-9/49260461_565077977300102_968809210248691712_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9267fe&_nc_ohc=VcjQQMQd7ZEAX9MwhBM&_nc_ht=scontent.fepa5-1.fna&oh=00_AT8hwN4sJdazseku890DgvPwBPR0AqBbgszP90o7I9LALA&oe=635E945D"
    },
    {
    id:6,
    nombre: "Golden",
    precio: 550,
    imagen : "https://scontent.fepa5-1.fna.fbcdn.net/v/t1.6435-9/40038801_497835820690985_4869265463550410752_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=LcZPyJkCm-MAX8wovp0&_nc_ht=scontent.fepa5-1.fna&oh=00_AT-jU_OLUdivDitUDGHVLtjA05EYb0jl6u-1ebz6LIAuUw&oe=635DE51B"
    }
];

//Carrito vacio para pushear compras realizadas con el boton comprar
let carrito = []

//renderizador con forEachm creo que se puede hacer mas lindo agregandole cosas pero no se casi nada de css
canillas.forEach(canillas => {
    let productoRenderizado = document.createElement("div")
    productoRenderizado.innerHTML = `
        <div class="card" style="width: 18rem;">
        <div class="text-center">
        <img src="${canillas.imagen}" class="rounded" alt="">
        </div>
        <div class="card-body">
            <h5 class="nombre">${canillas.nombre}</h5>
            <p class= "precio">Precio: $${canillas.precio}</p>
        </div>
                <button id="${canillas.id}" class="comprar">Comprar</button>
        </div>
    `
    div.append(productoRenderizado)
 //Llamo al elemento por su id y le doy un evento a realizar
    const boton = document.getElementById(canillas.id)
    boton.addEventListener("click", () => comprar(canillas))
})
//Aca con un arrow function establecemos que el productoComprado sea el item seleccionado y que segun la eleccion con el if y el else que vea de sumar 
const comprar = (canillas) => {
    let productoComprado = carrito.find(item => item.id === canillas.id)
    if(productoComprado === undefined){
        carrito.push({
//Doy uso al Spread para abreviar y resumir codigo
            ...canillas,
            cantidad: 1
    })
    }else{
    productoComprado.precio = productoComprado.precio + canillas.precio
    productoComprado.cantidad = productoComprado.cantidad +1

    }
}

//Creo un buscador de canillas con un arrow function
const buscadorCanillas = (input) => {
    console.log(input)
    let buscadorCanillas = canillas.find(canillas => canillas.nombre.includes(input))
    console.log(buscadorCanillas);
    inputAfter.value = ``
}
//Con addEventListener logramos que el click guarde en el storage la eleccion del carrito y lo traemos con el JSON.stringify 
listaProductosComprados.addEventListener("click",() => localStorage.setItem("carrito" , JSON.stringify(carrito)));
//Con este evento le damos funcion al buscador de canillas ya creado
botonInput.addEventListener("click",() => buscadorCanillas(inputAfter.value));
//Con este boton vaciamos el carrito
botonVaciar.addEventListener("click",() => carrito = [])
    contenedor.innerHTML = "";
    carrito.length === 0 && alert("Borraste el contenido del carrito");

    localStorage.clear();

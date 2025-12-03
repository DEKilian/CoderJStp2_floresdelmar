const flores = [

    {
        id : 1,
        nombre: "rosa",
        precio: 1200
    },

    { 
        id: 2,
        nombre: "tulipan",
        precio: 1500
    },

    {
        id: 3,
        nombre: "fresia",
        precio: 800
    },

    {   
        id:4,
        nombre: "margarita",
        precio: 1100
    },

    {   
        id: 5,
        nombre: "clavel",
        precio: 1000
    }
];

const cupones = [

    {
        id: 1,
        cupon: "brisa",
        descuento: 5
    },

    {
        id: 1,
        cupon: "florero",
        descuento: 10
    },
    
    {
        id: 1,
        cupon: "oculto",
        descuento: 25
    }
];

const mediadocena = (num1) => num1 * 6;
const unadocena = (num1) => num1 * 12;
const descuento = (num1, num2) => num1 - ((num1 * num2) / 100); 
 
let total = 0;
let subtotal= 0;

// continuar = true;
// let saludo = confirm ("Bienvenido/a a Flores del Mar. Donde decir te amo nunca fue tan facil")
// do {
//     let eleccion = prompt ("Por favor, seleccione la opcion deseada: \n1)Media docena \n2)Una Docena \n3)Agregar Cupon de Descuento \n4)Ver total y salir ")

//     switch (eleccion) {

//         case "1":

//         let media = prompt ("Por favor, seleccione las flores de su ramo: \n1)Rosas $1200 \n2)Tulipanes $1500 \n3)Fresias $800 \n4)Margaritas $1100 \n5)Claveles $1000");
//         switch (media) {
//                 case "1":
//                 subtotal = mediadocena (flores[0].precio)
//                 total+= subtotal;
//                 console.log ("El precio de su ramo de media docena de Rosas es de $"+subtotal)
//                 break;

//                 case "2":
//                 subtotal = mediadocena (flores[1].precio)
//                 total+= subtotal;
//                 console.log ("El precio de su ramo de media docena de Tulipanes es de $"+subtotal)
//                 break;

//                 case "3":
//                 subtotal = mediadocena (flores[2].precio)
//                 total+= subtotal;
//                 console.log ("El precio de su ramo de media docena de Fresias es de $"+subtotal)
//                 break;

//                 case "4":
//                 subtotal = mediadocena (flores[3].precio)
//                 total+= subtotal;
//                 console.log ("El precio de su ramo de media docena de Margaritas es de $"+subtotal)
//                 break;

//                 case "5":
//                 subtotal = mediadocena (flores[4].precio)
//                 total+= subtotal;
//                 console.log ("El precio de su ramo de media docena de Claveles es de $"+subtotal)
//                 break;

//                 default:
//                 alert ("No es una opcion valida")
//                 break;
//                 }
//                 break;


//         case "2":

//         let docena = prompt ("Por favor, seleccione las flores de su ramo: \n1)Rosas $1200 \n2)Tulipanes $1500 \n3)Fresias $800 \n4)Margaritas $1100 \n5)Claveles $1000");
//         switch (docena) {
//                 case "1":
//                 subtotal = unadocena (flores[0].precio)
//                 total+= subtotal;
//                 console.log ("El precio de su ramo de una docena de Rosas es de $"+subtotal)
//                 break;

//                 case "2":
//                 subtotal = unadocena (flores[1].precio)
//                 total+= subtotal;
//                 console.log ("El precio de su ramo de una docena de Tulipanes es de $"+subtotal)
//                 break;

//                 case "3":
//                 subtotal = unadocena (flores[2].precio)
//                 total+= subtotal;
//                 console.log ("El precio de su ramo de una docena de Fresias es de $"+subtotal)
//                 break;

//                 case "4":
//                 subtotal = unadocena (flores[3].precio)
//                 total+= subtotal;
//                 console.log ("El precio de su ramo de una docena de Margaritas es de $"+subtotal)
//                 break;

//                 case "5":
//                 subtotal = unadocena (flores[4].precio)
//                 total+= subtotal;
//                 console.log ("El precio de su ramo de una docena de Claveles es de $"+subtotal)
//                 break;

//                 default:
//                 alert ("No es una opcion valida")
//                 break;
//         }
//         break;

//         case "3":
//             if (total <= 6000)
//             {
//                 alert ("Para poder agregar un descuento en su carrito debera gastar mas de $6000")
//                 break;
//             }
//             else {
//             let cupon = prompt ("Su total hasta el momento es de $"+total+"\nSi posee un cupon promocional de descuento, por favor, ingreselo aqui: ")
//             if (cupon.toLowerCase()=="brisa")
//             {
//                 total = descuento (total, cupones[0].descuento)
//                 alert ("Se ha aplicado un descuento del "+ cupones[0].descuento+"%.\nSu nuevo total es de $"+total )
//                 break;
//             }
//             else if (cupon.toLowerCase()=="florero")
//             {
//                 total = descuento (total, cupones[1].descuento)
//                 alert ("Se ha aplicado un descuento del "+ cupones[1].descuento+"%.\nSu nuevo total es de $"+total )
//                 break;
//             }
//             else if (cupon.toLowerCase()=="oculto")
//             {
//                 total = descuento (total, cupones[2].descuento)
//                 alert ("Se ha aplicado un descuento del "+ cupones[2].descuento+"%.\nSu nuevo total es de $"+total )
//                 break;
//             }
//             else{
//                 alert ("No es un cupon valido")
//                 break;
//             }
//             }
//             break;

//         case "4":
//             console.log("Muchas gracias por habernos visitado. Su total fue de $" + total);
//             continuar = false;
//             break;

//         default:
//             alert ("No es una opcion valida!")
//     }

// }
// while (continuar);

const app = document.getElementById("app");

const titulo = document.createElement("h1");
titulo.textContent = "Flores del Mar";
app.appendChild(titulo);

const subtituloFlores = document.createElement("h2");
subtituloFlores.textContent = "Por favor, complete los pasos en orden para poder generar su orden:";
app.appendChild(subtituloFlores);

const subtituloCompra = document.createElement("h3");
subtituloCompra.textContent = "1)Seleccione la flor que desea para su ramo:";
app.appendChild(subtituloCompra);

const contenedorFlores = document.createElement("div");
app.appendChild(contenedorFlores);
flores.forEach(flor => {
    const botonSeleccionador = document.createElement("button");
    botonSeleccionador.textContent = `${flor.nombre} ($${flor.precio} x unidad)`;

    botonSeleccionador.addEventListener("click", () => {
        florSeleccionada = flor;
        mostrarMensaje(`${flor.nombre}`);
    });

    contenedorFlores.appendChild(botonSeleccionador);
});


const subtituloRamo = document.createElement("h3");
subtituloRamo.textContent = "2)Indique que ramo desea armar:";
app.appendChild(subtituloRamo);

const btnMedia = document.createElement("button");
btnMedia.textContent = "Media docena (6) ";

const btnDocena = document.createElement("button");
btnDocena.textContent = "Docena (12) ";

app.appendChild(btnMedia);
app.appendChild(btnDocena);
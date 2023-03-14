/* setTimeout(() =>{
    console.log("hola como va ?")

    var autor ="carlitos"
    console.log(autor)
    
   
   let unTexto = "con enconrdado"
    if (unTexto=="con enconrdado"){
        console.log("la raqueta incluye encordado")
    
    }else{
        console.log("no incluye encordado")
    }
    
    //let entrada = prompt ("ingresar nombre")
    //if( entrada == ""){
       //alert("el usuario ingreso"+ entrada)
        //entrada = prompt ("ingresar apellido")
        //console.log (typeof entrada)
   // }


    //for (let i = 1; i <=5; i++){
    //let ingresarNombre = prompt("Ingresar tu Nombre para conocer nuestras sucursales")
       //alert("turno n° "+i+" Nombre:" +ingresarNombre)
    //}
    
},200)


function raqueta() {
  console.log("¿Que raqueta te gustaria llevarte hoy?");
}

raqueta(); 
raqueta();
raqueta();



let resultado = 0
function dividir(primerNumero, segundoNumero) {
    resultado = primerNumero / segundoNumero;
}
dividir(10,5);

console.log(resultado);





function raqueta(id,nombre, tamañoAro, precio) {
  this.id = id;
  this.nombre = nombre;
  this.tamañoAro = tamañoAro;  
  this.precio = precio;
}
const raqueta1 = new raqueta("1"," raqueta Blade", 98, "$30000 ");
const raqueta2 = new raqueta("2","raqueta Burn", 100, "$30000" );
const raqueta3 = new raqueta("3","raqueta Clash", 100, "$30000")
const raqueta4 = new raqueta ("4","raqueta Pure Aero", 98, "$35000")
const raqueta5 = new raqueta ("5","raqueta Pure Drive", 98, "$35000")
const raqueta6 = new raqueta ("6","raqueta Pure Aero", 98, "$35000")
const raqueta7 = new raqueta ("7","raqueta Pure Strike", 98, "$35000")

const producto=[raqueta1,raqueta2,raqueta3,raqueta4,raqueta5,raqueta6,raqueta7]


console.log(raqueta1.nombre)
console.log(raqueta1.tamañoAro)
console.log(raqueta2.nombre)
console.log(raqueta2.tamañoAro)

const raquetas = [
  {nombre: ' raqueta Blade', precio: 35000},
  {nombre: ' raqueta Burn', precio: 37000},
  {nombre: 'raqueta Clash', precio: 38000},
  {nombre: 'raqueta Pure Aero', precio: 40000},
  {nombre: 'raqueta Pure Drive ', precio: 40000},
  {nombre: 'raqueta Pure Aero', precio: 40000},
  {nombre: 'raqueta Pure Strike', precio: 40000},
]

const nombres = raquetas.map((el) => el.nombre)
console.log(nombres)
const precio = raquetas.map((el) => el.precio)
console.log(precio)

const sumaNumeros = raquetas.find((el) => el.nombre === "Blade")
const sumaNumeros2 = raquetas.find((el) => el.nombre === "Burn")
console.log(sumaNumeros2)
console.log(sumaNumeros)

const numeros = [1, 2, 3, 4, 5, 6]
const total = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)

console.log(total) 




function buscarProducto(buscado,array){
  let busquedaArray = array.filter(
    (raqueta) => raqueta.nombre.toLowerCase().includes(buscado)
  )
  console.log(busquedaArray)
}


let busqueda= document.getElementById("buscador")
buscador.addEventListener("input", ()=>{
  console.log(buscador.value)
 buscarProducto(buscador.value, producto)
})



localStorage.setItem("misRaquetas",JSON.stringify(producto))

let getRaquetas=JSON.parse(localStorage.getItem("misRaquetas")) */




const añadirAlCarritoButtons = document.querySelectorAll('.añadirAlCarrito');
añadirAlCarritoButtons.forEach(button => {
  button.addEventListener('click', añadirAlCarrito);
});

let productos = [];
let trueOrFalse = false;
const elements = document.querySelector('#elements');

// Función 
function añadirAlCarrito(e) {
  const button = e.target;
  const name = button.parentElement.querySelector('#name');
  const price = button.parentElement.querySelector('#price');
  const img = button.parentElement.querySelector('.card-img-top');

  let boolean = false;

  for (let i = 0; i < productos.length; i++) {
    if (productos[i] == name.textContent) {
      boolean = true;
    }
  }

  if (!boolean) {
    elements.innerHTML += `
    <div class="element">
        <img src="${img.src}" alt="">
        <p id="name">${name.textContent}</p>
        <p id="price">${price.textContent}</p>
        <input type="number" id="quantity" readonly value="1">
    </div>
    `;
    productos.push(name.textContent);
  } else {
    const quantity = document.querySelectorAll('#quantity');
    quantity.forEach((input) => {
      const elementName = input.parentElement.querySelector('#name');
      if (elementName.textContent == name.textContent) {
        input.outerHTML = `<input type="number" id="quantity" readonly value="${Number(input.value) + 1}">`;
      }
    })
  }
}

const carrito = document.querySelector('#carrito');
const opener = document.querySelector('#cartbutton');
let opened = false;

opener.addEventListener('click', () => {
  if (!opened) {
    carrito.style.display = 'block';
    opened = true;
    setTimeout(() => {
      carrito.style.opacity = '.9';

    }, 10);
  } else {
    carrito.style.opacity = '0';

    setTimeout(() => {
      carrito.style.display = 'none';
      opened = false;
    }, 200);
  }
});

const buyCart = document.querySelector('#buycart');
buyCart.addEventListener('click', () => {
  elements.innerHTML = '<h4 id="carritoText">Carrito</h4>';
  alert('Su pedido llegará pronto!!');
  productos = [];
})

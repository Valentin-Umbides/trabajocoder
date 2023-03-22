
let raquetas;

async function conectarJSON() {
  const res = await fetch("../JSON/raquetas.json")
  const data = await res.json()
  return data
}

conectarJSON()
  .then(function (data) {
    raquetas = data;
  })

  .then(function (error) {
    if (error) {
      console.log(error);
    }
  })

setTimeout(() => {
  setTimeout(() => {



  }, 200)
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
  dividir(10, 5);
  function raqueta(id, nombre, tamañoAro, precio) {
    this.id = id;
    this.nombre = nombre;
    this.tamañoAro = tamañoAro;
    this.precio = precio;
  }
  const raqueta1 = new raqueta("1", " raqueta Blade", 98, "$30000 ");
  const raqueta2 = new raqueta("2", "raqueta Burn", 100, "$30000");
  const raqueta3 = new raqueta("3", "raqueta Clash", 100, "$30000")
  const raqueta4 = new raqueta("4", "raqueta Pure Aero", 98, "$35000")
  const raqueta5 = new raqueta("5", "raqueta Pure Drive", 98, "$35000")
  const raqueta6 = new raqueta("6", "raqueta Pure Aero", 98, "$35000")
  const raqueta7 = new raqueta("7", "raqueta Pure Strike", 98, "$35000")
  const producto = [raqueta1, raqueta2, raqueta3, raqueta4, raqueta5, raqueta6, raqueta7]



  const nombres = raquetas.map((el) => el.nombre)
  const precio = raquetas.map((el) => el.precio)
  const sumaNumeros = raquetas.find((el) => el.nombre === "Blade")
  const sumaNumeros2 = raquetas.find((el) => el.nombre === "Burn")
  const numeros = [1, 2, 3, 4, 5, 6]
  const total = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)
  function buscarProducto(buscado, array) {
    let busquedaArray = array.filter(
      (raqueta) => raqueta.nombre.toLowerCase().includes(buscado)
    )
    console.log(busquedaArray)
  }
  let busqueda = document.getElementById("buscador")
  buscador.addEventListener("input", () => {
    buscarProducto(buscador.value, producto)
  })
  localStorage.setItem("misRaquetas", JSON.stringify(producto))
  let getRaquetas = JSON.parse(localStorage.getItem("misRaquetas"))




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

}, 300)




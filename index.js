const pizzas = [
    {
      id: 1,
      nombre: "PIZZA DE MUZARELLA",
      precio: 500,
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
      imagen: "./IMG/muzzarella.png",
    },
  
    {
      id: 2,
      nombre: "PIZZA DE CEBOLLA",
      precio: 1500,
      ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
      imagen: "./IMG/cebolla.png",
    },
  
    {
      id: 3,
      nombre: "PIZZA 4 QUESOS",
      precio: 1380,
      ingredientes: [
        "Muzzarella",
        "Tomate",
        "Queso Azul",
        "Parmesano",
        "Roquefort",
      ],
      imagen: "./IMG/4quesos.png",
    },
  
    {
      id: 4,
      nombre: "PIZZA ESPECIAL",
      precio: 1000,
      ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
      imagen: "./IMG/especial.png",
    },
  
    {
      id: 5,
      nombre: "PIZZA DE ANANA",
      precio: 600,
      ingredientes: ["Muzzarella", "Tomate", "Anana"],
      imagen: "./IMG/anana.png",
    },
  ];
  
  const form = document.getElementById("form")
  const container = document.getElementById("container")
  const error = document.getElementById("error")
  const inputNumber = document.getElementById("input-number")
  
  
  const init =() => {
    document.addEventListener("DOMContentLoaded", recuperarPizza)
    form.addEventListener("submit", searchPizza);
  }
  
  const saveToLocalStorage = (last) =>{
    localStorage.setItem("ultimoItem", JSON.stringify(last));
  };
  
  const ultimoItem = JSON.parse (localStorage.getItem("ultimoItem"))
  
  const recuperarPizza = () =>{
    if (ultimoItem) {
      container.innerHTML =`<div id="card-container"><h3 class="nombre"><span>#${ultimoItem.id}</span>${ultimoItem.nombre}</h3>
          
      <div class="pizzaImgContainer"><img src="${ultimoItem.imagen}" alt=""></div>
      <p class="ingredientes">${ultimoItem.ingredientes}</p>
      <h3 class="precio">${ultimoItem.precio}</h3></div>`
      } else {
        container.innerHTML =""
      }
  }
    
  const searchPizza = (e) =>{
    e.preventDefault()
  
    if(inputNumber.value ==""){
      container.innerHTML=`<div id="card-container">
      <p class="error" id="error">SOLO INGRESAR NUMEROS</p>
  </div>`
  
  form.reset();
    } else {
  
      const buscarID = (inputNumber) =>{
        return pizzas.find ((pizza) => pizza.id == inputNumber.value )
      }
  
      if (buscarID){
        error.textContent=""
        let pizza = buscarID(inputNumber)
        if (pizza) {
        recuperarPizza(ultimoItem)
        const createCard = (pizza) =>{
          container.innerHTML =`<div id="card-container"><h3 class="nombre"><span>#${pizza.id}</span>${pizza.nombre}</h3>
          
          <div class="pizzaImgContainer"><img src="${pizza.imagen}" alt=""></div>
          <p class="ingredientes">${pizza.ingredientes}</p>
          <h3 class="precio">${pizza.precio}</h3></div>`
          }
          createCard (pizza)
          saveToLocalStorage(pizza)
          form.reset();
        
      } else {
        container.innerHTML = `<div id="card-container">
        <p class="error" id="error"> NO EXISTE ESE ID PARA UNA PIZZA
    </p>
        <img src="IMG/ERROR404.png" alt="imgERROR">
    </div>`;
    form.reset();
  
        
      }
  
      }}
    }
  
   
  
  init ()
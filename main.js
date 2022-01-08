const productos =[
    //categorias: 1:bebidas, 2:botanas y 3:abarrotes
    {nombre:'refresco coca cola',precio:'35', img:'https://www.coca-colaentuhogar.com/media/catalog/product/c/o/coca-cola-original-pnr-1.25l.png?optimize=medium&fit=bounds&height=550&width=550&canvas=550:550&format=jpeg', categoria:1, carrito:false},
    {nombre:'pepsi 2L',precio:'30', img:'https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/302279_A_1280_AL.jpg', categoria:1,carrito:false},
    {nombre:'Sabritas Original',precio:'14', img:'https://www.chedraui.com.mx/medias/7501011115613-00-CH1200Wx1200H?context=bWFzdGVyfHJvb3R8NzEyOTF8aW1hZ2UvanBlZ3xoNjIvaDhmLzEwODIzNzQ2NzQ4NDQ2LmpwZ3w1Y2UwZTQ1Yzk1NWY4NDFmYjM0YjhhZGY1OGJkMTcyODc5NmE1ZmYwMTlhNDBlOTdkMmJkMDY5YmI4YWI2YjYx', categoria:2,carrito:false},
    {nombre:'Doritos Nacho',precio:'13', img:'https://www.chedraui.com.mx/medias/7501011131064-00-CH515Wx515H?context=bWFzdGVyfHJvb3R8Mjg5MjJ8aW1hZ2UvanBlZ3xoOGQvaGM4LzExMDI3NTAwNDAwNjcwLmpwZ3w4ZDU2YmZlNDBiN2UyMDBkYjMwOWM4NmY4MDRlYjBmYmIzOGUwODFmODRiNmZmY2I2NGJlYzU2ODlkMDc4ZTUw', categoria:2,carrito:false},
    {nombre:'Pringles Queso',precio:'17', img:'https://www.laranitadelapaz.com.mx/images/thumbs/0005952_papas-queso-original-1237-gr-pringles-ieps-inc_510.jpeg', categoria:2,carrito:false},
    {nombre:'Aceite Nutrioli 1L',precio:'42', img:'https://d1zc67o3u1epb0.cloudfront.net/media/catalog/product/cache/23527bda4807566b561286b47d9060f4/n/u/nutrioli-400.jpg', categoria:3,carrito:true},
    {nombre:'Crema original Lala',precio:'17', img:'https://www.lacomer.com.mx/superc/img_art/7501020513134_3.jpg', categoria:3, carrito:false}

]



productos.map(producto=>{ 
    
    console.log(producto.img)
    console.log(producto.nombre)
    console.log(producto.precio)

})



const nombreProductos= document.getElementById('nombreProductos');

const columnaProductos=document.getElementById('columnaProductos');

function recorrerTodosProductos() {
    let valor = '';
    
    productos.forEach((producto) => {
        valor += `
        
        <div class="card m-2 rounded" style="width: 18rem;">
    <img src="${producto.img}" class="card-img-top" alt="...">
    <div class="card-body columnaCartas rounded" id="cartaProductos" >
    <h5 class="card-title text-center" >${producto.nombre}</h5>
    <p class="card-text precioDiseño" > $ ${producto.precio}</p>
    </div>
    <button id="btnAñadirCarrito"  class="btn btn-warning m-5 mb-3 mt-2 w-75 "><strong>Añadir al carrito</strong></button>
    </div> 
        `;
    
        
    });
    
    columnaProductos.innerHTML = valor;
   
   

    //const botonAñadirCarrito=document.getElementById('btnAñadirCarrito')
    

};


 


function recorrerBebidas() {

    const productosBebidas = productos.filter(bebida =>bebida.categoria===1)
    console.log(productosBebidas)


    let valor = '';
    productosBebidas.forEach((producto) => {
        valor += `
        
        <div class="card" style="width: 18rem;">
    <img src="${producto.img}" class="card-img-top" alt="...">
    <div class="card-body" >
    <h5 class="card-title text-center" id="parrafoProducto">${producto.nombre}</h5>
    <p class="card-text precioDiseño" > $ ${producto.precio}</p>
    
</div>

<button id="btnAñadirCarrito"  class="btn btn-warning m-5 mb-3 mt-2 w-75 "><strong>Añadir al carrito</strong></button>

</div>
        `;
    });
    columnaProductos.innerHTML = valor;
};

function recorrerBotanas() {

    const productosBotanas = productos.filter(botana =>botana.categoria===2)
   


    let valor = '';
    productosBotanas.forEach((producto) => {
        valor += `
        
        <div class="card" style="width: 18rem;">
    <img src="${producto.img}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title text-center" id="parrafoProducto">${producto.nombre}</h5>
    <p class="card-text precioDiseño" > $ ${producto.precio}</p>
    
</div>
<button id="btnAñadirCarrito"  class="btn btn-warning m-5 mb-3 mt-2 w-75 "><strong>Añadir al carrito</strong></button>

</div>
        `;
    });
    columnaProductos.innerHTML = valor;
};

function recorrerAbarrotes() {

    const productosAbarrotes = productos.filter(abarrote =>abarrote.categoria===3)
   


    let valor = '';
    productosAbarrotes.forEach((producto) => {
        valor += `
        
        <div class="card" style="width: 18rem;">
    <img src="${producto.img}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title text-center" id="parrafoProducto">${producto.nombre}</h5>
    <p class="card-text precioDiseño" > $ ${producto.precio}</p>
    
</div>
<button id="btnAñadirCarrito"  class="btn btn-warning m-5 mb-3 mt-2 w-75 "><strong>Añadir al carrito</strong></button>

</div>
        `;
    });
    columnaProductos.innerHTML = valor;
};

const filtrar=()=>{
    let opcionSeleccionada= document.getElementById('selectFiltros').options[document.getElementById('selectFiltros').selectedIndex].value;
    if(opcionSeleccionada==='bebidas'){
        recorrerBebidas()
    }else if(opcionSeleccionada==='botanas'){
        recorrerBotanas()
    }else if(opcionSeleccionada==='abarrotes'){
        recorrerAbarrotes()
    }else{
        recorrerTodosProductos() // todos los productos
    }

}

recorrerTodosProductos()





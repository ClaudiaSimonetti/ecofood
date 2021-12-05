
const listadoProductosBD=[{id: 0, imagen:"img/manzanas.jpg", nombre: "manzana", origen: "Argentina", unidadEnGramos: 1000, precioEnPesos: 120, unidad: 1, categoria: "frutas"},
                        {id: 1, imagen:"img/naranjas.jpg" , nombre: "naranja", origen: "Argentina", unidadEnGramos: 1000, precioEnPesos: 100, unidad: 1, categoria: "frutas"},
                        {id: 2, imagen:"img/bananas.jpg" , nombre: "banana", origen: "Ecuador", unidadEnGramos: 1000, precioEnPesos: 160, unidad: 1, categoria: "frutas"},
                        {id: 3, imagen:"img/frutillas.jpg" , nombre: "frutilla", origen: "Argentina", unidadEnGramos: 1000, precioEnPesos: 180, unidad: 1, categoria: "frutas"},
                        {id: 4, imagen:"img/kiwi.jpg" , nombre: "kiwi", origen: "Brasil", unidadEnGramos: 1000, precioEnPesos: 200, unidad: 1, categoria: "frutas"},
                        {id: 5, imagen:"img/zanahoria.jpg" , nombre: "zanahoria", origen: "Peru", unidadEnGramos: 1000, precioEnPesos: 130, unidad: 1, categoria: "verduras"},
                        {id: 6, imagen:"img/tomates.jpg" , nombre: "tomate", origen: "Peru", unidadEnGramos: 1000, precioEnPesos: 150, unidad: 1, categoria: "verduras"},
                        {id: 7, imagen:"img/cebolla_morada.jpg" , nombre: "cebolla", origen: "Chile", unidadEnGramos: 1000, precioEnPesos: 110, unidad: 1, categoria: "verduras"},
                        {id: 8, imagen:"img/miel.jpg" , nombre: "miel", origen: "Argentina", unidadEnGramos: 1000, precioEnPesos: 850, unidad: 1, categoria: "almacen"},
                        {id: 9, imagen:"img/pera_640.jpg" , nombre: "pera", origen: "Peru", unidadEnGramos: 1000, precioEnPesos: 140, unidad: 1, categoria: "frutas"},
                        {id: 10, imagen:"img/uva_640.jpg" , nombre: "uva", origen: "Chile", unidadEnGramos: 1000, precioEnPesos: 105, unidad: 1, categoria: "frutas"},
                        {id: 11, imagen:"img/pomelo.jpg" , nombre: "pomelo", origen: "Argentina", unidadEnGramos: 1000, precioEnPesos: 130, unidad: 1, categoria: "frutas"},
                        {id: 12, imagen:"img/papa_640.jpg" , nombre: "papa", origen: "Argentina", unidadEnGramos: 1000, precioEnPesos: 230, unidad: 1, categoria: "verduras"},
                        {id: 13, imagen:"img/remolacha_640.jpg" , nombre: "remolacha", origen: "Peru", unidadEnGramos: 1000, precioEnPesos: 140, unidad: 1, categoria: "verduras"},
                        {id: 14, imagen:"img/zucchini_640.jpg" , nombre: "zucchini", origen: "Chile", unidadEnGramos: 1000, precioEnPesos: 165, unidad: 1, categoria: "verduras"},
                        {id: 15, imagen:"img/morron2_640.jpg" , nombre: "morron", origen: "Argentina", unidadEnGramos: 1000, precioEnPesos: 170, unidad: 1, categoria: "verduras"},
                        {id: 16, imagen:"img/berenjena_640.jpg" , nombre: "berenjena", origen: "Argentina", unidadEnGramos: 1000, precioEnPesos: 190, unidad: 1, categoria: "verduras"},
                        {id: 17, imagen:"img/cafe_640.jpg" , nombre: "cafe", origen: "Colombia", unidadEnGramos: 1000, precioEnPesos: 560, unidad: 1, categoria: "almacen"},
                        {id: 18, imagen:"img/harina_640.jpg" , nombre: "harina", origen: "Argentina", unidadEnGramos: 1000, precioEnPesos: 170, unidad: 1, categoria: "almacen"},
                        {id: 19, imagen:"img/cacao_640.jpg" , nombre: "cacao", origen: "Brasil", unidadEnGramos: 1000, precioEnPesos: 260, unidad: 1, categoria: "almacen"},
                        {id: 20, imagen:"img/aceite_640.jpg" , nombre: "aceite", origen: "Peru", unidadEnGramos: 1000, precioEnPesos: 170, unidad: 1, categoria: "almacen"},
                        {id: 21, imagen:"img/arroz_640.jpg" , nombre: "arroz", origen: "Chile", unidadEnGramos: 1000, precioEnPesos: 165, unidad: 1, categoria: "almacen"},
                        {id: 22, imagen:"img/azucar.jpg" , nombre: "azucar", origen: "Argentina", unidadEnGramos: 1000, precioEnPesos: 170, unidad: 1, categoria: "almacen"},
                        {id: 23, imagen:"img/pan.jpg" , nombre: "pan", origen: "Argentina", unidadEnGramos: 1000, precioEnPesos: 190, unidad: 1, categoria: "almacen"}, 
                        ];



let carrito=[];


const DOMitems=document.querySelector('#detalleProd');
const DOMitemsEnCarrito=document.querySelector('#detalleCarrito');

///////LOCALSTORAGE/////////
const EcoFoodLocalStorage=window.localStorage;



for (const producto of listadoProductosBD){
    const cardsProductos = document.createElement("div");
    //el id del producto lo pongo dentro de button porque luego me va a permitir identificar el producto para sumar.
    cardsProductos.innerHTML= `<img class="card-img-top imgItem" alt="..." src="${producto.imagen}"></img>
                            <h4 class="nombreItem card-title">${producto.nombre}</h4>
                            <h5 class="card-text">Origen ${producto.origen}</h5>
                            <h5 class="pesoItem card-text">${producto.unidadEnGramos} gramos</h5>
                            <h5 class="precioItem card-text">$ ${producto.precioEnPesos}</h5>
                            <button class="list-group-item list-group-item-primary" id="${producto.id}">Añadir a carrito</button>`;
    
    cardsProductos.classList.add('card-body');

    const contenedorCardsProd=document.createElement("div");
    contenedorCardsProd.classList.add('card', 'col-sm-6');
    contenedorCardsProd.appendChild(cardsProductos);

    DOMitems.appendChild(contenedorCardsProd);

    //antes de cerrar el for hay que ESTABLECER EL EVENTO para cada uno de esos id creados en cada boton
    let select=document.getElementById(`${producto.id}`)
    select.addEventListener('click', ()=>seleccionarProducto(`${producto.id}`));
};


///////LOCALSTORAGE/////////
function guardarCarritoEnLocalStorage(){
    EcoFoodLocalStorage.setItem('carritoStorage', JSON.stringify(carrito));
}


function seleccionarProducto(id){

    if(carrito.some(producto=>parseInt(producto.id)===parseInt(id))){
        let productoParaAgregar=carrito.find(productoEncontrado=>parseInt(productoEncontrado.id)===parseInt(id))
        productoParaAgregar.unidad=productoParaAgregar.unidad + 1
    }
    else{
        const nuevoProducto={...listadoProductosBD[id]}
        carrito.push(nuevoProducto)
        
    }

    Swal.fire(
        listadoProductosBD[id].nombre.toLocaleUpperCase(),
        "Producto agregado al carrito",
        'success'
    );

    dibujarCarrito();

    calcularTotalCarrito();

    contadorProductos();
    
    ///////LOCALSTORAGE/////////
    guardarCarritoEnLocalStorage();

}


function dibujarCarrito(){
    document.getElementById("detalleCarrito").innerHTML = '';

    carrito.forEach(productoEnCarrito=>{
        document.getElementById("detalleCarrito").innerHTML +=  "<tr id="+productoEnCarrito.id+"><th>"+ productoEnCarrito.nombre +"</th>"+""+ 
                                                                "<th id='valorCantidad'>"+ productoEnCarrito.unidad +"</th>"+""+
                                                                "<th>"+ "x" +"</th>"+""+
                                                                "<th>"+"$"+ productoEnCarrito.precioEnPesos +"<th>"+""+ 
                                                                "<th><button onclick='quitarProducto("+productoEnCarrito.id+")' class='btnEliminar btn btn-outline-secondary'>"+ "<i class='far fa-trash-alt'></i>" +"</button><th></tr>";
    })
}



function quitarProducto(id){

    carrito=carrito.filter(productoDelCarrito=>productoDelCarrito.id!==id);

    calcularTotalCarrito()

    contadorProductos()

    eliminarProductoDelCarrito(id)

    guardarCarritoEnLocalStorage();
    
};



function calcularTotalCarrito(){
        
    let total=0;

    //recorro el carrito. Por cada uno de los productos que añado le agrego valor al total que está en 0.
    for(const productoEnCarrito of carrito){
        total+=productoEnCarrito.precioEnPesos * productoEnCarrito.unidad;
    }
        
    let conteoTotalCompra=document.getElementById("totalCompra");
        
    //con innerText modifico el valor del total de la compra
    conteoTotalCompra.innerText="$"+total;
        
};


//Badges. Contador de producto
function contadorProductos(){
    let contador=0

    for (const contadorDeUnidadesCarrito of carrito){
        contador=contador+contadorDeUnidadesCarrito.unidad;
    }

    let valorContador=document.getElementById("contador");
    valorContador.innerText=contador
    
};



//validacion formulario

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	apellido: /^[a-zA-ZÀ-ÿ\s]{2,20}$/, // Permite letras, espacios y acentos.
	nombre: /^[a-zA-ZÀ-ÿ\s]{2,20}$/, 
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    direccion: /^[a-zA-Z0-9\_\-]{2,20}$/, // Permite letras y numeros
    numeroDireccion: /^\d{1,5}$/, // Permite solo numeros
	telefono: /^\d{7,14}$/, 
    numeroTarjeta: /^\d{16,16}$/,
    titularTarjeta: /^[a-zA-ZÀ-ÿ\s]{2,20}$/,
    vencimientoTarjeta: /^\d{4,4}$/,
}

const campos = {
	apellido: false,
	nombre: false,
	correo: false,
    direccion: false,
    numeroDireccion: false,
	telefono: false,
    numeroTarjeta: false,
    titularTarjeta: false,
    vencimientoTarjeta: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
        case "direccion":
			validarCampo(expresiones.direccion, e.target, 'direccion');
		break;
		case "numeroDireccion":
			validarCampo(expresiones.numeroDireccion, e.target, 'numeroDireccion');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
        case "numeroTarjeta":
			validarCampo(expresiones.numeroTarjeta, e.target, 'numeroTarjeta');
		break;
		case "titularTarjeta":
			validarCampo(expresiones.titularTarjeta, e.target, 'titularTarjeta');
		break;
		case "vencimientoTarjeta":
			validarCampo(expresiones.vencimientoTarjeta, e.target, 'vencimientoTarjeta');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		campos[campo] = true;

	} else {
		campos[campo] = false;

	}
}

function checkear(seleccion){
    document.getElementById('visa').checked=false,
    document.getElementById('master').checked=false,
    seleccion.checked=true
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const visa = document.getElementById('visa');
    const master = document.getElementById('master');
    
	if(campos.apellido && campos.nombre && campos.correo && campos.direccion && campos.numeroDireccion && campos.telefono 
    && (visa.checked || master.checked )
    && campos.numeroTarjeta && campos.titularTarjeta && campos.vencimientoTarjeta){
		formulario.reset();

        Swal.fire(
            '',
            'Formulario enviado con éxito',
            'success',
        )

        vaciarCarrito();
		
	} else {
        Swal.fire(
            '',
            'Formulario incorrecto. Complete los datos que faltan',
            'error',
        )
	}
});


//validacion suscripcion

const suscripcion = document.getElementById('suscripcion')
const input = document.querySelectorAll('#suscripcion input');

input.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
});

suscripcion.addEventListener('submit',(e)=>{
    e.preventDefault();

    if(campos.correo){
        suscripcion.reset();

        Swal.fire(
            '',
            'Su email fue enviado',
            '',
        )

    }else{
        Swal.fire(
            '',
            'Debe completar email',
            '',
        )

    }
})


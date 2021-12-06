
//Deshabilito la tecla enter de los formularios para que no se recargue
$(document).ready(function() {
    $("form").keypress(function(e) {
        if (e.which == 13) {
            return false;
        }
    });

    $("#main").hide();

    $("#contenedorFormulario").hide();

});


//Buscador de producto
$("#inputBuscadorProducto").change(function(){
    
    $("#btnBuscadorProducto").addEventListener('click', buscar());

});


function buscar(){
    let buscador= $("#inputBuscadorProducto").val().toLowerCase();
    let filtroProd = listadoProductosBD.filter((nombreDelProducto)=>nombreDelProducto.nombre === buscador);

    $("#detalleProd").empty();
    $("#contenedorFormulario").hide();
    $("#main").show();
    $("#detalleProd").fadeIn(1000);
    ocultarImagenPrincipal();


    filtroProd.forEach(producto=>{
        $('#detalleProd').prepend(`<div id='tituloCategoria'><h2>${producto.categoria}</h2></div>`);
        $("#detalleProd").append(`<div class="card col-sm-6"><img class="card-img-top imgItem" alt="..." src="${producto.imagen}"></img>
        <h4 class="nombreItem card-title">${producto.nombre}</h4>
        <h5 class="card-text">Origen ${producto.origen}</h5>
        <h5 class="pesoItem card-text">${producto.unidadEnGramos} gramos</h5>
        <h5 class="precioItem card-text">$ ${producto.precioEnPesos}</h5>
        <button class="list-group-item list-group-item-primary" id="${producto.id}">Añadir a carrito</button></div>`)
        
        let select=document.getElementById(`${producto.id}`)
        select.addEventListener('click', ()=>seleccionarProducto(`${producto.id}`));
        
    })
    
};



//Filtros por categoria de productos

$("#frutas").click(function(){
    $("#main").show();
    ocultarTodosLosProductos();
    traerProductosPorCategoriaFruta();
    $("#detalleProd").fadeIn(1000);
    $("#contenedorFormulario").hide();
    ocultarImagenPrincipal();
})

function ocultarTodosLosProductos(){
    $("#detalleProd").hide();
} 

function ocultarImagenPrincipal(){
    $("#imgPrincipal").empty();

}


function traerProductosPorCategoriaFruta(){
    let filtroCatfruta=listadoProductosBD.filter((productoPorCategoria)=>productoPorCategoria.categoria==="frutas");

    $("#detalleProd").empty();

    $('#detalleProd').prepend("<div id='tituloCategoria'><h1>Frutas</h1></div>");

    filtroCatfruta.forEach(producto=>{
        $("#detalleProd").append(`<div class="card col-sm-6">
        <img class="card-img-top imgItem" alt="..." src="${producto.imagen}"></img>
        <h4 class="nombreItem card-title">${producto.nombre}</h4>
        <h5 class="card-text">Origen ${producto.origen}</h5>
        <h5 class="pesoItem card-text">${producto.unidadEnGramos} gramos</h5>
        <h5 class="precioItem card-text">$ ${producto.precioEnPesos}</h5>
        <button class="list-group-item list-group-item-primary" id="${producto.id}">Añadir a carrito</button>
        </div>`)
        
        let select=document.getElementById(`${producto.id}`)
        select.addEventListener('click', ()=>seleccionarProducto(`${producto.id}`));
    })
    
}


$("#verduras").click(function(){
    $("#main").show();
    ocultarTodosLosProductos();
    traerProductosPorCategoriaVerdura();
    $("#detalleProd").fadeIn(1000);
    $("#contenedorFormulario").hide();
    ocultarImagenPrincipal();
})


function traerProductosPorCategoriaVerdura(){
    let filtroCatVerduras=listadoProductosBD.filter((productoPorCategoria)=>productoPorCategoria.categoria==="verduras");

    $("#detalleProd").empty();

    $('#detalleProd').prepend("<div id='tituloCategoria'><h1>Verduras</h1></div>");

    filtroCatVerduras.forEach(producto=>{
        $("#detalleProd").append(`<div class="card col-sm-6"><img class="card-img-top imgItem" alt="..." src="${producto.imagen}"></img>
        <h4 class="nombreItem card-title">${producto.nombre}</h4>
        <h5 class="card-text">Origen ${producto.origen}</h5>
        <h5 class="pesoItem card-text">${producto.unidadEnGramos} gramos</h5>
        <h5 class="precioItem card-text">$ ${producto.precioEnPesos}</h5>
        <button class="list-group-item list-group-item-primary" id="${producto.id}">Añadir a carrito</button></div>`)
        
        let select=document.getElementById(`${producto.id}`)
        select.addEventListener('click', ()=>seleccionarProducto(`${producto.id}`));

    })

}


$("#almacen").click(function(){
    $("#main").show();
    ocultarTodosLosProductos();
    traerProductosPorCategoriaAlmacen();
    $("#detalleProd").fadeIn(1000);
    $("#contenedorFormulario").hide();
    ocultarImagenPrincipal();
})


function traerProductosPorCategoriaAlmacen(){
    let filtroCatAlmacen=listadoProductosBD.filter((productoPorCategoria)=>productoPorCategoria.categoria==="almacen");

    $("#detalleProd").empty();

    $('#detalleProd').prepend("<div id='tituloCategoria'><h1>Almacen</h1></div>");

    filtroCatAlmacen.forEach(producto=>{
        $("#detalleProd").append(`<div class="card col-sm-6"><img class="card-img-top imgItem" alt="..." src="${producto.imagen}"></img>
        <h4 class="nombreItem card-title">${producto.nombre}</h4>
        <h5 class="card-text">Origen ${producto.origen}</h5>
        <h5 class="pesoItem card-text">${producto.unidadEnGramos} gramos</h5>
        <h5 class="precioItem card-text">$ ${producto.precioEnPesos}</h5>
        <button class="list-group-item list-group-item-primary" id="${producto.id}">Añadir a carrito</button></div>`)
        
        let select=document.getElementById(`${producto.id}`)
        select.addEventListener('click', ()=>seleccionarProducto(`${producto.id}`));

    })

}

//oculta el cartel de bienvenida y da informacion de la empresa
$("#inicio").click(function(){
    $("#main").hide();
})


//Boton vaciar carrito
$("#btnVaciarCarrito").on('click', vaciarCarrito);

function vaciarCarrito(){

    carrito.length=0

    $('#detalleCarrito').empty();

    calcularTotalCarrito();

    contadorProductos();

    listadoProductosBD.map(producto =>{
        if(producto.unidad = 0){
        $("#detalleCarrito") += "<th>"+ producto.nombre +"</th>"+""+ 
                                "<th>"+ producto.unidad +"</th>"+""+
                                "<th>"+ "x" +"</th>"+""+
                                "<th>"+"$"+ producto.precioEnPesos +"<th>"+""+ 
                                "<th><button onclick='quitarProducto("+producto.id+")' class='btnEliminar btn btn-outline-secondary'>"+ "X" +"</button><th>";
        
        } 
    
    });

    ///////LOCALSTORAGE/////////
    localStorage.clear();
    
};


//Eliminar producto del carrito
function eliminarProductoDelCarrito(id){
    $('#detalleCarrito tr#'+id).remove()
}


const rutaJson="js/baseDeDatosPersonal.json";
    $.getJSON(rutaJson, function(respuesta, estado){
        if(estado=="success"){
            let listadoDePersonal=respuesta.personal;
            for(const empleado of listadoDePersonal){
                $("#personal").append(
                    `<div class="col border-light bg-light" style="width: 18rem;">
                        <img class="card-img-top rounded-circle" alt="Card image cap" src="${empleado.imagen}"></img>
                        <div class="col">
                            <h4 class="card-title">${empleado.nombre}</h4>
                            <h5 class="card-text">${empleado.puesto}</h5>
                        </div>
                    </div>`
                )
            }
        }
    });



//Tratamiento boton finalizar compra

$("#btnCarrito").click(function(){
    if(carrito >= 0){
        Swal.fire(
            '',
            'Debe ingresar al menos un producto',
            '',
        )
        return false
    }else{
    ocultarTodosLosProductos();
    ocultarImagenPrincipal();
    $("#contenedorFormulario").fadeIn(2000);
    $("#main").show();
    }
})


//Bloqueo de teclas. Permite ingresar solo numeros en los campos especificos
$(".entradaNumero").keypress(function (key) {
    if (key.charCode < 48 || key.charCode > 57)
        return false
    });


//Bloqueo de teclas. Permite ingresar solo texto en los campos especificos
$(".entradaTexto").keypress(function (key) {
    if ((key.charCode < 97 || key.charCode > 122)
        && (key.charCode < 65 || key.charCode > 90) 
        && (key.charCode != 32) 
        && (key.charCode != 45) 
        )
        return false;
});


//efecto scroll top con boton finaliza compra

$("#btnCarrito").click(function(){
    //al tag html
    $('html').animate({
        scrollTop: $("#main").offset().top  
    })

})


//efecto scroll top con lupita para buscar producto

$("#btnBuscadorProducto").click(function(){
    console.log("click en sobre nosotros");
    //al tag html
    $('html').animate({
        scrollTop: $("#main").offset().top  
    })

})

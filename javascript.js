const formulario = document.getElementById('formulario')

//Consultar a localstorage cuando cargue mi pagina (evento load)
window.addEventListener('load', function(){
    console.log('ahora deberiamos consultar a localstorage')

    //obtener datos del localstorage
    const datosJSON = localStorage.getItem('empleados');

    if(datosJSON != null){
        
        //convertir el json a objeto javascript
        const datos = JSON.parse(datosJSON);

        console.log(datos);

        //recorriendo listado de empleados que viene del localstorage

        for (const empleado of datos) {

            const parrafoNombre = document.createElement('P');
            parrafoNombre.textContent = empleado.nombre;

            const parrafoPuesto = document.createElement('P');
            parrafoPuesto.textContent = empleado.puesto;

            const botonEditar = document.createElement('BUTTON');
            botonEditar.textContent = "Editar";
            botonEditar.classList.add('btn', 'btn-editar')
            botonEditar.addEventListener('click', function(){

                const nuevoNombre = prompt('Ingresa el nuevo nombre');
                parrafoNombre.textContent = nuevoNombre;

                const nuevoPuesto = prompt('Ingresa el nuevo puesto');
                parrafoPuesto.textContent = nuevoPuesto;


            });


            const botonEliminar = document.createElement('BUTTON');
            botonEliminar.textContent = "Eliminar";
            botonEliminar.classList.add('btn', 'btn-eliminar')
            
            botonEliminar.addEventListener('click', function(){
                contenedorEmpleado.remove();
            });


            
            const contenedorEmpleado = document.createElement('DIV');
            contenedorEmpleado.classList.add("empleado");

            contenedorEmpleado.appendChild(parrafoNombre);
            contenedorEmpleado.appendChild(parrafoPuesto);
            contenedorEmpleado.appendChild(botonEditar);
            contenedorEmpleado.appendChild(botonEliminar);


            //Obteniendo objeto referencia forma 2
            const contenedorEmpleados = document.querySelector('.div-empleados');
            contenedorEmpleados.appendChild(contenedorEmpleado);

        }

    }



});


formulario.addEventListener('submit', function(evento) {

    evento.preventDefault();

    console.log('formulario enviado');

    const nombre = document.getElementById('nombre')
    const puesto = document.getElementById('puesto')

    console.log(nombre.value)
    console.log(puesto.value)


    const parrafoNombre = document.createElement('P');
    parrafoNombre.textContent = nombre.value;

    const parrafoPuesto = document.createElement('P');
    parrafoPuesto.textContent = puesto.value;

    const botonEditar = document.createElement('BUTTON');
    botonEditar.textContent = "Editar";
    botonEditar.classList.add('btn', 'btn-editar')
    botonEditar.addEventListener('click', function(){

        const nuevoNombre = prompt('Ingresa el nuevo nombre');
        parrafoNombre.textContent = nuevoNombre;

        const nuevoPuesto = prompt('Ingresa el nuevo puesto');
        parrafoPuesto.textContent = nuevoPuesto;

    });


    const botonEliminar = document.createElement('BUTTON');
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add('btn', 'btn-eliminar')
    
    botonEliminar.addEventListener('click', function(){
        contenedorEmpleado.remove();
    });


    
    const contenedorEmpleado = document.createElement('DIV');
    contenedorEmpleado.classList.add("empleado");

    contenedorEmpleado.appendChild(parrafoNombre);
    contenedorEmpleado.appendChild(parrafoPuesto);
    contenedorEmpleado.appendChild(botonEditar);
    contenedorEmpleado.appendChild(botonEliminar);


    //Obteniendo objeto referencia forma 1
    const contenedorEmpleados = document.getElementsByClassName('div-empleados')[0];

    //agregando contenedorEmpleado a mi objeto referencia
    contenedorEmpleados.appendChild(contenedorEmpleado);

    //Guardar los datos en el localstorage

    //Crear objeto con los datos del empleado
    const empleado = {
        nombre: nombre.value,
        puesto: puesto.value
    }

    //obtener empleados del localstorage
    let listaEmpleados = localStorage.getItem('empleados');

    if (listaEmpleados == null ) {
        listaEmpleados = []
    } else {
        //convertir a objeto javascript
        listaEmpleados = JSON.parse(listaEmpleados)
    }

    console.log(listaEmpleados)

    listaEmpleados.push(empleado);

    // Convertir nuestro objeto a JSON antes de guardar
    const listaEmpleadosJSON = JSON.stringify(listaEmpleados);

    // Guardar el JSON en el localstorage
    localStorage.setItem('empleados', listaEmpleadosJSON);

})

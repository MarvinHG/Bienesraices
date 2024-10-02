document.addEventListener('DOMContentLoaded', function(){ //cargamos las funciones cuando todo el documento este cargado

    eventListeners();//llamamos la funcion del eventListeners()

    darkMode();//llamamos la funcion del darkMode()
});
// Funcion de Dark Mode
function darkMode(){
    //Vamos a leer las preferencias del Usuario en su sistema operativo
    const prefiereDarkMode = window.matchMedia('(prefers-color-scheme: dark)')

    //console.log(prefiereDarkMode.matches);
    
    if(prefiereDarkMode.matches){// Si sus preferencias son modo oscuro agregamos la clase 'dark-mode'
        document.body.classList.add('dark-mode');
    } else{ // Si sus preferencias son modo Claro removemos la clase 'dark-mode'
        document.body.classList.remove('dark-mode');
    }

    // Si las preferencias dle sistema cambian
    prefiereDarkMode.addEventListener('change', function(){
        if(prefiereDarkMode.matches){// Si sus preferencias son modo oscuro agregamos la clase 'dark-mode'
            document.body.classList.add('dark-mode');
        } else{// Si sus preferencias son modo Claro removemos la clase 'dark-mode'
            document.body.classList.remove('dark-mode');
        }
    });

    //Creamos el boton dark mode
    const botonDarkMode = document.querySelector('.dark-mode-boton');

    //escuchamos el evento click en el boton
    botonDarkMode.addEventListener('click',function(){
         // Agregamos o quitamos la clase 'dark-mode'
        document.body.classList.toggle('dark-mode');
    });
}

// Funcion de eventos 
function eventListeners(){
    // Creamos el boton de mobile 
    const mobileMenu = document.querySelector('.mobile-menu');

    //escuchamos el evento click en el boton
    mobileMenu.addEventListener('click', navegacionResponsive); // llamamos a la funcion navegacionResponsive()
}
// Funcion para la navegacion responsive
function navegacionResponsive(){
    // seleccionamos la navegacion en el documento
    const navegacion = document.querySelector('.navegacion');
    // Agregamos o quitamos la clase "mostrar"
    navegacion.classList.toggle('mostrar');
}
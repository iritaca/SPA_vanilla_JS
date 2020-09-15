// importar los templates y las paginas que generamos. Manejo de rutas y como vamos a generar el render en nuestro proceso de aplicacion.
// Por buena practica no se coloca la extension. JS lo identifica por medio de Babel y webpack.
import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from  '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

// rutas que manejamos dentro de la aplicacion.
// Se crea un objeto que identifica cada una de las rutas y que va a hacer render en cada una de ellas.

const routes ={
    '/':Home,
    // :/id el id sera un valor dinamico y se ajustara al personaje seleccionado.
    '/:id': Character,
    '/contact':'Contact',
}

// Manejador , mostarara los elementos de acuerdo a la logica que vamos a establecer. Vamos  utilizar una funcion Async, porque queremos ir deteniendo el codigo a manera de que ejecute, se complete y avance.

const router = async () =>{
    // Establecer los templates que tenemos hacia un elemento del DOM.
    // Indicamos null en caso de que no lo encuentre.
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    // enviar el template de header hacia la vista dentro del html.
    // EL primer router, empujando el header a mi aplicacion.
    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    // bracket notation routes./ = routes[]
    // routes hace referencia a la estructura y route la que obtenemos de la funcion resolveRoute.
    // si esto me retorna un elemento, vamos a mostrar ese mismo elemento, en caso de no existir muestra el error 404. 
    let render = routes[route] ? routes[route] : Error404;
    // A generar render de nuestra aplicacion dentro de content.
    content.innerHTML = await render();

}

export default router;
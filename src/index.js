// console.log('hello');
// Necesitamos manipular y actualizar nuestro archivo de entrada. En ese archivo debemos importar router para estar escuchando cuando la pagina ya este lista y asi poder empujar la ruta que nosotros estamos llamando.
import router from './routes';
window.addEventListener('load', router);
// un nuevo event listener que va a generar el render al escuchar las rutas.
window. addEventListener('hashchange', router);
const resolveRoutes = (route) =>{
    // necesita pasar la ruta obtenida por la funcion anterior.
    // dentro de nuestra API, el numero de personajes esta limitado a menos de 1000 personajes, por lo que una de nuestras condiciones seria indicar que no puede rebasar mas de 3 caracteres. 
    // Y si no obtuvo un id, regresa un /
    if(route.length <= 3){
        // aqui vamos a establecer otra condicion ternaria, donde revisa si route es exactamente igual a /.(Esto quiere decir que no habria ninguna ruta dentro del hash) y entonces regresa la routa, si es falso envia el valor de id. 
        let validRoute = route === '/' ? route:'/:id';
            return validRoute;
    }
    return `/${route}`; //Esto nos va a retornar nuestra seccion de rutas. /about
};
export default resolveRoutes;
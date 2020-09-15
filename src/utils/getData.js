const API ='https://rickandmortyapi.com/api/character/';

const getData = async(id) =>{
    // condicion ternaria en la que indica si id existe trae la concatenacion de la api con el id, en caso falso, regresara toda la API. 
    const apiURL = id ? `${API}${id}` : API;
    // llamando al fetch de estos elementos, utilizando el standar try catch.
    try{
        // response se encargara de hacer el llamado a fecth, por lo que tenemos que esperar a que retorne la informacion. 
        const response = await fetch(apiURL);
        // para convertir la data a json
        const data = await response.json();
        return data;
    }
    catch{
        console.log('Fetch Error', error);
    }
}
export default getData;
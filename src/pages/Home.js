import getData from '../utils/getData';

const Home = async () => {
    const characters = await getData();
    const view =`
    <div class="Characters">
        ${characters.results.map(character => `
            <article class ="Characters-item">
                <a href="#/${character.id}/">
                    <img src="${character.image}" alt="${character.name}">
                    <h2>${character.name}</h2>
                </a>
            </article>
        `).join('')}
    </div>
    `;
    return view
};
// Indicamos que este documento puede ser leido desde otros archivos de JS.
export default Home;
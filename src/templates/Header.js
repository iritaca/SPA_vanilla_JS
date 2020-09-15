// establecer un elemento que funciona como una seccion.
const Header = () =>{
    const view = `
        <div class="Header-main">
            <div class="Header-logo">
                <h1>
                    <a href="https://iritaca.github.io/SPA_vanilla_JS/">
                    100tifi.co
                    </a>
                </h1>
            </div>
            <div class="Header-nav">
                <a href="#/about/">
                    About
                </a>
            </div>
        </div>
    `;
    return view;
};

export default Header;
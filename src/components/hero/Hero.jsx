import "./Hero.css";

export function Hero() {
    return (
        <section id="hero">
            <div id="hero-content">
                <h1 id="hero-title">SEU ESTILO COMEÇA NOS PÉS.</h1>
                <p className="hero-para">
                    Performance, estilo e conforto em cada passo. Tênis
                    selecionados para o dia a dia, treinos e lifestyle urbano,
                    com design moderno e qualidade que acompanha seu ritmo.
                </p>
                <a href="#catalogo" id="hero-btn">
                    Ver catálogo
                </a>
            </div>
        </section>
    );
}

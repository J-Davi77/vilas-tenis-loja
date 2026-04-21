import "./TenisCard.css";

export function TenisCard({
    produto: { id, nome, categorias, colorway, preco },
}) {
    const formataPreco = (num) =>
        num.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });

    return (
        <div class="tenis-card animated">
            <div class="tenis-img-container">
                <img
                    class="tenis-img"
                    src={`/tenis/img-${id}.jpeg`}
                    alt={`${nome}`}
                    loading="lazy"
                />
            </div>
            <div class="categorias">
                {categorias.map((cat) => (
                    <span class="categoria">{cat}</span>
                ))}
            </div>

            <div class="content">
                <div class="nome-container">
                    <h3 class="nome">{nome}</h3>
                    <span class="colorway">{colorway}</span>
                </div>

                <div class="preco-container">
                    <p class="preco-partida">A partir de:</p>

                    <span class="preco">{formataPreco(preco)}</span>
                </div>

                <button class="detalhes-btn primary">Ver produto</button>
            </div>
        </div>
    );
}

import "./TenisContainer.css";
import { tenisArr } from "../../data-tenis";
import { TenisCard } from "../tenisCard/TenisCard";

export function TenisContainer({ categoria }) {
    const tenisFiltrado = tenisArr.filter((tenis) => tenis.categorias.includes(categoria));

    return (
        <div id="tenis-container">
            {tenisFiltrado.map((tenis, i) => (
                <TenisCard key={i} produto={tenis}></TenisCard>
            ))}
        </div>
    );
}

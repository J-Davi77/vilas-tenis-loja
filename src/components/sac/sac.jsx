import "./sac.css";
import { useState } from "react";
export function Sac(){
    const [aberto, setAberto] = useState(null);
    return(
        <div className="sac-container">
            <h2>Dúvidas frequentes</h2>
            
            <div className="item" onClick={() => setAberto (aberto === 1 ? null : 1)}>
                <h3>
                    Como faço para comprar um tênis?
                    <svg
                    className={`arrow ${aberto === 1 ? "open" : ""}`}
                    viewBox="0 0 24 24"
                    >
                    <path
                        d="M9 6l6 6-6 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    </svg>
                </h3>
                {aberto === 1 &&(
                    <p>As compras são realizadas presencialmente. Escolha o modelo desejado e entre em contato pelo WhatsApp para mais informações.</p>
                )}
            </div>

            <div className="item" onClick={() => setAberto(aberto === 2 ? null : 2)}>
                <h3>
                    Vocês fazem entrega?
                                        <svg
                    className={`arrow ${aberto === 2 ? "open" : ""}`}
                    viewBox="0 0 24 24"
                    >
                    <path
                        d="M9 6l6 6-6 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    </svg>
                </h3>
                {aberto ===2 &&(
                    <p>No momento, não realizamos entregas. A retirada é feita presencialmente.</p>
                )}
            </div>

            <div className="item" onClick={() => setAberto(aberto === 3 ? null : 3)}>
                <h3>
                    Quais formas de pagamento são aceitas?
                                        <svg
                    className={`arrow ${aberto === 3 ? "open" : ""}`}
                    viewBox="0 0 24 24"
                    >
                    <path
                        d="M9 6l6 6-6 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    </svg>
                </h3>
                {aberto ===3 &&(
                    <p>Aceitamos dinheiro, PIX e cartão de crédito/débito.</p>
                )}
            </div>

            <div className="item" onClick={() => setAberto(aberto === 4 ? null : 4)}>
                <h3>
                    Os produtos são originais?
                                        <svg
                    className={`arrow ${aberto === 4 ? "open" : ""}`}
                    viewBox="0 0 24 24"
                    >
                    <path
                        d="M9 6l6 6-6 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    </svg>
                </h3>
                {aberto === 4 &&(
                    <p>Trabalhamos com produtos de alta qualidade e procedência garantida.</p>
                )}
            </div>

            <div className="item" onClick={() => setAberto(aberto === 5 ? null : 5)}>
                <h3>
                    Posso trocar o produto?
                                        <svg
                    className={`arrow ${aberto === 5 ? "open" : ""}`}
                    viewBox="0 0 24 24"
                    >
                    <path
                        d="M9 6l6 6-6 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    </svg>
                </h3>
                {aberto === 5 &&(
                    <p>Sim, realizamos trocas em caso de defeito ou tamanho incorreto dentro do prazo informado.</p>
                )}
            </div>

            <div className="item" onClick={() => setAberto(aberto === 6 ? null : 6)}>
                <h3>
                    Tem garantia?
                                        <svg
                    className={`arrow ${aberto === 6 ? "open" : ""}`}
                    viewBox="0 0 24 24"
                    >
                    <path
                        d="M9 6l6 6-6 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    </svg>
                </h3>
                {aberto === 6 &&(
                    <p>Sim, oferecemos garantia contra defeitos de fabricação.</p>
                )}
            </div>

            <div className="item" onClick={() => setAberto(aberto === 7 ? null : 7)}>
                <h3>
                    Tem todos os tamanhos disponíveis?
                                        <svg
                    className={`arrow ${aberto === 7 ? "open" : ""}`}
                    viewBox="0 0 24 24"
                    >
                    <path
                        d="M9 6l6 6-6 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    </svg>
                </h3>
                {aberto === 7 && (
                    <p>Os tamanhos podem variar conforme o modelo. Consulte disponibilidade antes da compra.</p>
                )}
            </div>

            <div className="item" onClick={() => setAberto(aberto === 8 ? null : 8)}>
                <h3>
                    Como sei meu tamanho ideal?
                                        <svg
                    className={`arrow ${aberto === 8 ? "open" : ""}`}
                    viewBox="0 0 24 24"
                    >
                    <path
                        d="M9 6l6 6-6 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    </svg>
                </h3>
                {aberto === 8 &&(
                    <p>Recomendamos utilizar o tamanho que você já usa normalmente ou entrar em contato para orientação.</p>
                )}
            </div>

            <div className="item" onClick={() => setAberto(aberto === 9 ? null : 9)}>
                <h3>
                    Vocês reservam produtos?
                                        <svg
                    className={`arrow ${aberto === 9 ? "open" : ""}`}
                    viewBox="0 0 24 24"
                    >
                    <path
                        d="M9 6l6 6-6 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    </svg>
                </h3>
                {aberto === 9 &&(
                    <p>Podemos reservar por um curto período mediante contato.</p>
                )}
            </div>

            <div className="item" onClick={() => setAberto(aberto === 10 ? null : 10)}>
                <h3>
                    Como entro em contato com a loja?
                                        <svg
                    className={`arrow ${aberto === 10 ? "open" : ""}`}
                    viewBox="0 0 24 24"
                    >
                    <path
                        d="M9 6l6 6-6 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    </svg>
                </h3>
                {aberto === 10 &&(
                    <p>Você pode entrar em contato através do WhatsApp disponível na página do produto.</p>
                )}
            </div>

        </div>
    )
}
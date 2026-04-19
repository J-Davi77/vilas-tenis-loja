import "./sac.css";
import React, { useState } from "react";

export function Sac() {
  const [aberto, setAberto] = useState(null);
  const perguntas = [
    {
      pergunta: "Como faço para comprar um tênis?",
      resposta:
        "As compras são realizadas presencialmente. Escolha o modelo desejado e entre em contato pelo WhatsApp para mais informações.",
    },

    {
      pergunta: "Vocês fazem entrega?",
      resposta:
        "No momento, não realizamos entregas. A retirada é feita presencialmente.",
    },

    {
      pergunta: "Quais formas de pagamento são aceitas?",
      resposta: "Aceitamos dinheiro, PIX e cartão de crédito/débito.",
    },

    {
      pergunta: "Os produtos são originais?",
      resposta:
        "Trabalhamos com produtos de alta qualidade e procedência garantida.",
    },

    {
      pergunta: "Posso trocar o produto?",
      resposta:
        "Sim, realizamos trocas em caso de defeito ou tamanho incorreto dentro do prazo informado.",
    },

    {
      pergunta: "Tem garantia?",
      resposta: "Sim, oferecemos garantia contra defeitos de fabricação.",
    },

    {
      pergunta: "Tem todos os tamanhos disponíveis?",
      resposta:
        "Os tamanhos podem variar conforme o modelo. Consulte disponibilidade antes da compra.",
    },

    {
      pergunta: "Como sei meu tamanho ideal?",
      resposta:
        " Recomendamos comparar a numeração com um calçado que você já usa ou entrar em contato para orientação.",
    },

    {
      pergunta: "Como entro em contato com a loja?",
      resposta:
        "Você pode entrar em contato através do WhatsApp disponível na página do produto.",
    },
    {
      pergunta: "Posso reservar um tênis?",
      resposta: "Podemos reservar por um curto período mediante contato.",
    },
  ];
  return (
    <div className="sac-container">
      <h2>Dúvidas Frequentes</h2>

      <div className="faq">
        {perguntas.map((pergunta, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-pergunta"
              onClick={() => setAberto(aberto === index ? null : index)}
            >
              <h3>{pergunta.pergunta}</h3>
              <svg
                className={`arrow ${aberto === index ? "open" : ""}`}
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 6l6 6-6 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            {aberto === index && (
              <p className="faq-resposta">{pergunta.resposta}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

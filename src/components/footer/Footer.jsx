import "./Footer.css";
import insta from '../../assets/imgs/icons/instagram.svg';
import zap from '../../assets/imgs/icons/whatsapp.svg';
import local from '../../assets/imgs/icons/local.svg';
import { NavLink } from "react-router-dom";

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <h2 className="footer-logo">VILA'S TÊNIS</h2>
                    <p className="footer-desc">Seu estilo começa nos pés.</p>
                </div>

                <nav className="footer-links">
                    <h3 className="footer-title">Links rápidos</h3>
                    <ul>
                        <li>
                            <NavLink to="/">Início</NavLink>
                        </li>
                        {/* <li>
                            <NavLink to="/"></NavLink>
                            <a href="#catalogo">Catálogo Inicial</a>
                        </li> */}
                        <li>
                            <NavLink to= "/casuais">Casual</NavLink>
                        </li>
                        <li>
                            <NavLink to="/esportivos">Esportivo</NavLink>
                        </li>
                        <li>
                            <NavLink to="/chuteiras">Chuteira</NavLink>
                        </li>
                        <li>
                            <NavLink to="/ajuda">Ajuda</NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="footer-contact">
                    <h3 className="footer-title">Contato</h3>
                    <p>
                        <img
                            src={local}
                            alt="localização"
                            width="24"
                        />
                        R. Maria Martins Batista, 1059 - Vila Sonia
                    </p>
                    <p>
                        <img
                            src={zap}
                            alt="Whatsapp"
                            width="24"
                        />
                        (13) 97828-3454
                    </p>
                    <p>
                        <img
                            src={insta}
                            alt="Instagram"
                            width="24"
                        />
                        <a
                            href="https://www.instagram.com/vilastenis"
                            target="_blank"
                            className="insta-loja"
                        >
                            @vilastenis
                        </a>
                    </p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    Site desenvolvido com ❤️ por 
                    <a
                        href="https://www.instagram.com/julio_davii_/"
                        className="meu-insta"
                        target="_blank"
                    >
                        <img
                            src={insta}
                            alt="Instagram"
                            width="20"
                        />
                        @julio_davii_
                    </a>
                </p>
            </div>
        </footer>
    );
}

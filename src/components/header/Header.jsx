import { NavLink } from "react-router-dom";
import "./Header.css";
import { Branding } from "../branding/Branding";
import casual from "../../assets/imgs/icons/casual.svg";
import sport from "../../assets/imgs/icons/sports.svg";
import chuteira from "../../assets/imgs/icons/chuteira.svg";
import ajuda from "../../assets/imgs/icons/ajuda.svg";
import menu from "../../assets/imgs/icons/menu.svg";

export function Header() {
    return (
        <header>
            
            <NavLink to="/" id="inicio">
                <h1 id="nome-loja">VILA'S <span id="tenis-titulo">TÊNIS</span></h1>
            </NavLink>

            <nav id="site-nav">
                <NavLink
                    to="/casuais"
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                >
                    <img src={casual} alt="Tênis casual" />
                    <span>Casual</span>
                </NavLink>
                <NavLink
                    to="/esportivos"
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                >
                    <img src={sport} alt="Tênis esportivo" />
                    <span>Esportivo</span>
                </NavLink>
                <NavLink
                    to="/chuteiras"
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                >
                    <img src={chuteira} alt="Chuteira" />
                    <span>Chuteira</span>
                </NavLink>
                <NavLink
                    to="/ajuda"
                    className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                    }
                >
                    <img src={ajuda} alt="Ajuda" />
                    <span>Ajuda</span>
                </NavLink>
            </nav>
            <button id="menu-btn">
                <img src={menu} alt="Menu" />
            </button>
        </header>
    );
}

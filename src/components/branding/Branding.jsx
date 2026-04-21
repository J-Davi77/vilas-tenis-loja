import "./Branding.css";
import logo from "../../assets/imgs/icons/loja.svg";
import { Link } from "react-router-dom";

export function Branding(){
    return(
        <Link to="/">
            Vila's <span>Tênis</span>
            <img src={logo} alt="Logo da marca"/>
        </Link>
    )
}

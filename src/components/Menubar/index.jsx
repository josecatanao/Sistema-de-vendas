import "./index.css"
import { RiShoppingBag3Line } from 'react-icons/ri';
import { BsBoxSeam } from 'react-icons/bs';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { FiTrello } from 'react-icons/fi';
import { Link } from "react-router-dom";

console.log(window.location.pathname)

export default function MenuBar(){
    return(
        <section id="bloco-menu">
            <header>
                <img src="https://picsum.photos/100" alt="fotouser" />
                <div>
                    <p>Olá 👋</p>
                    <p>Ana Paiva</p>
                </div>
            </header>
            <nav>
                <ul>
                    <li><Link className={window.location.pathname ==='/'?"selecionada": ""} to={"/"}><RiShoppingBag3Line/>Vendas</Link></li>
                    <li><Link className={window.location.pathname ==='/estoque'?"selecionada": ""} to={"/estoque"}><BsBoxSeam/>Estoque</Link></li>
                    <li><Link className={window.location.pathname ==='/historico'?"selecionada": ""} to={"/historico"}> <AiOutlineUnorderedList/>Venda historico</Link></li>
                    <li><Link className={window.location.pathname ==='/metricas'?"selecionada": ""} to={"/metricas"}> <FiTrello/>Metricas</Link></li>
                </ul>
            </nav>
        </section>
    )
}
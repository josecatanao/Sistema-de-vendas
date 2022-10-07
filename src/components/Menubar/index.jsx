import "./index.css"
import { RiShoppingBag3Line } from 'react-icons/ri';
import { BsBoxSeam } from 'react-icons/bs';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { FiTrello } from 'react-icons/fi';
export default function MenuBar(){
    return(
        <section id="bloco-menu">
            <header>
                <img src="https://picsum.photos/100" alt="fotouser" />
                <div>
                    <p>Olá👋</p>
                    <p>Ana Paiva</p>
                </div>
            </header>
            <nav>
                <ul>
                    <li><a className="selecionada" href="#"><RiShoppingBag3Line/>Vendas</a></li>
                    <li><a href="#"><BsBoxSeam/>Estoque</a></li>
                    <li><a href="#"> <AiOutlineUnorderedList/>Venda historico</a></li>
                    <li><a href="#"> <FiTrello/>Metricas</a></li>
                </ul>
            </nav>
        </section>
    )
}
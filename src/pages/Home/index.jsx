import MenuBar from "../../components/Menubar"
import { BsCart2 } from 'react-icons/bs';
import "./index.css"

export default function Home() {
    return (
        <div className="bloco-principal">
            <MenuBar />
            <div id="bloco-principal-home">
                <div id="bloco-saudacao-usuario">
                    <div id="bloco-boas-vindas">
                        <div>
                            <img src="https://picsum.photos/100" alt="fotouser" />
                            <div>
                                <p>Ana Paiva ✨</p>
                                <p>Olá Ana Paiva, tenha um ótimo dia de trabalho 🙏</p>
                            </div>
                        </div>
                        <div id="carrinho">
                           <BsCart2/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
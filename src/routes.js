import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Estoque from "./pages/Estoque"
import Historico from "./pages/Historico"
import Metricas from "./pages/Metricas"

export default function Rotas(){
    return(
        <>
           <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="estoque" element={<Estoque />} />
                    <Route path="historico" element={<Historico />} />]
                    <Route path="metricas" element={<Metricas />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
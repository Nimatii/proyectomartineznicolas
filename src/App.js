//css

import "./App.css";

//COMPONENTES

import Header from "./componentes/header/Header";

import Carrito from "./componentes/main/Carrito";
import ItemDetailContainer from "./componentes/main/ItemDetailContainer";
import ItemListContainer from "./componentes/main/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./componentes/main/Footer";





function App(){
    return (
    <BrowserRouter>
            <Header/> 
            <Routes>
                <Route path='/Inicio' element={<ItemListContainer nombre={'Agustin'}/>}/>
                <Route path='/Carrito' element={<Carrito/>}/>
                <Route path='/categoria/:id' element={<ItemListContainer/>}/>
                <Route path='/producto/:id' element={<ItemDetailContainer/>}/>
            </Routes>
            <Footer/>
    </BrowserRouter>
    );
}

export default App;
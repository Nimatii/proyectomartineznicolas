//css

import "./App.css";

//COMPONENTES

import Header from "./componentes/header/Header";
import ItemDetailContainer from "./componentes/main/ItemDetailContainer";
import ItemListContainer from "./componentes/main/ItemListContainer";


function App(){
    return (
        <div className="App">
            <div className="App-header">
                <h1>PROYECTO MARTINEZ</h1>
            </div>
            <Header /> 
            <ItemListContainer nombre="Agustin" />
            <ItemDetailContainer/>
        </div>
    );
}

export default App;
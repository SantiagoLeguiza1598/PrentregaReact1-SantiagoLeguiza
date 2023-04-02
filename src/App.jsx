
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import Home from './components/paginas/Home';
import Productos from './components/paginas/Productos';
import { ItemCount } from './ItemCount/ItemCount.jsx'
import { ItemListContainer } from './ItemListContainer/ItemListContainer.jsx'
export const App = () => {
    return (
      <div>
        <Navbar />
        <ItemCount />
        <ItemListContainer greeting={"Comprar Productos"} />
      </div>
          
    )


  }
  




export default App; 

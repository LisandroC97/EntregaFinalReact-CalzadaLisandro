
import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';
import { catalog } from './components/Catalog';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="Buenas!" />
    <catalog />
    </>
  );
}

export default App;

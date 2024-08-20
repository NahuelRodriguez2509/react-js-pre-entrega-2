import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {


  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="drinks los mejores precios en bebidas"/>
      <ItemCount/>
      <Footer/>
    </>
  );
}

export default App;
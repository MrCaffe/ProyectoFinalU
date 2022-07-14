//Tools
import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

//Components
import {NavBar} from './components/NavBar/NavBar.js'
import {Us} from './components/Us/Us.js'
import {Contact} from './components/Contact/Contact.js'
import {Footer} from './components/Footer/Footer.js'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.js'
import {ItemCount} from './components/ItemCount/ItemCount.js'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer.js'

function App() {

  // Datos que se van a mostrar y se pasan luego como propiedades en Us
  const nosotros = {
    title: "Esto es el titulo de US",
    content: "Esto es el contenido de US"
  }

  const contacto = {
    title: "Esto es el titulo de CONTACT",
    content: "Esto es el content de CONTACT"
  }

  const [mostrar, setMostrar] = useState(true)

  const mostrarCounter = () => {
    setMostrar(!mostrar)
  }


  return (
    <BrowserRouter>

      <NavBar/>
      

      <Routes>
        {/* Al estar en JSX, se pasan las referencias a las propiedades de un objeto con los {} */}
        <Route path='/categorias/:category' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<Navigate to = {'/categorias/:category'}/>}/>
        <Route path='/us' element={<Us title={nosotros.title} content={nosotros.content}/>}/>
        <Route path='/contact' element={<Contact title={contacto.title} content={contacto.content}/>}/>
        <Route path='/cart' element={<ItemDetailContainer/>}/>

      </Routes>
      {/*       
       <button className="my-4 mx-4" onClick={mostrarCounter}> Mostrar/Ocultar Counter</button>

        { 
          mostrar ? <ItemCount/> : " "
        }*/}

      <Footer/>

    </BrowserRouter>
  );
}

export default App;

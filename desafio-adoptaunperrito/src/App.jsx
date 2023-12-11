import './App.css'
import Header from './components/Header'
import MyCard from './components/Mycard'
import Footer from './components/Footer';

import CardGroup from 'react-bootstrap/CardGroup';


function App() {
  var   fuente1="http://localhost:5173/src/assets/img/bartolo.jpg", 
        nombreMascota1 = "Bartolo",
        descripcionMascota1 = 'Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!';  
  var   fuente2="http://localhost:5173/src/assets/img/messi.jpg", 
        nombreMascota2 = "Messi",
        descripcionMascota2 = 'Es juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!'; 
  var   fuente3="http://localhost:5173/src/assets/img/gohan.jpg", 
        nombreMascota3 = "Gohan",
        descripcionMascota3 = 'Un perro de tamaño mediano con un corazón gigante. ¡Hazte amigo de Gohan y experimenta un amor incondicional!'; 
  var   fuente4="http://localhost:5173/src/assets/img/princesa.jpg", 
        nombreMascota4 = "Princesa",
        descripcionMascota4 = 'Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a princesa a encontrar su final feliz!'; 
  return (
    <>
        <Header titulo="Adopta un Perrito"></Header>
        <CardGroup>
          <MyCard imagen={fuente1} nombre={nombreMascota1} descripcion={descripcionMascota1} tipoBgTexto="success" tipoBgDescripcion="Husky"></MyCard>
          <MyCard imagen={fuente2} nombre={nombreMascota2} descripcion={descripcionMascota2} tipoBgTexto="primary" tipoBgDescripcion="Bobtail"></MyCard>
          <MyCard imagen={fuente3} nombre={nombreMascota3} descripcion={descripcionMascota3} tipoBgTexto="danger" tipoBgDescripcion="Shar Pei"></MyCard>
          <MyCard imagen={fuente4} nombre={nombreMascota4} descripcion={descripcionMascota4} tipoBgTexto="warning" tipoBgDescripcion="Beagle"></MyCard>

        </CardGroup>
        <Footer titulo="Explora nuestra galería de adopción de perros para encontrar
                        a tu compañero perfecto. Tenemos una variedad de perros con 
                        diferentes personalidades y tamaños, todos en busca de un hogar
                        amoroso. Cada imagen captura su esencia única. Adopta un perro 
                        y brindale una segunda oportunidad. Encuentra a tu compañero 
                        peludo para siempre."></Footer>
    </>
  )
}

export default App

/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/
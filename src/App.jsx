import { Container } from 'react-bootstrap'
import { CategoriasProvider } from './context/CategoriaProvider'
import { BebidasProvider } from './context/BebidasProvider'
import { IngredientesProvider } from './context/IngredientesProvider'
import Formulario from './components/Formulario'
import ListadoBebidas from './components/ListadoBebidas'
import ModalBebida from './components/ModalBebida'

function App() {

  return (
    <CategoriasProvider>
      <IngredientesProvider>
        <BebidasProvider>
          <header className="py-5">
            <h1>Trago Trax</h1>
            <p>Encuentra la receta de tu bebida favorita</p>
          </header>

          <Container className='mt-5'>
            <Formulario />
            <ListadoBebidas />
            <ModalBebida/>

          </Container>
        </BebidasProvider>
      </IngredientesProvider>
    </CategoriasProvider>
  )
}

export default App

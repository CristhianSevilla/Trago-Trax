import { Container } from 'react-bootstrap'
import Formulario from './components/Formulario'
import { CategoriasProvider } from './context/CategoriaProvider'
import { BebidasProvider } from './context/BebidasProvider'
import { IngredientesProvider } from './context/IngredientesProvider'
import ListadoBebidas from './components/ListadoBebidas'

function App() {

  return (
    <CategoriasProvider>
      <IngredientesProvider>
        <BebidasProvider>
          <header className="py-5">
            <h1>Trago Trax</h1>
          </header>

          <Container className='mt-5'>
            <Formulario />
            <ListadoBebidas />
          </Container>
        </BebidasProvider>
      </IngredientesProvider>
    </CategoriasProvider>
  )
}

export default App

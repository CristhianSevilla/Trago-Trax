import { Container } from 'react-bootstrap'
import Formulario from './components/Formulario'
import { CategoriasProvider } from './context/CategoriaProvider'
import { BebidasProvider } from './context/BebidasProvider'

function App() {

  return (
    <CategoriasProvider>
      <BebidasProvider>
        <header className="py-5">
          <h1>Trago Trax</h1>
        </header>

        <Container className='mt-5'>
          <Formulario />
        </Container>
      </BebidasProvider>
    </CategoriasProvider>
  )
}

export default App

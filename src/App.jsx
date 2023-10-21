import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Crear from './pages/Crear'
import MostrarDetalleItem from './pages/MostrarDetalleItem'
import Editar from './pages/Editar'
import Eliminar from './pages/Eliminar'
import PrimeraPagina from './pages/PrimeraPagina'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<PrimeraPagina/>}/>
      <Route path='/home/' element={<Home/>}/>
      <Route path='/books/crear' element={<Crear/>}/>
      <Route path='/books/detalle/:id' element={<MostrarDetalleItem/>}/>
      <Route path='/books/editar/:id' element={<Editar/>}/>
      <Route path='/books/eliminar/:id' element={<Eliminar/>}/>
    </Routes>
  )
}

export default App
import './App.css'
import Cdrama from './components/Cdrama'
import Hot from './components/Hot'
import Thriller from './components/Thriller'
import Navbar from './components/Navbar'


function App() {
  return (
    <div className='App'>
      <Navbar />
      <Cdrama />
      <Thriller />
      <Hot />
    </div>
  )
}

export default App

import './App.css'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <Header></Header>

      <main className="flex 2xl:flex-row xl:flex-row lg:flex-col md:flex-col flex-col">
        <Cards></Cards>
        <Cart></Cart>
      </main>
    </>
  )
}

export default App

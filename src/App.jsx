import { useEffect, useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'

function App() {

  const [courses, setCourses] = useState([])

  useEffect(() => {
    (async() => {
      const res = await fetch("https://raw.githubusercontent.com/rahathossenantor/fun-with-api/main/data.json")
      const data = await res.json()
      setCourses(data)
    })()
  }, [])

  return (
    <>
      <Header></Header>

      <main className="flex 2xl:flex-row xl:flex-row lg:flex-col md:flex-col flex-col">
        <Cards courses={courses}></Cards>
        <Cart></Cart>
      </main>
    </>
  )
}

export default App

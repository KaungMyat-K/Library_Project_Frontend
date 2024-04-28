import './App.css'
import HomePage from './layouts/HomePage/HomePage'
import Footer from './layouts/NavBarAndFooter/Footer'
import NavBar from './layouts/NavBarAndFooter/NavBar'
import SearchBookPage from './layouts/SearchBookPage/SearchBookPage'

function App() {

  return (
    <>
      <NavBar/>
      {/* <HomePage/> */}
      <SearchBookPage/>
      <Footer/>
    </>
  )
}

export default App

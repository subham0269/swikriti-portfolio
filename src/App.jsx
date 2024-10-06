import About from "./Components/About"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Home from "./Components/Home"
import InfiniteScroll from "./Components/InfiniteScroll"
import MyWork from "./Components/MyWork"
import Navbar from "./Components/Navbar"
import Personal from "./Components/Personal"

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <MyWork />
      <Personal />
      <InfiniteScroll />
      <Contact />
      <Footer />
    </>
  )
}

export default App

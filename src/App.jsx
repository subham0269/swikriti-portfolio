import About from "./Components/About"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Home from "./Components/Home"
import InfiniteScroll from "./Components/InfiniteScroll"
import MyWork from "./Components/MyWork"
import Navbar from "./Components/Navbar"
import Personal from "./Components/Personal"
import Collaboration from "./Components/Collaboration"
import Swipe from "./Components/SwiperSlider"

function App() {

  return (
    <>
      <Navbar />
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <div className="h-16 bg-red"/>
        <About />
      </section>

      <section id="work">
        <div className="h-16 bg-red"/>
        <MyWork />
      </section>

      <section id="personal">
        <div className="h-16 bg-red"/>
        <Personal />
      </section>

      {/* <InfiniteScroll /> */}
      <Swipe />

      <section>
        <Collaboration />
      </section>

      <section id="contact">
        <div className="h-16 bg-red"/>
        <Contact />
      </section>
      <Footer />
    </>
  )
}

export default App

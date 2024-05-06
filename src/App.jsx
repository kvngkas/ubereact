import Navbar from "./component/Navbar"
import "./App.css"
import Hero from "./component/Hero"
import HeadlineCards from "./component/HeadlineCards"
import Food from "./component/Food"
import Category from "./component/Category"
function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards/>
      <Food/>
      <Category/>

    </div>
  )
}

export default App

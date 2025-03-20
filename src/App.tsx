import './App.css'
import { Hero } from "./components/Hero"
import CircularGallery from './reactbits/CircularGallery'

function App() {
  return (
    <>
      <Hero />
      <div className="h-150 relative">
        <CircularGallery bend={0} />
      </div>
    </>
  )   
}

export default App

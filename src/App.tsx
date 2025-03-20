import './App.css'
import { Hero } from "./components/Hero"
import CircularGallery from './reactbits/CircularGallery'
import FuzzyText from './reactbits/FuzzyText'
import ScrollReveal from './reactbits/ScrollReveal'

function App() {

  return (
    <>
      {/* <Hero /> */}
      {/* <div className="h-150 relative">
        <CircularGallery bend={0} />
      </div> */}
      <div className="m-20">
        <FuzzyText 
          baseIntensity={0.1} 
          color='#fff'
        >
          Welcome to the lab
        </FuzzyText>
      </div>
      <p className="text-l mx-auto mt-10 text-white font-semibold columns-2 gap-8 max-w-screen-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum earum aliquam error explicabo, obcaecati deleniti quisquam maiores rem cumque optio architecto provident laboriosam delectus amet eum nobis ea blanditiis labore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quibusdam rerum placeat voluptas optio minima consequuntur! Cumque cupiditate fuga molestias quis odit! Consequuntur dolor fugiat ut similique eius placeat autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quibusdam rerum placeat voluptas optio minima consequuntur! Cumque cupiditate fuga molestias quis odit! Consequuntur dolor fugiat ut similique eius placeat autem.</p>
      <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery bend={0} textColor="#ffffff" borderRadius={0.05} />
      </div>
      <div className="w-1/2 mx-auto my-50">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
          textClassName='text-white'
        >
          It's crazy all the things you can do here, sky is the limit! Like this text, it reveal itself when you scroll. Then you want to keep scrolling to see more. Scroll, scroll, SCROLL!
        </ScrollReveal>
      </div>
    </>
  )   
}

export default App

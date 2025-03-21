import './App.css'
import { Hero } from "./components/ui/animated-hero"
import { Navigation } from "./components/Navigation"
import ScrollReveal from './components/reactbits/ScrollReveal';
import { FeaturesSectionWithHoverEffectsDemo } from './components/Features';

function App() {

  return (
    <div className="block">
      <Navigation />
      <Hero />
      <div className="block max-w-7xl mx-auto">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
        >
          I created this website to experiment with React libraries focused on creating animated components. It's crazy all we can do! ReactBits, Framer Motion, ShadcnUI, 21st Dev and many more!
        </ScrollReveal>
      </div>
      <FeaturesSectionWithHoverEffectsDemo />
    </div>
  )
}

export default App

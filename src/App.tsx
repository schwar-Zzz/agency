import HeroSection from "./component/ui/heroSection"
import DropMenu from "./component/ui/DropMenu"
import Services from "./component/Services"
import ParallaxScroll from "./component/ui/ParallaxScroll"
function App() {

  return (
    <>
      <DropMenu />
      <HeroSection />
      <Services />
      {/* <ParallaxScroll
        firstSection={<HeroSection />}
        nextSection={<Services />}
      /> */}
    </>
  )
}

export default App

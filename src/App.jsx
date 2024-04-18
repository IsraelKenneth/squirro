import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Banner, BentoSide, CustomersLogo, DiscoverMore, DomainSpecific, Feedback, Footer, Hero, Navbar, Rag, SolvingData, Trial, VideoBanner, WhyLove } from './components'

function App() {

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <BrowserRouter>
    <div className='overflow-hidden w-full'
    id="main-container" data-scroll-container>
    <Navbar />
    <Hero />
    <CustomersLogo />
    <VideoBanner />
    <BentoSide />
    <Trial />
    {/* <WhyLove /> */}
    {/* <Feedback /> */}

    <SolvingData />
    <DomainSpecific />
    <Rag />
    <DiscoverMore />
    <Banner />
    <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App

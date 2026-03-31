import Digitools from "./components/Digitools"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Stats from "./components/Stats"
import Steps from "./components/Steps"
import TransparentPricing from "./components/TransparentPricing"

const getDigiTools=async()=>{
const res=await fetch('/data.json')
return res.json()
}

const digiToolPromise=getDigiTools();

function App() {



  return (
    <>
     <NavBar></NavBar>
     <Hero></Hero>
     <Stats></Stats>
     <Digitools digiToolPromise={digiToolPromise}></Digitools>
     <Steps></Steps>
     <TransparentPricing></TransparentPricing>
     <Footer></Footer>
    </>
  )
}

export default App

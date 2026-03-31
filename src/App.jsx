import { useState } from "react"
import Digitools from "./components/Digitools"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Stats from "./components/Stats"
import Steps from "./components/Steps"
import TransparentPricing from "./components/TransparentPricing"
import Cart from "./components/Cart"

const getDigiTools=async()=>{
const res=await fetch('/data.json')
return res.json()
}

const digiToolPromise=getDigiTools();

function App() {

  const [activeTab , setActiveTab] = useState('model')

  const [carts , activeCarts]= useState([])

 



  return (
    <>
     <NavBar></NavBar>
     <Hero></Hero>
     <Stats></Stats>

     <div>
            <h1 className="text-center mt-14 md:mt-20 text-[#101727] text-3xl md:text-[48px] font-bold px-4">
    Premium Digital Tools
  </h1>
  <p className="text-center text-[#627382] px-4 mb-14 md:mb-20 text-sm md:text-base">
Choose from our curated collection of premium digital products designed <br/>to boost your productivity and creativity.  </p>
           </div>


           <div className="tabs tabs-box my-10 justify-center max-w-90 gap-3 bg-white rounded-3xl mx-auto">
  <input  type="radio" name="my_tabs_1" className={`tab rounded-full text-center transition-all duration-300 
        w-full sm:w-40 py-2
        ${
          activeTab === "model"
            ? "text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
            : "bg-white text-black border  border-gray-300 "
        }`} aria-label="Products"  defaultChecked onClick={()=>setActiveTab('model')} />
  <input  type="radio" name="my_tabs_1" className={`tab rounded-full text-center transition-all duration-300 
        w-full sm:w-40 py-2
        ${
          activeTab === "cart"
            ? "text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
            : "bg-white text-black border  border-gray-300"
        }`} aria-label="Cart (0)" onClick={()=>setActiveTab('cart')} />
  
</div>

{ activeTab=== 'model' && <Digitools digiToolPromise={digiToolPromise} carts={carts} activeCarts={activeCarts}></Digitools>}


     
   {activeTab=== 'cart' && <Cart carts={carts}></Cart>}  
     <Steps></Steps>
     <TransparentPricing></TransparentPricing>
     <Footer></Footer>
    </>
  )
}

export default App

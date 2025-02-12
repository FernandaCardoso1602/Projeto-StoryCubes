import './Body.css'
import { GiAmpleDress } from "react-icons/gi";
import { GiAnt } from "react-icons/gi";

function Body() {
    const icons = [<GiAmpleDress />, <GiAnt />]
  
    let n = Math.floor(Math.random() * icons.length)
  
    console.log(icons[n])
  
    return (
      <>
        <Header />
        <Body />
      </>
    )
  }
      

export default Body

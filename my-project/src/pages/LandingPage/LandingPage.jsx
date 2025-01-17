
import Hero from "./Hero"
import About from "./About"


const LandingPage = (props) =>{

    return(
        <>

        <Hero  mousePosition= {props.mousePosition} handleMouseMove={props.handleMouseMove} isMobile={props.isMobile} />
        <About/>

        
        
        </>
    )


}



export default LandingPage
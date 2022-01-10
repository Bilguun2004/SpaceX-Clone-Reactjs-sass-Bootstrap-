import React , {useState,useEffect} from 'react'
import { Controller, Scene } from 'react-scrollmagic';
import Header from "./Header"
import Container from "react-bootstrap/Container"
import CountUp from "react-countup"
import VisibilitySensor from 'react-visibility-sensor';
import "../styles/Falcon9.scss"
import falcon9 from "../assets/falcon9.jpg"
import Fade from 'react-reveal/Fade';
import aos from 'aos';
import "aos/dist/aos.css"
import Footer from './Footer';
const Falcon9 = () =>{
    useEffect(()=>{
        aos.init({duration: 1500});
    })
    const[offsetY,setoffsetY] = useState(0);
    const handleScroll = () =>{
        setoffsetY(window.pageYOffset)
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener("scroll",handleScroll)
    },[])
    return(
        <Container fluid style={{padding:0}}>
            <Header/>
            <div className='falconimg' style={{transform: `translateY(${offsetY * 0.5}px)`}}>
                <Fade up cascade>
                <div className='column'>
                     <span className="falconimg-text1">FALCON 9</span>
                    <span className="falconimg-text2">FIRST ORBITAL CLASS ROCKET CAPABLE OF REFLIGHT</span>
                </div>
                </Fade>       
            </div>
            <div className='d-flex justify-content-center align-items-center stats'  >
                <div className='d-flex flex-row w-90 justify-content-center align-items-center stats-section' >
                    <div className='stats-section-item d-flex flex-column justify-content-center align-items-center'>
                        <CountUp end={134} duration={1} redraw={true}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <span className='stats-section-item-text'>TOTAL LAUNCHES</span>
                    </div>
                    <div className='stats-section-item d-flex flex-column justify-content-center align-items-center'>
                        <CountUp end={94} duration={1} redraw={true}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <span className='stats-section-item-text'>TOTAL LANDINGS</span>
                    </div>
                    <div className='stats-section-item d-flex flex-column justify-content-center align-items-center'>
                        <CountUp end={75} duration={1} redraw={true}>
                            {({ countUpRef, start }) => (
                                <VisibilitySensor onChange={start} delayedCall>
                                    <span ref={countUpRef} />
                                </VisibilitySensor>
                            )}
                        </CountUp>
                        <span className='stats-section-item-text'>REFLOWN ROCKETS</span>
                    </div>
                
                </div>
            </div>
            {/* <Controller style={{transform: `translateY(${offsetY}px)`}}>
                <Scene duration={5000} pin> */}
                    <div class="Rocket-section" >
                        <div className='Rocket-section-text' data-aos="fade-up"
                            data-aos-offset="500"
                            data-aos-duration="500">
                            Falcon 9 is a reusable, two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of people and payloads into Earth orbit and beyond. Falcon 9 is the world’s first orbital class reusable rocket. Reusability allows SpaceX to refly the most expensive parts of the rocket, which in turn drives down the cost of space access.
                        </div>
                    </div>
                {/* </Scene>
            </Controller> */}
            <Footer/>
            
        </Container>
        
    )
}
export default Falcon9
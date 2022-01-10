import "../styles/Home.scss"
import React , {useState,useEffect} from 'react'
import Header from "./Header"
import Container from "react-bootstrap/Container"
import Footer from "../components/Footer"
import Fade from 'react-reveal/Fade';
import aos from 'aos';
const Home = () =>{
    useEffect(()=>{
        aos.init({duration: 1500});
    })
    return(
        <Container fluid style={{padding:0}}>
            <Header/>
            <div className="Home-1">
            <Fade up cascade>
                <div className="Home-textContainer">
                <Fade up cascade className='text'>
                    <div className="text">
                        <span className="text-1">RECENT LAUNCH</span>
                        <span className="text-2">STARLINK MISSION</span>
                    </div>
                </Fade>
                    <button class="watch-button">RE-WATCH</button>
                </div>
            </Fade>
            </div>
            <div className="Home-2">
            <Fade up cascade>
                <div className="Home-textContainer">
                <Fade up cascade className='text'>
                    <div className="text">
                        <span className="text-1">RECENT LAUNCH</span>
                        <span className="text-2">CRS-24 MISSION</span>
                    </div>
                </Fade>
                    <button class="watch-button">RE-WATCH</button>
                </div>
            </Fade>
            </div>
            <div className="Home-3">
            <Fade up cascade>
                <div className="Home-textContainer">
                <Fade up cascade className='text'>
                    <div className="text">
                        <span className="text-1">RECENT LAUNCH</span>
                        <span className="text-2">CRS-24 MISSION</span>
                    </div>
                </Fade>
                    <button class="watch-button">RE-WATCH</button>
                </div>
            </Fade>
            </div>
            <div className="Home-4">
            <Fade up cascade>
                <div className="Home-textContainer">
                <Fade up cascade className='text'>
                    <div className="text">
                        <span className="text-1">RECENT LAUNCH</span>
                        <span className="text-2">CRS-24 MISSION</span>
                    </div>
                </Fade>
                    <button class="watch-button">RE-WATCH</button>
                </div>
            </Fade>
            </div>
            <div className="Home-5">
            <Fade up cascade>
                <div className="Home-textContainer">
                <Fade up cascade className='text'>
                    <div className="text">
                        <span className="text-1">RECENT LAUNCH</span>
                        <span className="text-2">CRS-24 MISSION</span>
                    </div>
                </Fade>
                    <button class="watch-button">LEARN MORE</button>
                </div>
            </Fade>
            </div>
            {/* <Footer/> */}
        </Container>
    )
}
export default Home
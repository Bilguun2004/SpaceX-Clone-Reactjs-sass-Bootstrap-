import "../styles/Header.scss"
import Container from "react-bootstrap/Container"
import { Navbar } from "react-bootstrap"
import SpaceX from "../assets/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css'
import Hamburger from 'hamburger-react'
import { Outlet, Link } from "react-router-dom";
import {useState} from 'react'
import { Row ,Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
const Header = () =>{
    
    const[burgermenu,setburgermenu]=useState(false)

    const burger =() =>{
        setburgermenu(!burgermenu)
    }
    return(
        <Container fluid className="d-flex flex-row " className="headercontainer">
            {console.log(burgermenu)}

            
            {burgermenu && <div className="rightmenu" onClick={burger}>
                <div data-aos="fade-left" className="menu">
                    <Fade right cascade>
                        <div className="menu">
                        <span className="menu-text">MISSION</span>
                        <span className="menu-text">LAUNCHES</span>
                        <span className="menu-text">CAREERS</span>
                        <span className="menu-text">UPDATES</span>
                        <span className="menu-text">SHOP</span>
                        </div>
                        
                    </Fade>
                </div>
            </div>}

            <Col className="texts">
                <Navbar.Brand >
                    <Link to={'/'}>
                    <img className="img" src={SpaceX} height={'26.5px'} width={'210px'}/>
                    </Link>
                </Navbar.Brand>
                <Col lg='false' className="t col-lg-12">
                    <Link to="/falcon-9" className="headertext">FALCON9</Link>
                    <h1 className="headertext">FALCON HEAVY</h1>
                    <h1 className="headertext">DRAGON</h1>
                    <h1 className="headertext">STARSHIP</h1>
                    <h1 className="headertext">HUMAN SPACEFLIGHT</h1>
                    <h1 className="headertext">RIDESHARE</h1> 
                </Col>
                
            </Col>
            <div className="burgermenu">
                <span className="burgermenu-text">SHOP</span>
                <Hamburger onToggle={burger} size={18} style={"z-index:999;"}/>
            </div>
        </Container>
    )
}
export default Header



// return(
//     <Container fluid className="d-flex flex-row " className="headercontainer">

        
//         {/* <div className="rightmenu" onClick={burger}>
//             <div data-aos="fade-left" className="menu">
//                 <span className="menu-text">MISSION</span>
//                 <span className="menu-text">LAUNCHES</span>
//                 <span className="menu-text">CAREERS</span>
//                 <span className="menu-text">UPDATES</span>
//                 <span className="menu-text">SHOP</span>
//             </div>
//         </div> */}

//         <div className="texts">
//             <Navbar.Brand >
//                 <Link to={'/'}>
//                 <img className="img" src={SpaceX} height={'26.5px'} width={'210px'}/>
//                 </Link>
//             </Navbar.Brand>
//             <div style={}  className="t">
//             <Link to="/falcon-9" className="headertext">FALCON9</Link>
//             <h1 className="headertext">FALCON HEAVY</h1>
//             <h1 className="headertext">DRAGON</h1>
//             <h1 className="headertext">STARSHIP</h1>
//             <h1 className="headertext">HUMAN SPACEFLIGHT</h1>
//             <h1 className="headertext">RIDESHARE</h1> 
//             </div>
            
//         </div>
//         <div className="burgermenu">
//             <span className="burgermenu-text">SHOP</span>
//             <Hamburger onClick={burger} size={18} style={"z-index:999;"}/>
//         </div>
//     </Container>
// )
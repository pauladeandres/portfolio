import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Home.css'
import Section1 from './Section1'
import SectionContact from './SectionContact'
import code from './../../../assets/embed.png'


import { InView } from 'react-intersection-observer';
// import HorizontalScroll from 'react-scroll-horizontal'

export default function Home() {

    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        
        <div className= 'Parallax screen-container'>

                <Row className = 'container-animation'>
                    
                    <Col>
                    <h1 
                    className='huge' 
                    style={{ transform: `translateX(${-offsetY * 0.3}px)` }}>
                        WEB 
                    </h1>
                    <h1 
                    className='huge2' 
                    style={{ transform: `translateX(${offsetY * 0.3}px)` }}>
                        DEV 
                    </h1>
                    </Col>
                </Row>
            <Row>
                <Col className='fixed-background'>
                    <h2 
                    style={{ transform: `translateX(${-offsetY * 0.8}px)` }}
                    className='quote'>
                        WHAT I'VE BEEN UP TO... WHAT I'VE BEEN UP TO... WHAT I'VE BEEN UP TO... WHAT I'VE BEEN UP TO... WHAT I'VE BEEN UP TO... WHAT I'VE BEEN UP TO... WHAT I'VE BEEN UP TO...
                    </h2>
                </Col>
            </Row>
            <Row className='cv-row'>
                <Col>
                    <div className='section1'>
                        <h1 className="cv-list"><span id='text-change'></span></h1>
                    </div>
                </Col>
                <Col className='code-icon'>
                    <img src={code}
                        style={{ transform: `rotate(${offsetY}deg)` }} />
                </Col>
                <Col>
                    <div className='section1'>
                        <h1 className="cv-list"><span id='text-change-design'></span></h1>
                    </div>
                </Col>
            </Row>
                
            <Section1/>
            <SectionContact />
            
        </div>
       
        
    );
}

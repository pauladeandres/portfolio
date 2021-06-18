import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Home.css'
import code from './../../assets/embed.png'
import { useInView } from 'react-intersection-observer'
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
            
                <Row className='container'>
                    <Col md={6}>
                        <h2 className='small-titles'>PAULA DE ANDRES</h2>
                    </Col>
                    <Col md={6}>
                        <h2 className='small-titles'>ABOUT</h2>
                    </Col>
                    
                </Row>

                <Row>
                    <div className='animation'>
                    <Col>
                    <h1 
                    className='huge' 
                    style={{ transform: `translateX(${-offsetY * 0.5}px)` }}>
                        WEB 
                    </h1>
                    <h1 
                    className='huge2' 
                    style={{ transform: `translateX(${offsetY * 0.5}px)` }}>
                        DEV 
                    </h1>
                    </Col>
                </div>
                </Row>

                <Row>
                    <Col className='code-icon'>
                    <img src={code}
                        style={{ transform: `rotate(${offsetY * 1}deg)` }}/>
                    </Col>
                </Row>
                
        </div>
       
        
    );
}

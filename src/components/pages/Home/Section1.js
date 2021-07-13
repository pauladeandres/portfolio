import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Section1.css'
import portrait from './../../../assets/retrato.jpg'
import { useInView, InView } from 'react-intersection-observer'


export default function Section1() {
    const [isInView, setInView] = useState('false')
    const { ref, inView, entry } = useInView()
    //pictureDiv.style.transform ='translateY(50px)'
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    
    const portraitSelector = document.querySelector('.portrait img')
    // console.log(window.pageYOffset)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleClass = () => {
        setInView(!isInView)
        console.log(portraitSelector)
    }

    return (
        <div>
            <Row className='bio-container'>
                <Col className='Parallax portrait' md={4} ref={ref}>
                    <InView onChange={(inView, entry) => toggleClass()}>
                    <img src={portrait} className={isInView ? 'move-left' : 'first-place'}/>
                    </InView>
                </Col>
                <Col className='bio' md={8} >
                    <h1 className={isInView ? 'appear' : null}>ABOUT</h1>
                    <p >Hi, I'm Paula de Andrés, <strong>Full Stack Developer</strong> based in Madrid  and currently
                        looking for new opportunities.</p>
                    <p>My experience in Fashion for almost 10 years gave me special skills for designing
                        great products that merge aesthetics and attention to detail.</p>
                    <p>After all those years I decided to change my career when I started participating in
                        digital projects and finally wanted to be part of the digitalization process the world is 
                        currently experiencing.</p>
                </Col>
            </Row>
        </div>
    );
}

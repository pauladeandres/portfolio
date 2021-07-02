import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Web.css'
import { InView } from 'react-intersection-observer';


export default function Home() {

    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (

        <div>

            <Row className='about'>
                <Col className='bio typewriter'>
                    <h1>
                        UNDER CONSTRUCTION
                    </h1>
                </Col>
            </Row>

        </div>


    );
}
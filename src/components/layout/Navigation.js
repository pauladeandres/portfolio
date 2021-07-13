import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import {Link } from 'react-router-dom'
import './Navigation.css'
// import { useInView } from 'react-intersection-observer'


export default function Navigation() {

    return (
        
        <Row className='container-nav'>
                
            <Col className='navigation'>
                <Link to="/" className='nav-links'>PAULA DE ANDRES</Link>
            </Col>
            <Col className='navigation'>
                <a href="https://github.com/pauladeandres" className='nav-links'>WEB DEVELOPMENT</a>
            </Col >
            <Col className='navigation'>
                <a href="https://www.pauladeandres.com/" target='_blank' className='nav-links'>FASHION</a>
            </Col>
            <Col className='navigation'>
                <Link to="/about" className='nav-links'>ABOUT</Link>
            </Col>
        </Row>

    );
}
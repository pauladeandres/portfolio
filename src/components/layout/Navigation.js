import React, { useState, useEffect } from 'react'
import { Nav, Row, Col } from 'react-bootstrap'
import './Navigation.css'
// import { useInView } from 'react-intersection-observer'


export default function Navigation() {

    return (
        
        <Row className='container-nav'>
            
                <a className='small-titles' href='/'>PAULA DE ANDRES</a>
                <a className='small-titles' href='/web-projects'>WEB DEVELOPMENT</a>
                <a className='small-titles' href='/fashion-projects'>FASHION</a>
                <a className='small-titles' href='/about'>ABOUT</a>
            
        </Row>

    );
}
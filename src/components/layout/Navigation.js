import React, { useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import {Link } from 'react-router-dom'
import './Navigation.css'
// import { useInView } from 'react-intersection-observer'


export default function Navigation() {

    return (
        
        <Row className='container-nav'>
            
                <Link to="/" className='small-titles'>PAULA DE ANDRES</Link>
                <Link to="/web-projects"className='small-titles' >WEB DEVELOPMENT</Link>
                <Link to="/fashion-projects" className='small-titles'>FASHION</Link>
                <Link to="/about" className='small-titles'>ABOUT</Link>
            
        </Row>

    );
}
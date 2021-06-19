import React, { useState, useEffect } from 'react'
import { Nav, Row, Col } from 'react-bootstrap'
import './Navigation.css'
// import { useInView } from 'react-intersection-observer'


export default function Navigation() {

    return (
        
        <Row className='container-nav'>
            
                <h3 className='small-titles'>PAULA DE ANDRES</h3>
                <h3 className='small-titles'>WEB DEVELOPMENT</h3>
                <h3 className='small-titles'>FASHION</h3>
                <h3 className='small-titles'>ABOUT</h3>
            
        </Row>

    );
}
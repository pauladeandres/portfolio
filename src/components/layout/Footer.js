import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Footer.css'
// import { useInView } from 'react-intersection-observer'


export default function Footer() {

    return (
        <footer>
        <Row className='footer'>

            <Col md={6}>
                <h1 className='footer-titles'>Contact</h1>
                <h2 className='footer-subtitles-pink'>p.andrescaldevilla@gmail.com</h2>
                <h2 className='footer-subtitles-blue'>(+34)650168119</h2>
            </Col>
            <Col md={6}>
                <h1 className='footer-titles'>Follow me</h1>
                <a href='https://www.instagram.com/pol.studio' target='_blank' style={{ textDecoration: 'none' }}>
                    <h2 className='footer-subtitles-green'>Instagram</h2>
                </a>
                <a href='https://www.linkedin.com/in/paula-de-andres/' target='_blank' style={{ textDecoration: 'none' }}>
                    <h2 className='footer-subtitles-yellow'>Linkedin</h2>
                </a>
            </Col>

        </Row>
        </footer>
    );
}
import React, { useState, useEffect } from 'react'
import { Container, Form, Row, Col, Button } from 'react-bootstrap'
import './SectionContact.css'
import emailjs from 'emailjs-com';
import { useInView, InView } from 'react-intersection-observer'


export default function SectionContact() {
    // const [isInView, setInView] = useState('false')
    // const { ref, inView, entry } = useInView()
    // //pictureDiv.style.transform ='translateY(50px)'
    // const [offsetY, setOffsetY] = useState(0);
    // const handleScroll = () => setOffsetY(window.pageYOffset);

    // const portraitSelector = document.querySelector('.portrait img')
    // console.log(window.pageYOffset)

    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    // const toggleClass = () => {
    //     setInView(!isInView)
    //     console.log(portraitSelector)
    // }
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_bakhj3y', 'contact_form', e.target, 'user_ILDnMeneQcmER9IQNrkjo')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
    
            <div>
            <Row className='contact-container'>
                <Col md={4} className='more-info'>
                    <h1> </h1>
                    <h1>MORE</h1>
                    <h1>INFO</h1>
                    {/* <form className="contact-form" onSubmit={sendEmail}>
                        <input type="hidden" name="contact_number" />
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                    </form> */}
                    </Col>
                    <Col>
                    <Form className="contact-form" onSubmit={sendEmail}>
                        <Form.Group>
                            <Form.Label>NAME</Form.Label>
                            <Form.Control type="text" name="user_name"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>EMAIL  ADDRESS</Form.Label>
                            <Form.Control type="email" name="user_email" placeholder="email@example.com" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>YOUR MESSAGE</Form.Label>
                            <Form.Control as="textarea" rows={3} name="message" />
                        </Form.Group>
                        <Button block className='button-submit' variant="dark" type="submit" value="Send">
                            SEND
                        </Button>
                    </Form>
                </Col>
            </Row>
            </div>
       
    );
}
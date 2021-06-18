import React, { useState, useEffect } from 'react'
import './Section1.css'
// import { useInView } from 'react-intersection-observer'


export default function Section1() {

    // const { ref, inView, entry } = useInView(options)

    // const [offsetY, setOffsetY] = useState(0);
    // const handleScroll = () => setOffsetY(window.pageYOffset);

    // console.log(window.pageYOffset)

    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    return (
        <div>
                <div className='section1'>
                    <h1 className="cv-list">HTML5 / CSS / JAVASCRIPT / MONGODB / REACT.JS / NODE.JS / SASS / PHOTOSHOP / ILLUSTRATOR / INDESIGN</h1>
                </div>
        </div>
    );
}

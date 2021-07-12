import React, { useState, useEffect } from 'react'
import StackGrid from "react-stack-grid";
import './Fashion.css'
import celine from './../../../assets/celine_prefall17.jpg'
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

            <StackGrid columnWidth={200}>
                <img src={celine} />
                <div key="key2">Item 2</div>
                <div key="key3">Item 3</div>
            </StackGrid>

        </div>


    );
}
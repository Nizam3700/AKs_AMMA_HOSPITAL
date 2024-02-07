import React from 'react'
import { Link } from 'react-router-dom'
import Gallery from './Compond/Gallery';

export default function Home() {
    return (
        <>
        {/* Slider side   */}
        
        

        {/* Gallery  */}
        <div className=' mx-12 my-10 p-12'>
            <Gallery/>
        </div>
        <div className=' mx-12 my-10 p-12'>
            <Gallery/>

        </div>
        </>
    );
}

import React from 'react'
import CardDoctor from '../Compound/CardDoctor';
import CardDepart from '../Compound/CardDepart';

export default function About1() {
    return (
        <>
{/* Card Department  */}
<div className='sm:flex  justify-evenly'>
<CardDepart/>
<CardDepart/>
<CardDepart/>
<CardDepart/>
</div>

{/* // card  */}
    <div className='sm:flex '>
    <CardDoctor/>
    <CardDoctor/>
    <CardDoctor/>
    <CardDoctor/>
    </div>
</>
    );
}
import React from 'react';
import './Title.css'

function Title({title,subtitle}) {
    return (
        <div>
        <h1 className='text-4xl text-gray-500 title'>{title}</h1>
        <p className='text-zinc-900'>{subtitle}</p>
    </div>
    )
}

export default Title

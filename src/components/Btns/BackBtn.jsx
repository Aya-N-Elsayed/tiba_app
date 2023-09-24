import React from 'react'
import {  useNavigate } from 'react-router-dom'

export function BackBtn() {
    
    const navigation = useNavigate();
    return (
        <div>
            <button className='btn btn-outline-primary h-25'
                type='button'
                onClick={() => {
                    navigation(-1);
                }}
            > 
                رجوع

            </button>
        </div>
    )
}

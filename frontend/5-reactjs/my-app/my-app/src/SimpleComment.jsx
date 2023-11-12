import React from 'react'
import './App.css'
import { useState } from 'react'
export default function SimpleComment({data, onUpdateLikes}) {
   
    const [visible, setVisible]=useState(true);
    const [liked, setliked]=useState(false);
    const callliked = ()=>{
        const updatedLikes = data.likes + (liked ? -1 : 1);
        onUpdateLikes(data.id, updatedLikes);
        setliked(!liked)
    }
    return (
        <>
            <div className='row'>
                <h3>Name: {data.author}</h3>
                <p>Comment: {data.text}</p>
                <p><b>Likes:</b> {data.likes}</p>
                <button onClick={()=>{visible?setVisible(false):setVisible(true)}}>{visible? 'hide':'show'}</button>
                <button onClick={callliked} >{liked? 'dislike':'Like'}</button>

            </div>
    </>
  )
}

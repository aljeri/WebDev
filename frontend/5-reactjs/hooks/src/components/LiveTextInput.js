import React, {useState} from 'react'


function LiveTextInput(){
    const [text, setText]= useState('');

    const HandleChange = (event)=>{
        setText(event.target.value)

    }
    return(
        <>
            <input type='text' onChange={HandleChange} placeholder='type here..' />
            <p>{text? text:"text goes here"}</p>
        </>
    );
}

export default LiveTextInput;
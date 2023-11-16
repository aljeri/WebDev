import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState,useEffect, useRef} from 'react';
import {Link} from 'react-router-dom'
import apiRequest from '../../apiRequests';
const user_regex= /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const pwd_regex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const API_URL="http://localhost:8500/users"


export default function Register() {

    const [user,setUser]= useState('');
    const [validName, setvalidName]= useState(false); //is the name correct
    const [nFocus, setnFocus]= useState(false); //focus on the input field

    const [pwd,setPwd]= useState('');
    const [validPass, setvPass]= useState(false); 
    const [passFocus, setpFocus]= useState(false); 

    const [mpwd,setmPwd]= useState('');
    const [vmPass, setvmPass]= useState(false); 
    const [mpfocus, setmpFocus]= useState(false); 
    
    const [errMsg, setErr]= useState('');
    const [success, setSuccess]= useState(false);

  

    useEffect(()=>{
        setvalidName(user_regex.test(user))
    },[user])

    useEffect(()=>{
        console.log(pwd)
        console.log(pwd_regex.test(pwd))
        setvPass(pwd_regex.test(pwd))
        setvmPass(pwd===mpwd)
    },[pwd,mpwd])

  
    const handleRegister = async (e) =>
    {
        e.preventDefault();
        //check with server if the entries are valid
        //check with server if user does not exist
        //check with server if information are saved
        const postOption = {
            method:'POST',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify({'id':user,'password':pwd})
        }
        const result= await apiRequest(API_URL, postOption);
        if(result) setErr('Must use unique username');
        else setSuccess(true);
        setUser('')
        setPwd('')
        setmPwd('')
    }
  return (
    <>   
     {success? (
        <div>
            <h3>Success!</h3>
            <p>Sign in!</p>
        </div>
     ):(
     <div className='col-5 m-auto'>
        <p  className={errMsg ? "errmsg" : "offscreen"} >{errMsg}</p>
        <h3>Register</h3>
        <form onSubmit={handleRegister}>
            <label htmlFor='username'>Username: </label>
            <input 
                type='text' 
                id='username' 
                required
                value={user}
                autoComplete='off'
                onChange={(e)=>setUser(e.target.value)}
                aria-invalid={validName?'false':'true'}
                aria-describedby='usernote'
                onFocus={()=>setnFocus(true)}
                onBlur={()=>setnFocus(false)}
            />
            <p id='usernote' className={nFocus && user && !validName? "instructions": "offscreen"}>
               4 to 24 characters <br/>
               must begin with a letter <br/>
            </p> 

            <label htmlFor="password"> Password: </label>
            <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                aria-invalid={validPass ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setpFocus(true)}
                onBlur={() => setpFocus(false)}
            />
            <p id="pwdnote" className={passFocus && !validPass ? "instructions" : "offscreen"}>
                8 to 24 characters.<br />
                Must include uppercase and lowercase letters, a number and a special character.<br />
            </p>



            <label htmlFor="confirm_pwd">Confirm Password: </label>
            <input
                type="password"
                id="confirm_pwd"
                onChange={(e) => setmPwd(e.target.value)}
                value={mpwd}
                required
                aria-invalid={vmPass ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setmpFocus(true)}
                onBlur={() => setmpFocus(false)}
            />
            <p id="confirmnote" className={mpfocus && !vmPass ? "instructions" : "offscreen"}>
                Must match the first password input field.
            </p>

            <button disabled={!validName || !validPass || !vmPass ? true : false}>Sign Up</button>


        </form>
        <p>  Already registered? 
             <span className="line">
                <Link to='/login'> Sign In</Link>
            </span>
        </p>
    </div>
     )}
    </>

  )
}

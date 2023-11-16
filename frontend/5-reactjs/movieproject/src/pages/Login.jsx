import {  useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import {Link} from 'react-router-dom'
import '../App.css'
//import {toast} from 'react-toastify'
const Login = () => {
    const API_URL="http://localhost:8500/users"
    const { setAuth } = useContext(AuthContext);
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg]= useState('')
    useEffect(()=>{
        setErrMsg('')   
    },[user,pwd])
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //setup json-server with db.json dataset for testing
            //call API: security concerns to be discussed later in the course
            const response = await fetch(`${API_URL}?user=${user}&password=${pwd}`);
            console.log(response)
            const data= await response.json();
            if (data.length > 0) {
                const accessToken = data.accessToken;
                const roles = data.roles;
                setAuth({ user, pwd, roles, accessToken });
                setUser('');
                setPwd('');
                //toast.success('you are logged in!');
                setSuccess(true);
            } else{
                setErrMsg('Username or Password is incorrect!');
            }
            
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                    <Link to='/'> Go Home</Link>
                    </p>
                </section>
            ) : (
                <div className='col-5 m-auto'>
                <p  className={errMsg ? "errmsg" : "offscreen"} >{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                        <Link to='/register'> Sign Up</Link>
                        </span>
                    </p>
                </div>
            )}
        </>
    )
}

export default Login



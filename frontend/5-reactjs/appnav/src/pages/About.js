import {Link} from 'react-router-dom'
export default function About(){
  
    return(
        <>
            <h1>About us</h1>
            <Link to='/about/1'>Jim</Link>
            <Link to='/about/2'>Maria</Link>
        </>
    )
}
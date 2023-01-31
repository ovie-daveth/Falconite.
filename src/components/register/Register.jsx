import { useState, useEffect } from 'react'
//import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import './register.css'
import { toast } from 'react-toastify'
import logo from '../../assets/images/logotm.png'
import eye from  '../../assets/images/Group.png'
import aside from '../../assets/images/aside_image.png'




function Register (props) {
    const [isSignedUp, setIsSignedUp] = useState(false);

    useEffect(() => {
        if (isSignedUp) {
          // Navigate to the login page
          window.location.href = "/verify";
        }
      }, [isSignedUp]);

    const [name, namechange] = useState('');
    const [email, emailchange] = useState('');
    const [phone, phonechange] = useState('');
    const [password, passwordchange] = useState('');
    const [checker, checkerchange] = useState('off');
    
    const isValidate=() => {
        let isproceed=true;
        let errorMessage = 'Please enter the value in ';
        if(name === null || name === ''){
            isproceed=false;
            errorMessage += ' First Name'
        }
        if(email === null || name === ''){
            isproceed=false;
            errorMessage +=  ' email'
        }
        if(password === null || name === ''){
            isproceed=false;
            errorMessage += ' password'
        }
        if(phone === null || name === ''){
            isproceed=false;
            errorMessage += ' Phone'
        }
        if(!isproceed){
            toast.warning(errorMessage)
        }
        return isproceed;
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if (isValidate()){
        let regobj = {name, email, phone, password, checker}
        // console.log(regobj)
        fetch("http://localhost:8000/user", {
            method: "POST",
            headers:{'content-type': 'application/json'},
            body:JSON.stringify(regobj)
        }).then((res)=>{
            toast.success('Registered successfully.')
            setIsSignedUp(true);
        }).catch((err)=>{
            toast.error('Failed:' + err.message)
        })
    }
    }

    return (

        <div className='container'>
            <h3>Register</h3>
            <div className="register">
                <div className="left">
                    <img src={`${logo}`} alt="" />
                    <h3>Create an account</h3>
                    <p>Register on our website with your correct email address and information</p>
                    <form onSubmit={handleSubmit}>
                        <div className="form_item">
                            <label htmlFor="fname">First Name</label>
                            <input value={name} onChange={e=>namechange(e.target.value)} type="text" placeholder='Jeremiah' id="fname" name="fname" />
                        </div>
                        <div className="form_item">
                            <label htmlFor="email">Email Adress</label>
                            <input value={email} onChange={e=>emailchange(e.target.value)} type="email" placeholder='Fame@gmail.com' id="email" name="email" />
                        </div>
                        <div className="form_item">
                            <label htmlFor="phone">Phone Number</label>
                            <input value={phone} onChange={e=>phonechange(e.target.value)} type="text" placeholder='+2348103769079' id="phone" name="phone" />
                        </div>
                        <div className="form_item pass">
                            <label htmlFor="password">Password</label>
                            <input value={password} onChange={e=>passwordchange(e.target.value)} type="password" placeholder='**********' id="password" className='passInput' name="password" />
                            <img src={`${eye}`} alt="" />
                        </div>
                        <div className="form_item checkEl">
                            <input value={checker === 'off'} onChange={e=>checkerchange(e.target.value)} type="checkbox" name="remember" className="check" /> Remember Me
                        </div>
                        <div className="form_item button">
                            <input type="submit" value="Sign Up" className="btn-submit" id="submitBtn" />
                        </div>
                        <small>Alredy have an account? 
                            <span> <Link to="/login">
                                          Sign in
                                    </Link>
                            </span>
                        </small>
                    </form>
                </div>
                <div className="right">
                    <img width={500} src={`${aside}`} alt="" />
                </div>
            </div>
        </div>
   
  )
}

export default Register

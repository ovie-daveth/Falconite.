import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios';
import './login.css'
import logo from '../../assets/images/logotm.png'
import eye from  '../../assets/images/Group.png'
import aside from '../../assets/images/aside_image.png'

function Login () {
    const [email, emailchange] = useState('')
    const [password, passwordchange] = useState('')

    const proceedLogin= async (e)=>{
        e.preventDefault();
        if(validate()){
            //console.log('proceed')
            // fetch('http://localhost:8000/user/'+email).then((res)=>{
            //     return res.json();
            // }).then((resp)=>{
            //     console.log(resp)
            // }).catch((err)=>{
            //     toast.error('Login Failed due to :'+err.message)
            // })
            try {
                const response = await axios.post('http://localhost:8000/user', { email, password });
                localStorage.setItem('token', response.data.token);
                // Redirect the user to the dashboard or show a success message
                toast.success('successful')
              } catch (error) {
                console.error(error);
                // Show an error message
                toast.error('Login Failed due to :')
              }
        }
    }
    const validate=()=>{
        let result = true;
        if(email === '' || email === null){
            result = false;
            toast.warning('Please enter email')
        }
        if(password === '' || password === null){
            result = false;
            toast.warning('Please enter valid password')
    }
    return result;
}
   
    return (
    <div className='container'>
        <h3>Login</h3>
        <div className="register">
            <div className="left login">
                <img src={`${logo}`} alt="" />
                <h3>Welcome Back</h3>
                <p>Sign in Using the infromation below</p>
                <form onSubmit={proceedLogin}>
                    <div className="form_item">
                        <label htmlFor="email">Email Adress</label>
                        <input value={email} onChange={e=> emailchange(e.target.value)} type="email" placeholder='Fame@gmail.com' id="email" name="email" />
                    </div>
                    <div className="form_item pass">
                        <label htmlFor="password">Password</label>
                        <input value={password} onChange={e=> passwordchange(e.target.value)} type="password" placeholder='**********' id="password" className='passInput' name="password" />
                        <img src={`${eye}`} alt="" />
                    </div>
                    <div className="form_item checkEl">
                        <div className="input"><input type="checkbox" className='check' /> Remember Me</div>
                        <p>Forgotten password?</p>
                    </div>
                    <div className="form_item button">
                        <input type="submit" value="Login" className="btn-submit" id="loginBtn" />
                    </div>
                    <small>Dont't have an account? Create one <span><Link to="/"> here</Link></span></small>
                </form>
            </div>
            <div className="right">
                <img width={500} src={`${aside}`} alt="" />
            </div>
        </div>
    </div>
    )
}


export default Login

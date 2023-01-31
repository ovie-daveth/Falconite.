import React from 'react'
import './verify.css'
import logo from '../../assets/images/logotm.png'
import aside from '../../assets/images/aside_image.png'
const Verify = () =>(
    <>
    <div className='container'>
        <h3>Email-Verification</h3>
        <div className="register">
            <div className="left verify_left">
                <img src={`${logo}`} alt="" />
                <h3 className='h3'>Kindly enter email verification code</h3>
                <p >To sign up, kindly enter the email verification sent to your phone</p>
                <form className="email-verify" action="">
                        <div className="verify_input">
                        <input type="password" />
                        <input type="password" />
                        <input type="password" />
                        <input type="password" />
                        <input type="password" />
                        </div>

                    <input type="submit" value="Proceed" className="btn-submit" id="verifyBtn" />
                </form>

            </div>
            <div className="right">
                <img width={500} src={`${aside}`} alt="" />
            </div>
        </div>
    </div>
   </>
  )


export default Verify

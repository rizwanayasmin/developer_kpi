import React from 'react';
import './index.css';
import login_banner from '../../assets/images/login-banner.png';
import { history } from 'helpers';


const Login =()=>{
    const handleSubmit = () =>{
        history.push('/main/dashboard')
    }
    return(
     <React.Fragment>
        <div>
            <div className='row w-100'>
                <div className='col-6'>
                    <img src={login_banner} alt='login banner' className='login-img'/>
                </div>
                <div className='col-6 left-align'>
                    <div className='parent-login mb-5'>
                    <div className='login-title'>
                        <h4 className='login-title-text'>Login</h4>
                    </div>
                    <div className='mb-3'>
                        <label>Username : </label>
                        <input type='text'  className='user-input'/>
                    </div>
                    <div className='mb-3'>
                        <label>Password : </label>
                        <input type='text' className='user-input' />
                    </div>
                    <div>
                    <button  className='login-btn' onClick={handleSubmit}>Submit</button>
                </div>
                </div>
                </div>
               
            </div>
        </div>
     </React.Fragment>
    )

}

export default Login
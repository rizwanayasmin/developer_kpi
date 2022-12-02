import React from 'react';
import './index.css';

const Employee =()=>{
    return(
<div className='employee-card'>
    <div className='p-2'>
        <h4 className='details-title'>Employee Details</h4>
    </div>
    <div className='row p-3'>
        <div className='col'><label >Emp Name : <span className='detail-span'>Rizwana</span></label></div>
        <div className='col'><label>Employee Id: <span className='detail-span'>DDB097</span></label></div>
        <div className='col'><label>Email id:<span className='detail-span'> rizwana@doodleblue.com</span></label></div>
    </div>
    <div className='row p-3'>
    <div className='col-4'><label>Designation : <span className='detail-span'>Software Developer</span></label></div>
        <div className='col-4'><label>Manager : <span className='detail-span'>Vignesh</span></label></div>
    </div>
</div>
    )
}

export default Employee
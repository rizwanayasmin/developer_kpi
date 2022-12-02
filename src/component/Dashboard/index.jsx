import React,{useState} from 'react';
import './index.css';
import TableWrapper from 'component/Common/TableWrapper';
import { dashboardHeader } from "helpers/Constants";
import Employee from 'component/EmployeeDetails';


const Dashboard =()=>{
      const [tableData, setTableData] = useState([
            {
                  kpi:"customer satisfaction",
                  weightage:"25",
                  developerComments:"good",
                  managerAssigned:"Vignesh",
                  managerWeitage:"20"
           },
           {
            kpi:"customer satisfaction",
            weightage:"25",
            developerComments:"good",
            managerAssigned:"Vignesh",
            managerWeitage:"20"
     },
     {
      kpi:"customer satisfaction",
      weightage:"25",
      developerComments:"good",
      managerAssigned:"Vignesh",
      managerWeitage:"20"
      },
      {
      kpi:"customer satisfaction",
      weightage:"25",
      developerComments:"good",
      managerAssigned:"Vignesh",
      managerWeitage:"20"
      }
]);

    return(
        <div className='row w-100'>
          <div className='col-2'>
            sidebar
          </div>
          <div className='col-10 dashboard-right'>
            <div className='dasboard-parent-card'>
               <div className='dashboard-card'>
                     <h6 className='mb-3'>Customer satisfaction</h6>
                     <h1 className='kpi-count'>5</h1>
               </div>
               <div className='dashboard-card'>
                     <h6 className='mb-3'>Internal process quality</h6>
                     <h1 className='kpi-count'>4</h1>
               </div>
               <div className='dashboard-card'>
                     <h6 className='mb-3'>Employee satisfaction</h6>
                     <h1 className='kpi-count'>3</h1>
               </div>
               <div className='dashboard-card'>
                     <h6 className='mb-3'>Finacial preformance</h6>
                     <h1 className='kpi-count'>2</h1>
               </div>
            </div>
            <div>
                  <Employee />
            </div>
            <div className='dashboard-table'>
                  <TableWrapper 
                  className="table-block"
                  headerDetails={dashboardHeader}>
                        {tableData.map((item,index)=>{
                              return(
                                    <tr>
                                    <td align='center'>{index + 1}</td>
                                    <td align='center'>{item.kpi}</td>
                                    <td align='center'>{item.weightage}</td>
                                    <td align='center'>{item.developerComments}</td>
                                    <td align='center'>{item.managerAssigned}</td>
                                    <td align='center'>{item.managerWeitage}</td>
                              </tr>
                              )
                        })}
                      
                        </TableWrapper>
            </div>
            <div>
                  <h5>Total Weightage :<span className='fs-16'>100 %</span></h5> 
            </div>
          </div>
        </div>
    )
}

export default Dashboard
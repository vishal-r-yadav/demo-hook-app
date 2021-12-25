import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
 
function FetchPolicy() {
 
    const [policies,setPolicies] = useState(null);
    const {policyId} = useParams();
 
    useEffect(()=> {
        axios.get("http://localhost:8080/healthinsurance-policy/policy/"+policyId).then(resp => setPolicies( resp.data));
    },[])
 
    return(
        <div className="container">
        <h2>Policy Details</h2>
       
            {policies!==null ?
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Policy Id</th>
                  <th>Policy Name</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Term</th>
                  <th>Price</th>
                  <th>Created By</th>
                </tr>
              </thead>
              <tbody>
             
                <tr>
                  <td>{policies.policyId}</td>
                  <td>{policies.policyName}</td>
                  <td>{policies.startDate}</td>
                  <td>{policies.endDate}</td>
                  <td>{policies.term}</td>
                  <td>{policies.price}</td>
                  <td>{policies.createdBy}</td>
                  
               
                </tr>
                
              </tbody>
            </table>
          :<h3>Loading...</h3>
            } 
             
        </div>
    )
}
 
export default FetchPolicy;
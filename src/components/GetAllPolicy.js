import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
 
function GetAllPolicy() {
 
    const [policies, setPolicies] = useState([]);
 
    useEffect(() => {
        axios.get("http://localhost:8080/healthinsurance-policy/policy/all").then(resp => setPolicies(resp.data));
    },[])
 
    return (
        <div>
            <h2>All Policies</h2>
               {
                   policies.length >0 ?
                    
               <table class="table table-bordered table-dark">
                 <thead>
                   <tr>
                     <th>Policy Id</th>
                     <th>Policy Name</th>
                     <th>Start Date</th>
                     <th>End Date</th>
                     <th>Term</th>
                     <th>Price</th>
                     <th>Created By</th>
                     <th>View</th>
                     <th>Update</th>
                     <th>Delete</th>
                   </tr>
                 </thead>
                 <tbody>
                 {policies.map(p =>
                   <tr>
                     <td>{p.policyId}</td>
                     <td>{p.policyName}</td>
                     <td>{p.startDate}</td>
                     <td>{p.endDate}</td>
                     <td>{p.term}</td>
                     <td>{p.price}</td>
                     <td>{p.createdBy}</td>
                     <td><Link to={`/policy/details/${p.policyId}`}>View</Link></td>
                     <td><Link to={`/policy/${p.policyId}`}>Update</Link></td>
                     <td><Link to={`/policy/${p.policyId}`}>Delete</Link></td>
                  
                  
                   </tr>
                    )}
                 </tbody>
               </table>
               : <h3><div class = "spinner-border"></div></h3>
                 }
        </div>
    )
}
export default GetAllPolicy;
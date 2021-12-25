import React,{ useEffect, useState} from 'react';
import axios from 'axios';

function AddPolicy(){

    const [policies, setPolicies] = useState({
        //this values can be anything
        policyName : '',
        startDate : '',
        endDate : '',
        term : '',
        price : '',
        createdBy : ''


    })

    const handleChange = (event) => {       
        setPolicies(policies => ({...policies, [event.target.name]: event.target.value}));
    }
    const handlesubmit = (event) => {
        const payload = {
        policyName : policies.policyName,
        startDate : policies.startDate,
        endDate : policies.endDate,
        term : policies.term,
        price : policies.price,
        createdBy : policies.createdBy
        }

        axios.post("http://localhost:8080/healthinsurance-policy/createpolicy",payload).then(resp=>
        alert("User saved with id"+resp.data.policyId));
    }
    
   
return(
    <div>
        <div>
        <label>Enter Policy Name</label>
        <input type = "text" name="policyName" id="policyName" onChange={handleChange} value = {policies.policyName}/>
        </div>
        <div>
        <label>Enter Policy Effective Date</label>
        <input type = "date" name="startDate" id="startDate" onChange={handleChange} value = {policies.startDate}/>
        </div>
        <div>
        <label>Enter Policy End date</label>
        <input type = "date" name="endDate" id="endDate" onChange={handleChange} value = {policies.endDate}/>
        </div>
        <div>
        <label>Enter Policy Tenure</label>
        <input type = "text" name="term" id="term" onChange={handleChange} value = {policies.term}/>
        </div>
        <div>
        <label>Enter Policy Price</label>
        <input type = "text" name="price" id="price" onChange={handleChange} value = {policies.price}/>
        </div>
        <div>
        <label>Enter Policy Created By</label>
        <input type = "text" name="createdBy" id="createdBy" onChange={handleChange} value = {policies.createdBy}/>
        </div>
        <div>
        
        <div><button onClick={handlesubmit}>Add Policy</button></div>
        </div>
  </div>
)
}
export default AddPolicy;

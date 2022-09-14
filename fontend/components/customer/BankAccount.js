import axios from 'axios';
import React,{useEffect,useState}from 'react'
import {apiUrl} from '../../locale'
export default function BankAccount(props) {



  const [account, setAccount] = useState(null);
  const [count,setCount]=useState(null);


 useEffect(() => {
  const uid=localStorage.getItem("uid");
   axios.post(apiUrl+'bank_account/user',{
    user_type:1,
    user_id:uid
   }).then((response)=>{
    setAccount(response.data)
    setCount(response.data.length)
   }).catch((err)=>{
    console.log(err);
   });
 },[count]);

 const handleForm=(event)=>{
event.preventDefault();

axios.post(apiUrl+'bank_account',{
  user_id:localStorage.getItem("uid"),
  user_type:1,
  account_no:event.target.account.value,
  ifsc_code:event.target.ifsc.value,
  branch:event.target.branch.value


}).then((response)=>{
  setCount(count+1);
  console.log(response.data);
}).catch((err)=>{
  console.log(err);
})

 }
  return (
    <div class="row gx-3">
      <div class="col-md-7 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title text-center">My Bank Accounts </h4>
                    <div class="table-responsive">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th> Account No </th>
                            <th> IFSC Code </th>
                            <th> Branch </th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            account?
                            account.map((item)=>{
                              return(
                              <tr>
                                <td> {item.account_no}</td>
                                <td> {item.ifsc_code} </td>
                                <td> {item.branch} </td>
                              </tr>)
                            })
                            :<></>
                          }
                          
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
       </div>
       <div class="col-md-5 grid-margin">
               {count>4?<>
              <div class="card">
              <div class="card-body">
              <h5 class="text-warning">You Can't add more than 5 Account</h5>
              </div> </div>
               </>: 
               <form onSubmit={handleForm}>
               <div class="card">
                 <div class="card-body">
                   <h4 class="card-title text-center">Add New Bank Account</h4>
                   <div class="form-group">
                     <input type="text" name="account" class="form-control form-control-lg" placeholder="Account No" aria-label="Bank Account No"/>
                   </div>
                   <div class="form-group">
                     <input type="text" name="ifsc" class="form-control" placeholder="IFSC Code" aria-label="IFSC Code"/>
                   </div>
                   <div class="form-group">
                     <input type="text" name="branch" class="form-control form-control-sm" placeholder="Branch Name" aria-label="Branch Name"/>
                   </div>
                   <div class="text-center">
                     <button type="submit" class="btn btn-primary mb-2" >Save</button></div>
                 </div>
               </div>
               </form>
                }
              </div>
    </div>
  )
}

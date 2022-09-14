import axios from 'axios';
import React,{useEffect,useState}from 'react'
import {apiUrl} from '../../locale'

export default function CustomerNominee(props) {
  const [nominee, setNominee] = useState(null);
  const [count,setCount]=useState(null);
  useEffect(() => {
   const uid=localStorage.getItem("uid");
    axios.get(apiUrl+'nominee').then((response)=>{
      setCount(response.data.length)
      setNominee(response.data);
      console.log("use")
    }).catch((err)=>{
     console.log(err);
    });
  },[count]);
  const handleForm=(event)=>{
    event.preventDefault();
    axios.post(apiUrl+'nominee',{
      user_id:localStorage.getItem("uid"),
      user_type:1,
      name:event.target.name.value,
      dob:event.target.dob.value,
    }).then((response)=>{
      console.log(response.data);
      setCount(count+1);
    }).catch((err)=>{
      console.log(err);
    })
    
     }

  return (
    <div class="row">
      <div class="col-md-7 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title text-center">My Nominee {count}</h4>
                    <div class="table-responsive">
                      <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th> Id </th>
                            <th> Nominee Name </th>
                            <th> Date of Birth </th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            nominee?
                            nominee.map((item)=>{
                              return(
                              <tr>
                                <td>CRZNOM00000{item.nominee_id}</td>
                                <td> {item.name} </td>
                                <td> {item.dob.slice(0,10)} </td>
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
              <h5 class="text-warning">You Can't add more than 5 Nominee</h5>
              </div> </div>
               </>: <form onSubmit={handleForm}>
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title text-center">Add New Nominee</h4>
                    <div class="form-group">
                      <input type="text" name="name" class="form-control form-control-lg" placeholder="Nominee Name" aria-label="Nominee Name"/>
                    </div>
                    <div class="form-group">
                      <label>Date Of Birth</label>
                      <input type="date" name="dob" class="form-control" placeholder="Date of Birth" aria-label=""/>
                    </div>
                    
                    <div class="text-center">
                      <button type="submit" class="btn btn-primary mb-2">Save</button></div>
                  </div>
                </div>
                </form>}
              </div>
    </div>
  )
}

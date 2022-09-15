import React,{useState,useEffect} from 'react'
const validator = require('validator');
import { apiUrl, calCulateSalary } from '../../locale';
const axios = require('axios').default;


export default function AddEmployee() {
  const [desginationList, setDesginationList] = useState("");
  const [salaryList, setsalaryList] = useState("");

  useEffect(() => {
    axios.get(`${apiUrl}designation`).then((response) => {
      setDesginationList(response.data);
      console.log(response.data)
    }).catch((err) => {
      console.log(err);
    });
  }, []);


  useEffect(() => {
    axios.get(`${apiUrl}salary`).then((response) => {
      setsalaryList(response.data);
      console.log(response.data)
    }).catch((err) => {
      console.log(err);
    });
  }, []);



  return (
    <div className='row'>
    <div class="col-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h3 class="card-title text-center">Add Employee</h3>
                    <form class="forms-sample pt-3">

                      <div class="row">
                        <div class="col-md-4">
                        <div class="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Name" required/>
                      </div>
                        </div>
                        <div class="col-md-4">
                        <div class="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" class="form-control" id="email" placeholder="Email" required/>
                        </div>
                        </div>

                        <div class="col-md-4">
                        <div class="form-group">
                        <label htmlFor="phone">Phone No</label>
                        <input type="number" class="form-control" id="phone" placeholder="Phone No" required/>
                      </div>
                        </div>

                        <div class="col-md-4">
                        <div class="form-group">
                        <label htmlFor="dob">Date Of Birth</label>
                        <input type="date" class="form-control" id="dob" placeholder="Joining Date" required/>
                        </div>
                        </div>

                        <div class="col-md-2">
                        <div class="form-group">
                        <label htmlFor="gender">Gender</label>
                        <select class="form-control" id="gender" required>
                          <option value={0}>Male</option>
                          <option value={1}>Female</option>
                        </select>
                      </div>
                        </div>


                        <div class="col-md-3">
                        <div class="form-group">
                        <label htmlFor="designation">Designation</label>
                        {
                          desginationList?<>
                           <select class="form-control" id="gender" required>
                           <option >Please Select</option>
                          {
                            desginationList.map((item,index)=>{
                              return(<option key={index} value={item.designation_id}>{item.title}</option>)
                            })
                          }
                        </select>
                          </>:<><p>Please Add Designation</p></>
                        }
                       
                      </div>
                        </div>

                        <div class="col-md-3">
                        <div class="form-group">
                        <label htmlFor="salary">Salary</label>
                        {
                          salaryList?<>
                           <select class="form-control" id="salary" required>
                           <option >Please Select</option>
                          {
                            salaryList.map((item,index)=>{
                              return(<option key={index} value={item.salary_id}>{calCulateSalary(item)}</option>)
                            })
                          }
                        </select>
                          </>:<><p>Please Add Salary First</p></>
                        }
                       
                      </div>
                        </div>


                        

                        <div class="col-md-3">
                        <div class="form-group">
                        <label htmlFor="joindate">Joining Date</label>
                        <input type="date" class="form-control" id="joindate" placeholder="Joining Date" required/>
                        </div>
                        </div>
                        
                        <div class="col-md-3">
                        <div class="form-group">
                        <label>Upload Image</label>
                        <input type="file" name="img[]" class="file-upload-default" required/>
                        <div class="input-group col-xs-12">
                          <input type="file" class="form-control file-upload-info" disabled="" placeholder="Upload Image" required/>
                        </div>
                      </div>
                        </div>
                        <div class="col-md-3">
                        <div class="form-group">
                        <label htmlFor="pass">Password</label>
                        <input type="password" class="form-control" id="pass" placeholder="Password"/>
                        </div>
                        </div>
                        <div class="col-md-3">
                        <div class="form-group">
                        <label htmlFor="cpass">Confirm Password</label>
                        <input type="password" class="form-control" id="cpass" placeholder="Confirm Password"/>
                        </div>
                        </div>
                        
                      </div>
                      <button type="submit" class="btn btn-primary me-2">Submit</button>
                      <button class="btn btn-light">Cancel</button>
                    </form>
                  </div>
                </div>
              </div>
    </div>
  )
}


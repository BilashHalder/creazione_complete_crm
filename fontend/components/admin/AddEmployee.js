import React, { useState, useEffect } from 'react'
const validator = require('validator');
import { apiUrl, calCulateSalary } from '../../locale';
const axios = require('axios').default;


export default function AddEmployee() {
  const [desginationList, setDesginationList] = useState("");
  const [salaryList, setsalaryList] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [desg, setDesg] = useState("");
  const [dob, setdob] = useState("")
  const [salary, setsalary] = useState("");
  const [joindate, setjoindate] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState();
  const [image, setImage] = useState("");
  const [err, setErr] = useState();
  const [success, setSucess] = useState("");
  const [message, setMessage] = useState("");

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

  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImage(URL.createObjectURL(file));
  }

  const resetForm = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPhone("");
    setGender("");
    setDesg("");
    setdob("");
    setsalary("");
    setjoindate("");
    setPassword("");
    setCpassword("");
    setImage("");
    setErr(false);
    setSucess(false);
    setMessage("");
    document.getElementById('image').value = null;

  }
  const handleForm = (e) => {
    e.preventDefault();
    if (password != cpassword) {
      setMessage("password does not match");
      setErr(true);
    }
    else if (desg == "") {
      setMessage("please Select Designation");
      setErr(true);
    }
    else if (gender == "") {
      setMessage("please Select Gender");
      setErr(true);
    }
    else if (salary == "") {
      setMessage("please Select Salary");
      setErr(true);
    }
    else {
      setErr(false);
      setMessage(null);
      var formData = new FormData();
      var imagefile = document.querySelector('#image');
      formData.append("image", imagefile.files[0]);
      formData.append('name', name)
      formData.append('email', email)
      formData.append('pass', password);
      formData.append('gender', gender)
      formData.append('phone', phone);
      axios.post(`${apiUrl}employee`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((response) => {
        axios.post(`${apiUrl}employee_info`, {
          employee_id: response.data.data[0].employee_id,
          designation_id: desg,
          salary_id: salary,
          dob: dob,
          joining_date: joindate
        }).then((response) => {
          setMessage("Employee Created Thank You!");
          setErr(false);
          setSucess(true);
          setName("");
          setEmail("");
          setPhone("");
          setGender("");
          setDesg("");
          setdob("");
          setsalary("");
          setjoindate("");
          setPassword("");
          setCpassword("");
          setImage("");
          document.getElementById('image').value = null;
        }).catch((err) => {
          setMessage(err.response.data.message);
          setErr(true);
          setSucess(false);
        })

      }).catch((err) => {
        setMessage(err.response.data.message);
        setErr(true);
        setSucess(false);
      });
    }


  }
  return (
    <div className='row'>
      <div class="col-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title text-center">Add Employee</h3>
            <form class="forms-sample pt-3" onSubmit={handleForm}>

              <div class="row">
                <div class="col-md-4">
                  <div class="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" class="form-control" name="name" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" class="form-control" id="email" name="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="form-group">
                    <label htmlFor="phone">Phone No</label>
                    <input type="number" class="form-control" id="phone" name="phone" placeholder="Phone No" required value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="form-group">
                    <label htmlFor="dob">Date Of Birth</label>
                    <input type="date" class="form-control" id="dob" name="dob" placeholder="Joining Date" required value={dob} onChange={(e) => setdob(e.target.value)} />
                  </div>
                </div>

                <div class="col-md-2">
                  <div class="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select class="form-control" id="gender" name="gender" required value={gender} onChange={(e) => setGender(e.target.value)}>
                      <option >Please Select</option>
                      <option value={0}>Male</option>
                      <option value={1}>Female</option>
                    </select>
                  </div>
                </div>


                <div class="col-md-3">
                  <div class="form-group">
                    <label htmlFor="designation">Designation</label>
                    {
                      desginationList ? <>
                        <select class="form-control" id="desg" name="desg" required value={desg} onChange={(e) => setDesg(e.target.value)}>
                          <option >Please Select</option>
                          {
                            desginationList.map((item, index) => {
                              return (<option key={index} value={item.designation_id}>{item.title}</option>)
                            })
                          }
                        </select>
                      </> : <><p>Please Add Designation</p></>
                    }

                  </div>
                </div>

                <div class="col-md-3">
                  <div class="form-group">
                    <label htmlFor="salary">Salary</label>
                    {
                      salaryList ? <>
                        <select class="form-control" id="salary" name="salary" required value={salary} onChange={(e) => setsalary(e.target.value)}>
                          <option >Please Select</option>
                          {
                            salaryList.map((item, index) => {
                              return (<option key={index} value={item.salary_id}>{calCulateSalary(item)}</option>)
                            })
                          }
                        </select>
                      </> : <><p>Please Add Salary First</p></>
                    }

                  </div>
                </div>




                <div class="col-md-3">
                  <div class="form-group">
                    <label htmlFor="joindate">Joining Date</label>
                    <input type="date" class="form-control" id="joindate" name="joindate" placeholder="Joining Date" required value={joindate} onChange={(e) => setjoindate(e.target.value)} />
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="form-group">
                    <label>Upload Image</label>
                    <div class="input-group col-xs-12">
                      <input type="file" class="form-control file-upload-info" disabled="" placeholder="Upload Image" required onChange={onImageChange} id="image" />
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="form-group">
                    <label htmlFor="pass">Password</label>
                    <input type="password" class="form-control" id="pass" name="pass" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="form-group">
                    <label htmlFor="cpass">Confirm Password</label>
                    <input type="password" class="form-control" id="cpass" name="cpass" placeholder="Confirm Password" value={cpassword} onChange={(e) => setCpassword(e.target.value)} required />
                  </div>
                </div>
                {
                  message ? <div class={err ? "alert alert-danger" : success ? "alert alert-success" : "hide"} role="alert"> {message} </div> : <></>
                }
              </div>
              <button type="submit" class="btn btn-primary me-2">Submit</button>
              <button class="btn btn-light" onClick={resetForm}>Reset</button>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}


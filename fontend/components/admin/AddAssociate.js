import React, { useState, useEffect } from 'react'
const validator = require('validator');
import { apiUrl, } from '../../locale';
const axios = require('axios').default;


export default function AddAssociate() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [commission_rate, setcommission_rate] = useState("")
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState();

  const [image, setImage] = useState("");
  const [err, setErr] = useState();
  const [success, setSucess] = useState("");
  const [message, setMessage] = useState("");
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
    setcommission_rate("")
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
    else if (gender == "") {
      setMessage("please Select Gender");
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
      formData.append('commission_rate',commission_rate);
      axios.post(`${apiUrl}associate`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((response)=>{
        setMessage("Associate Created Thank You!");
        setErr(false);
        setSucess(true);
          setName("");
          setEmail("");
          setPhone("");
          setGender("");
          setPassword("");
          setCpassword("");
          setImage("");
          document.getElementById('image').value = null;
      }).catch((err) => {
        setMessage(err.response.data.message);
        setErr(true);
        setSucess(false);
      });
    }


  }


  return (
    <div className='row'>
      <div className="col-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title text-center">Add Associate</h3>
            <form className="forms-sample pt-3" onSubmit={handleForm}>

              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" name="name" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="phone">Phone No</label>
                    <input type="number" className="form-control" id="phone" name="phone" placeholder="Phone No" required value={phone} onChange={(e) => setPhone(e.target.value)} min={0}/>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select className="form-control" id="gender" name="gender" required value={gender} onChange={(e) => setGender(e.target.value)}>
                      <option >Please Select</option>
                      <option value={0}>Male</option>
                      <option value={1}>Female</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Upload Image</label>
                    <div className="input-group col-xs-12">
                      <input type="file" className="form-control file-upload-info" disabled="" placeholder="Upload Image" required onChange={onImageChange} id="image" />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label for="exampleInputCity1">Commision Rate</label>
                    <input type="number" className="form-control" id="commission_rate" placeholder="Commision Rate" value={commission_rate} onChange={(e) => setcommission_rate(e.target.value)} required min={0}/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="pass">Password</label>
                    <input type="password" className="form-control" id="pass" name="pass" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="cpass">Confirm Password</label>
                    <input type="password" className="form-control" id="cpass" name="cpass" placeholder="Confirm Password" value={cpassword} onChange={(e) => setCpassword(e.target.value)} required />
                  </div>
                </div>
                {
                  message ? <div className={err ? "alert alert-danger" : success ? "alert alert-success" : "hide"} role="alert"> {message} </div> : <></>
                }
              </div>
              <button type="submit" className="btn btn-primary me-2">Submit</button>
              <button className="btn btn-light" onClick={resetForm}>Reset</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

import React,{useState} from 'react'
const validator = require('validator');
const axios = require('axios').default;
export default function AddCustomer() {
  const handleForm=(e)=>{
    e.preventDefault();

    var Nameregex = /^[a-zA-Z ]{2,30}$/;
    name.length==0?e.target.name.classList.add("inp-err"):e.target.name.classList.remove("inp-err");
    Nameregex.test(name)?e.target.name.classList.remove("inp-err"):e.target.name.classList.add("inp-err");
    Nameregex.test(name)?setErr(false):"";
    validator.isEmail(email)?e.target.email.classList.remove("inp-err"):e.target.email.classList.add("inp-err");
    validator.isEmail(email)?setErr(false):"";
    validator.isMobilePhone(phone)?e.target.phone.classList.remove("inp-err"):e.target.phone.classList.add("inp-err")
    phone.toString().length<10?e.target.phone.classList.add("inp-err"):e.target.phone.classList.remove("inp-err");
    gender==null?e.target.gender.classList.add("inp-err"):e.target.gender.classList.remove("inp-err");
    image==null?e.target.image.classList.add("inp-err"):e.target.image.classList.remove("inp-err");
    password==null?e.target.password.classList.add("inp-err"):e.target.password.classList.remove("inp-err");
    cpassword==null?e.target.cpassword.classList.add("inp-err"):e.target.cpassword.classList.remove("inp-err");
    password!=cpassword?e.target.cpassword.classList.add("inp-err"):e.target.cpassword.classList.remove("inp-err");
    if(document.querySelectorAll('.inp-err').length==0)
    var formData = new FormData();
    var imagefile = document.querySelector('#image');
    formData.append("image", imagefile.files[0]);
    formData.append('name',name)
    formData.append('email',email)
    formData.append('pass',password);
    formData.append('gender',gender)
    formData.append('phone',phone)
    axios.post('http://localhost:5000/api/customer', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
  }).then(function (result) {
    console.log(result.data.data[0]);
  })
  .catch(function (err) {
    console.log(err);
  });


  
  }

  const onImageChange=(e) => {
    const [file] = e.target.files;
    setImage(URL.createObjectURL(file));
  }

  const resetForm=(e)=>{
    e.preventDefault();
    console.log("reset")
  }
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState(null);
  const [password, setPassword] = useState(null);
  const [cpassword, setCpassword] = useState();
  const [image, setImage] = useState(null);
  const [err, setErr] = useState();
  const [success, setSucess] = useState(null);
  const [message, setMessage] = useState(null)
  return (
    <div className='row'>
    <div class="col-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h3 class="card-title text-center">Add Customer</h3>
                    <form class="forms-sample pt-3" onSubmit={handleForm}>

                      <div class="row">
                        <div class="col-md-6">
                        <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" name="name" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)}/>
                      </div>
                        </div>
                        <div class="col-md-6">
                        <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" id="email" placeholder="Email" name="email"value={email} onChange={(e)=> setEmail(e.target.value)}/>
                      </div>
                        </div>

                        <div class="col-md-6">
                        <div class="form-group">
                        <label for="phon">Phone No</label>
                        <input type="number" class="form-control" id="phone"  name="phone" placeholder="Phone No"value={phone} onChange={(e)=> setPhone(e.target.value)}/>
                      </div>
                        </div>
                        <div class="col-md-6">
                        <div class="form-group">
                        <label for="exampleSelectGender">Gender</label>
                        <select class="form-control" id="exampleSelectGender"name="gender" value={gender} onChange={(e)=> setGender(e.target.value)}>
                          <option>Please Select</option>
                          <option value={0}>Male</option>
                          <option value={1}>Female</option>
                          <option value={2}>Otheres</option>
                        </select>
                      </div>
                        </div>
                        <div class="col-md-4">
                        <div class="form-group">
                        <label>Upload Image</label>
                        <input type="file" class="file-upload-default"  />
                        <div class="input-group col-xs-12">
                          <input type="file" class="form-control file-upload-info"  name="image" disabled="" accept="image/*" placeholder="Upload Image" onChange={onImageChange}id="image" />
                        </div>
                      </div>
                     
                        </div>

                        <div class="col-md-4">
                        <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" name="password"placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                      </div>
                        </div>
                        <div class="col-md-4">
                        <div class="form-group">
                        <label for="cpassword"> Confirm Password</label>
                        <input type="password" class="form-control" id="cpassword" name='cpassword' placeholder="Password" value={cpassword} onChange={(e)=> setCpassword(e.target.value)}/>
                        </div>
                        </div>
                      </div>
                      {
                        message?<div class={err?"alert alert-danger":success?"alert alert-success": "hide"}  role="alert"> {message} </div>:<></>
                      }
                      

                     <div class="row">
                     <div class='col-md-6'><button type="submit" class="btn btn-primary me-2">Submit</button>
                      <button class="btn btn-light" onClick={resetForm}>Reset</button></div>
                     <div class="col-md-6 pt-4">
                     <img src={image} alt="" />
                     </div>

                     </div>
                    </form>
                    
                  </div>
                </div>
              </div>
    </div>
  )
}

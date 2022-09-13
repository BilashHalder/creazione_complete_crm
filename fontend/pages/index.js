import React,{useState,useEffect} from 'react';
const axios = require("axios").default;
import { useRouter } from 'next/router';

const Index = () => {
  const [id, setid] = useState();
  const [password, setpassword] = useState();
  const [err, seterr] = useState(null)
  const router = useRouter();
  useEffect(() => {
    if(localStorage.getItem('customerKey'))
    router.push('/customer');
  }, [])
  
  const login=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:5000/api/customer/login',{
      emailorphone:id,
      pass:password
    }).then((response)=>{
      seterr(null)
      localStorage.setItem("customerKey",response.data.key );
      localStorage.setItem("uid",response.data.id );
      router.push('/customer');
      
    })
    .catch((err)=>{
      seterr(err.response.data.message)
    })
    
    }
  return (
    <div class="row mt-5 pt-5">
    <div class="col-md-3">
  
    </div>
    <div class="col-md-6">
    <div class="grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title text-center">Customer Login</h4>
                    <p class="card-description text-center"> Wellcome Back to creazione Group </p>
                    <form class="forms-sample" onSubmit={login}>
                      <div class="form-group">
                        <label for="email">Email address/Phone No</label>
                        <input type="text" class="form-control" id="email" placeholder="Email or Phone Number" value={id} onChange={(e)=>{setid(e.target.value)}}/>
                      </div>
                      <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                      </div>
                      {
                        err?<div class="alert alert-danger" role="alert"> {err} </div>:<></>
                      }
                      
                      <button type="submit" class="btn btn-primary me-2">Submit</button>
                      <button class="btn btn-light">Reset</button>
                    </form>
                  </div>
                </div>
              </div>
    </div>
    </div>
  );
}

export default Index;

import React, { useState, useEffect } from 'react';
import { apiUrl, imageUrl } from '../../locale';
import axios from 'axios';

export default function CustomerProfile() {
  const [userInfo, setuserInfo] = useState(null);
  const [docs, setdocs] = useState(null);
  useEffect(() => {
    let user_id = localStorage.getItem("uid")
    axios.get(`${apiUrl}customer/${user_id}`).then((response) => {
      setuserInfo(response.data[0]);
    }).catch((err) => {
      console.log(err);
    });
  },[]);

  useEffect(()=>{
    if(userInfo){
      if(userInfo.document_id){
        axios.get(`${apiUrl}document/${userInfo.document_id}`).then((response) => {
          setdocs(response.data[0]);
          console.log(response.data[0]);
        }).catch((err) => {
          console.log(err);
        });
      }
      else{
        setdocs(-1);
      }
    }
  },[userInfo])
  return (
    <>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-lg-4">
                  <div class="border-bottom text-center pb-4">
                    <img src={userInfo ? imageUrl + userInfo.image : ""} alt="profile" class="img-lg rounded-circle mb-3" />
                    <h3>{userInfo ? userInfo.name : ""}</h3>
                  </div>
                  <div class="py-4">
                    <p class="clearfix">
                      <span class="float-left"> Status </span>
                      <span class="float-right text-muted"> Active </span>
                    </p>
                    <p class="clearfix">
                      <span class="float-left"> Phone </span>
                      <span class="float-right text-muted"> {userInfo?userInfo.phone:""} </span>
                    </p>
                    <p class="clearfix">
                      <span class="float-left"> Mail </span>
                      <span class="float-right text-muted"> {userInfo?userInfo.email:""}</span>
                    </p>
                    <p class="clearfix">
                      <span class="float-left"> Gender </span>
                      <span class="float-right text-muted">
                        <span>{userInfo?userInfo.gender==0?"Male":userInfo.gender==1? "Female": "Others":<></>}</span>
                      </span>
                    </p>
                  </div>
                  <button class="btn btn-primary btn-block">Preview</button>
                </div>
                <div class="col-lg-8">
                  <div class="">
                    <div class="p-4">
                      <div class="ms-4 card">
                        {docs?docs==-1?<>
                         <form  class="px-5 py-3">
                         <div class="form-group">
                        <label for="exampleInputUsername1">Adhar Card No</label>
                        <input type="text" class="form-control" id="exampleInputUsername1" placeholder="Username"/>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputUsername1">Pan Card No</label>
                        <input type="text" class="form-control" id="exampleInputUsername1" placeholder="Username"/>
                      </div>
                      <div class="form-group">
                        <label for="exampleTextarea1">Address</label>
                        <textarea class="form-control" id="exampleTextarea1" rows="4"></textarea>
                      </div>
                      <button type="submit" class="btn btn-primary me-2">Submit</button>
                         </form>
                        </>:<>
                        <div class="card border border-success pricing-card-body">
                            <div class="text-center pricing-card-head text-success pt-2">
                              <h4 class="text-success">Adhar Card </h4>
                              <p>Verified</p>
                              <h3 class="font-weight-normal mb-4 ">{docs?docs.adhar_no:""}</h3>
                            </div>
                          </div>
                          <div class="card border border-primary pricing-card-body mt-2">
                            <div class="text-center pricing-card-head text-primary pt-2">
                              <h4 class="text-primary">Pan Card </h4>
                              <p>Verified</p>
                              <h3 class="font-weight-normal mb-4 ">{docs?docs.pan_no:""}</h3>
                            </div>
                          </div>
                          <div class="card border  pricing-card-body mt-2">
                            <div class="text-center pricing-card-head  pt-2">
                              <h3 class="">Address Information </h3>
                              <address class="font-weight-normal mb-4 ">{docs?docs.address:""}</address>
                            </div>
                          </div>
                        </>:<></>}
                      </div>
                    </div>
                    <div class="d-flex align-items-start profile-feed-item">
                      <div class="ms-4">
                        
                      </div>
                    </div>
                    <div class="d-flex align-items-start profile-feed-item">
                      <div class="ms-4">
                        
            
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

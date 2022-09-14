import React, { useState, useEffect } from 'react';
import { apiUrl, imageUrl } from '../../locale';
import axios from 'axios';

export default function CustomerProfile() {
  const [userInfo, setuserInfo] = useState(null);

  useEffect(() => {
    let user_id = localStorage.getItem("uid")
    axios.get(`${apiUrl}customer/${user_id}`).then((response) => {
      setuserInfo(response.data[0]);
    }).catch((err) => {
      console.log(err);
    })
  }, [])

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
                      <span class="float-right text-muted"> 006 3435 22 </span>
                    </p>
                    <p class="clearfix">
                      <span class="float-left"> Mail </span>
                      <span class="float-right text-muted"> Jacod@testmail.com </span>
                    </p>
                    <p class="clearfix">
                      <span class="float-left"> Gender </span>
                      <span class="float-right text-muted">
                        <span>Male</span>
                      </span>
                    </p>
                  </div>
                  <button class="btn btn-primary btn-block">Preview</button>
                </div>
                <div class="col-lg-8">
                  <div class="mt-4 py-2 border-top border-bottom">
                    <ul class="nav profile-navbar">
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          <i class="mdi mdi-account-outline"></i> Info </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" href="#">
                          <i class="mdi mdi-newspaper"></i> Feed </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          <i class="mdi mdi-calendar"></i> Agenda </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          <i class="mdi mdi-attachment"></i> Resume </a>
                      </li>
                    </ul>
                  </div>
                  <div class="profile-feed">
                    <div class="d-flex align-items-start profile-feed-item">
                      <div class="ms-4">
                        <h6> Mason Beck <small class="ms-4 text-muted"><i class="mdi mdi-clock me-1"></i>10 hours</small>
                        </h6>
                        <p> There is no better advertisement campaign that is low cost and also successful at the same time. </p>
                        <p class="small text-muted mt-2 mb-0">
                          <span>
                            <i class="mdi mdi-star me-1"></i>4 </span>
                          <span class="ms-2">
                            <i class="mdi mdi-comment me-1"></i>11 </span>
                          <span class="ms-2">
                            <i class="mdi mdi-reply"></i>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div class="d-flex align-items-start profile-feed-item">
                      <div class="ms-4">
                        <h6> Willie Stanley <small class="ms-4 text-muted"><i class="mdi mdi-clock me-1"></i>10 hours</small>
                        </h6>
                        <img src="./assets/images/samples/1280x768/12.jpg" alt="sample" class="rounded mw-100" />
                        <p class="small text-muted mt-2 mb-0">
                          <span>
                            <i class="mdi mdi-star me-1"></i>4 </span>
                          <span class="ms-2">
                            <i class="mdi mdi-comment me-1"></i>11 </span>
                          <span class="ms-2">
                            <i class="mdi mdi-reply"></i>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div class="d-flex align-items-start profile-feed-item">
                      <div class="ms-4">
                        <h6> Dylan Silva <small class="ms-4 text-muted"><i class="mdi mdi-clock me-1"></i>10 hours</small>
                        </h6>
                        <p> When I first got into the online advertising business, I was looking for the magical combination that would put my website into the top search engine rankings </p>
                        <img src="./assets/images/samples/1280x768/5.jpg" alt="sample" class="rounded mw-100" />
                        <p class="small text-muted mt-2 mb-0">
                          <span>
                            <i class="mdi mdi-star me-1"></i>4 </span>
                          <span class="ms-2">
                            <i class="mdi mdi-comment me-1"></i>11 </span>
                          <span class="ms-2">
                            <i class="mdi mdi-reply"></i>
                          </span>
                        </p>
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

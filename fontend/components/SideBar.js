import React, { useState,useEffect } from 'react'
import Clock from 'react-live-clock';
import Link from 'next/link';
import {useSelector,useDispatch} from 'react-redux';
import {updateMenu} from '../services/actions/menu'
export default function SideBar() {
useEffect(()=>{
  console.log("ok")
},[])
  return (
    
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
    <ul class="nav">
      <li class="nav-item nav-profile border-bottom">
          <div class="nav-profile-image">
            <img src="../assets/images/faces/face1.jpg" alt="profile" />
          </div>
          <div class="nav-profile-text d-flex ml-0 mb-3 flex-column">
            <span class="font-weight-semibold mb-1 mt-2 text-center mb-1">User Name</span>
            <span class="text-secondary icon-sm text-center"> {new Date().toDateString()}</span>
            
          </div>
      </li>
      <li class="nav-item pt-3">
        <a class="nav-link d-block" href="index.html">
          <img class="sidebar-brand-logo" src="../assets/images/logo.png" alt="" />
          <img class="sidebar-brand-logomini" src="../assets/images/logo-mini.svg" alt="" />
        </a>
      </li>
      <li class="pt-2 pb-1">
       
      </li>
      <li class="nav-item">
        <Link href="/">
        <a class="nav-link" >
          <i class="mdi mdi-compass-outline menu-icon"></i>
          <span class="menu-title">Dashboard</span>
        </a>
        </Link>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
          <i class="mdi mdi-crosshairs-gps menu-icon"></i>
          <span class="menu-title">UI Elements</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="ui-basic">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item mb-1">
             <Link href="/" class="nav-link" > Buttons </Link> 
            </li>
            <li class="nav-item mb-1">
              <Link class="nav-link" href="/">Dropdowns</Link>
            </li>
            <li class="nav-item mb-1">
              <Link class="nav-link" href="/">Typography</Link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
  )
}

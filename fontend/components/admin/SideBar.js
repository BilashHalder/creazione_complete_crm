import React, { useState,useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux';
import router from 'next/router'
import {updateMenu} from '../../services/actions/menu';
import Clock from 'react-live-clock';
export default function SideBar(props) {
  const {menuId}= useSelector((store)=>{return store });
  const dispatch=useDispatch();
   const handleMenuClick=(id)=>{
     dispatch(updateMenu(id));
   }
  const logout=()=>{
 router.push("/")
  }
  return (
    
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
    <ul class="nav">
      <li class="nav-item nav-profile border-bottom">
          <div class="nav-profile-image">
            <img src="../assets/images/faces/face1.jpg" alt="profile" />
          </div>
          <div class="nav-profile-text d-flex ml-0 mb-3 flex-column">
            <span class="font-weight-semibold mb-1 mt-2 text-center mb-1">Admin Name </span>
            <span class="text-secondary icon-sm text-center"> {new Date().toDateString()}</span>
            
          </div>
      </li>
      <li class="nav-item pt-3">
        <div class="nav-link d-block">
          <img class="sidebar-brand-logo" src="../assets/images/logo.png" alt="" />
          <img class="sidebar-brand-logomini" src="../assets/images/logo-mini.svg" alt="" />
        </div>
      </li>
      <li class="pt-2 pb-1">
       
      </li>
      <li class="nav-item">
        <div class="nav-link" onClick={()=>handleMenuClick(1)} >
          <i class="mdi mdi-view-dashboard menu-icon"></i>
          <span class="menu-title">Dashboard</span>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#customer" aria-expanded="false" aria-controls="customer">
          <i class="fa fa-users menu-icon"></i>
          <span class="menu-title">Manage Customer</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="customer">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item mb-1">
             <div href="/admin" class="nav-link"onClick={()=>handleMenuClick(2)} > Add New Customer </div> 
            </li>
            <li class="nav-item mb-1">
              <div class="nav-link" href="/admin" onClick={()=>handleMenuClick(3)}>All Customer </div>
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#employee" aria-expanded="false" aria-controls="employee">
          <i class="mdi mdi-account menu-icon"></i>
          <span class="menu-title">Manage Employee</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="employee">
          <ul class="nav flex-column sub-menu">
          <li class="nav-item mb-1">
              <div class="nav-link" href="/" onClick={()=>handleMenuClick(5)}>Add Employee</div>
            </li>
            
            <li class="nav-item mb-1">
             <div href="/" class="nav-link" onClick={()=>handleMenuClick(4)}> All Employee </div> 
            </li>
            
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#associate" aria-expanded="false" aria-controls="associate">
          <i class="fa fa-handshake-o menu-icon"></i>
          <span class="menu-title">Manage Associate</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="associate">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item mb-1">
             <div  class="nav-link" onClick={()=>handleMenuClick(6)}>Add Associate  </div> 
            </li>
            <li class="nav-item mb-1">
              <div class="nav-link" onClick={()=>handleMenuClick(7)}>All Associate </div>
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#transaction" aria-expanded="false" aria-controls="transaction">
          <i class="fa fa-money menu-icon"></i>
          <span class="menu-title">Transaction</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="transaction">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item mb-1">
             <div class="nav-link" onClick={()=>handleMenuClick(8)} >Withdrawal Request </div> 
            </li>
            <li class="nav-item mb-1">
              <div class="nav-link" onClick={()=>handleMenuClick(9)}>Verification</div>
            </li>
            <li class="nav-item mb-1">
              <div class="nav-link" onClick={()=>handleMenuClick(10)}>Pending Transaction</div>
            </li>
            <li class="nav-item mb-1">
              <div class="nav-link" onClick={()=>handleMenuClick(11)}>Failed Transaction</div>
            </li>
            
            <li class="nav-item mb-1">
              <div class="nav-link" onClick={()=>handleMenuClick(12)}>All Transaction</div>
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#others" aria-expanded="false" aria-controls="others">
          <i class="mdi mdi-buffer menu-icon"></i>
          <span class="menu-title">Others</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="others">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item mb-1">
             <div class="nav-link" onClick={()=>handleMenuClick(13)} > Salary </div> 
            </li>
            <li class="nav-item mb-1">
              <div class="nav-link" onClick={()=>handleMenuClick(14)}>Designation</div>
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <div class="nav-link" onClick={logout} >
          <i class="fa fa-sign-out menu-icon"></i>
          <span class="menu-title">Log Out</span>
        </div>
      </li>

    </ul>
  </nav>
  )
}

import React, { useState,useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux';
import router from 'next/router'

import Clock from 'react-live-clock';
import Link from 'next/link';

import {updateMenu} from '../../services/actions/menu';


export default function SideBar(props) {
  const {menuId}= useSelector((store)=>{return store });
  const dispatch=useDispatch();
   const [menuItem, setmenuItem] = useState(1);
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
            <span class="font-weight-semibold mb-1 mt-2 text-center mb-1">Associate Name {menuId}</span>
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
          <span class="menu-title">Customer</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="customer">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item mb-1">
             <div  class="nav-link" onClick={()=>handleMenuClick(2)} > Add New Customer </div> 
            </li>
            <li class="nav-item mb-1">
              <div class="nav-link" onClick={()=>handleMenuClick(3)}>My Customers </div>
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#Invesments" aria-expanded="false" aria-controls="Invesments">
          <i class="fa fa-certificate menu-icon"></i>
          <span class="menu-title">Invesments</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="Invesments">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item mb-1">
              <div class="nav-link" onClick={()=>handleMenuClick(4)}>My Invesments</div>
            </li>
            <li class="nav-item mb-1">
              <div class="nav-link" onClick={()=>handleMenuClick(5)}>New Invesment</div>
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
             <div class="nav-link" onClick={()=>handleMenuClick(6)}>Pending  </div> 
            </li>
            <li class="nav-item mb-1">
              <div class="nav-link" onClick={()=>handleMenuClick(7)}>Sucessfull</div>
            </li>
            <li class="nav-item mb-1">
              <div class="nav-link" onClick={()=>handleMenuClick(8)}>All Transaction</div>
            </li>
          </ul>
        </div>

        
      </li>
      <li class="nav-item">
        <div class="nav-link" onClick={()=>handleMenuClick(9)} >
          <i class="mdi mdi-bank menu-icon"></i>
          <span class="menu-title">Bank Account</span>
        </div>
      </li>

      <li class="nav-item">
        <div class="nav-link" onClick={()=>handleMenuClick(10)}>
          <i class="mdi mdi-baby menu-icon"></i>
          <span class="menu-title">Nominee</span>
        </div>
      </li>
      <li class="nav-item">
        <div class="nav-link" onClick={()=>handleMenuClick(11)} >
          <i class="fa fa-user menu-icon"></i>
          <span class="menu-title">Profile</span>
        </div>
      </li>
      <li class="nav-item">
        <div class="nav-link" onClick={logout}>
          <i class="fa fa-sign-out menu-icon"></i>
          <span class="menu-title">Log Out</span>
        </div>
      </li>
    </ul>
  </nav>
  )
}

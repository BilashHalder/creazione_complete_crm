import React, { useState,useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux';
import router from 'next/router'
import Clock from 'react-live-clock';
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
            <span class="font-weight-semibold mb-1 mt-2 text-center mb-1">User Name </span>
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
        <div class="nav-link" >
          <i class="mdi mdi-view-dashboard menu-icon"></i>
          <span class="menu-title" onClick={()=>handleMenuClick(1)}>Dashboard</span>
        </div>
      </li>
      <li class="nav-item">
        <div class="nav-link" >
          <i class="fa fa-user-o menu-icon"></i>
          <span class="menu-title" onClick={()=>handleMenuClick(2)}>My Profile</span>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
          <i class="mdi mdi-crosshairs-gps menu-icon"></i>
          <span class="menu-title">Work Report</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="ui-basic">
          <ul class="nav flex-column sub-menu">
          <li class="nav-item mb-1">
              <div class="nav-link" href="/" onClick={()=>handleMenuClick(3)}>Accept Work Report</div>
            </li>
            <li class="nav-item mb-1">
             <div href="/" class="nav-link" onClick={()=>handleMenuClick(4)}>Today Report</div> 
            </li>
            <li class="nav-item mb-1">
              <div class="nav-link" href="/" onClick={()=>handleMenuClick(5)}>My Performance</div>
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="collapse" href="#Transaction" aria-expanded="false" aria-controls="Transaction">
          <i class="fa fa-money menu-icon"></i>
          <span class="menu-title">Salary</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="Transaction">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item mb-1">
             <div href="/" class="nav-link" onClick={()=>handleMenuClick(6)}>History</div> 
            </li>
            <li class="nav-item mb-1">
              <div class="nav-link" href="/" onClick={()=>handleMenuClick(7)}>Download Pay Slip</div>
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <div class="nav-link" href="" onClick={logout} >
          <i class="fa fa-sign-out menu-icon"></i>
          <span class="menu-title">Log Out</span>
        </div>
      </li>
    </ul>
  </nav>
  )
}

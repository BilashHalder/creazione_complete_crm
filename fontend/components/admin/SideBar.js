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
    <ul className="nav">
      <li className="nav-item nav-profile border-bottom">
          <div className="nav-profile-image">
            <img src="../assets/images/faces/face1.jpg" alt="profile" />
          </div>
          <div className="nav-profile-text d-flex ml-0 mb-3 flex-column">
            <span className="font-weight-semibold mb-1 mt-2 text-center mb-1">Admin Name </span>
            <span className="text-secondary icon-sm text-center"> {new Date().toDateString()}</span>
            
          </div>
      </li>
      <li className="nav-item pt-3">
        <div className="nav-link d-block">
          <img className="sidebar-brand-logo" src="../assets/images/logo.png" alt="" />
          <img className="sidebar-brand-logomini" src="../assets/images/logo-mini.svg" alt="" />
        </div>
      </li>
      <li className="pt-2 pb-1">
       
      </li>
      <li className="nav-item">
        <div className="nav-link" onClick={()=>handleMenuClick(1)} >
          <i className="mdi mdi-view-dashboard menu-icon"></i>
          <span className="menu-title">Dashboard</span>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="collapse" href="#customer" aria-expanded="false" aria-controls="customer">
          <i className="fa fa-users menu-icon"></i>
          <span className="menu-title">Manage Customer</span>
          <i className="menu-arrow"></i>
        </a>
        <div className="collapse" id="customer">
          <ul className="nav flex-column sub-menu">
            <li className="nav-item mb-1">
             <div href="/admin" className="nav-link"onClick={()=>handleMenuClick(2)} > Add New Customer </div> 
            </li>
            <li className="nav-item mb-1">
              <div className="nav-link" href="/admin" onClick={()=>handleMenuClick(3)}>All Customer </div>
            </li>
          </ul>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="collapse" href="#employee" aria-expanded="false" aria-controls="employee">
          <i className="mdi mdi-account menu-icon"></i>
          <span className="menu-title">Manage Employee</span>
          <i className="menu-arrow"></i>
        </a>
        <div className="collapse" id="employee">
          <ul className="nav flex-column sub-menu">
          <li className="nav-item mb-1">
              <div className="nav-link" href="/" onClick={()=>handleMenuClick(5)}>Add Employee</div>
            </li>
            
            <li className="nav-item mb-1">
             <div href="/" className="nav-link" onClick={()=>handleMenuClick(4)}> All Employee </div> 
            </li>
            
          </ul>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="collapse" href="#associate" aria-expanded="false" aria-controls="associate">
          <i className="fa fa-handshake-o menu-icon"></i>
          <span className="menu-title">Manage Associate</span>
          <i className="menu-arrow"></i>
        </a>
        <div className="collapse" id="associate">
          <ul className="nav flex-column sub-menu">
            <li className="nav-item mb-1">
             <div  className="nav-link" onClick={()=>handleMenuClick(6)}>Add Associate  </div> 
            </li>
            <li className="nav-item mb-1">
              <div className="nav-link" onClick={()=>handleMenuClick(7)}>All Associate </div>
            </li>
          </ul>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="collapse" href="#transaction" aria-expanded="false" aria-controls="transaction">
          <i className="fa fa-money menu-icon"></i>
          <span className="menu-title">Transaction</span>
          <i className="menu-arrow"></i>
        </a>
        <div className="collapse" id="transaction">
          <ul className="nav flex-column sub-menu">
            <li className="nav-item mb-1">
             <div className="nav-link" onClick={()=>handleMenuClick(8)} >Withdrawal Request </div> 
            </li>
            <li className="nav-item mb-1">
              <div className="nav-link" onClick={()=>handleMenuClick(9)}>Verification</div>
            </li>
            <li className="nav-item mb-1">
              <div className="nav-link" onClick={()=>handleMenuClick(10)}>Pending Transaction</div>
            </li>
            <li className="nav-item mb-1">
              <div className="nav-link" onClick={()=>handleMenuClick(11)}>Failed Transaction</div>
            </li>
            
            <li className="nav-item mb-1">
              <div className="nav-link" onClick={()=>handleMenuClick(12)}>All Transaction</div>
            </li>
          </ul>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="collapse" href="#others" aria-expanded="false" aria-controls="others">
          <i className="mdi mdi-buffer menu-icon"></i>
          <span className="menu-title">Others</span>
          <i className="menu-arrow"></i>
        </a>
        <div className="collapse" id="others">
          <ul className="nav flex-column sub-menu">
            <li className="nav-item mb-1">
             <div className="nav-link" onClick={()=>handleMenuClick(13)} > Salary </div> 
            </li>
            <li className="nav-item mb-1">
              <div className="nav-link" onClick={()=>handleMenuClick(14)}>Designation</div>
            </li>
          </ul>
        </div>
      </li>
      <li className="nav-item">
        <div className="nav-link" onClick={logout} >
          <i className="fa fa-sign-out menu-icon"></i>
          <span className="menu-title">Log Out</span>
        </div>
      </li>

    </ul>
  </nav>
  )
}

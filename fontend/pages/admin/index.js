import {useSelector} from 'react-redux';

import Head from 'next/head'
import Script from 'next/script'
import Footer from '../../components/Footer'
import SideBar from '../../components/admin/SideBar';
import NavBar from '../../components/Navbar';
import Header from '../../components/Header'


//////////////////////////////////////////
import Dashboard from '../../components/admin/Dashboard';
import AddAssociate from '../../components/admin/AddAssociate';
import AddCustomer from '../../components/admin/AddCustomer';
import AddEmployee from '../../components/admin/AddEmployee';
import AllAssociate from '../../components/admin/AllAssociate';
import AllCustomer from '../../components/admin/AllCustomer';
import AllEmployee from '../../components/admin/AllEmployee';
import AllTransaction from '../../components/admin/AllTransaction';
import Designation from '../../components/admin/Designation';
import FailedTransaction from '../../components/admin/FailedTransaction';
import PendingTransaction from '../../components/admin/PendingTransaction';
import Salary from '../../components/admin/Salary';
import Verification from '../../components/admin/Verification';
import WithdrawalRequest from '../../components/admin/WithdrawalRequest';







/////////////////////////////////////////////////
export default function Index() {
  const {menuId}= useSelector((store)=>{return store });
  return (
   <>
   <Head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"/>
    <link href='./assets/css/demo_1/style.css'></link>
    <link href='./assets/vendors/css/vendor.bundle.base.css'></link>
    <link rel="stylesheet" href="./assets/vendors/mdi/css/materialdesignicons.min.css"/>
    <link rel="stylesheet" href="./assets/vendors/flag-icon-css/css/flag-icon.min.css"/>
    <link rel="stylesheet" href="./assets/vendors/css/vendor.bundle.base.css"/>
    <link rel="stylesheet" href="./assets/vendors/jquery-bar-rating/css-stars.css" />
    <link rel="stylesheet" href="./assets/vendors/font-awesome/css/font-awesome.min.css" />
    <script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
    <title>Creazione Admin</title>
    </Head>
   
    <div class="container-scroller">
    <SideBar category="1"/>
      <div class="container-fluid page-body-wrapper">
       <NavBar/>
        <div class="main-panel">
          <div class="content-wrapper pb-0">
          {/* <Header/> */}

          {menuId==1?<Dashboard/>:<></>}
          {menuId==2?<AddCustomer/>:<></>}
          {menuId==3?<AllCustomer/>:<></>}
          {menuId==4?<AllEmployee/>:<></>}
          {menuId==5?<AddEmployee/>:<></>}
          {menuId==6?<AddAssociate/>:<></>}
          {menuId==7?<AllAssociate/>:<></>}
          {menuId==8?<WithdrawalRequest/>:<></>}
          {menuId==9?<Verification/>:<></>}
          {menuId==10?<PendingTransaction/>:<></>}
          {menuId==11?<FailedTransaction/>:<></>}
          {menuId==12?<AllTransaction/>:<></>}
          {menuId==13?<Salary/>:<></>}
          {menuId==14?<Designation/>:<></>}

          
          </div>
          <Footer/>
        </div>
      </div>
    </div>

   <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js'></Script>
   <Script src='./assets/vendors/js/vendor.bundle.base.js'></Script>
   <Script defer src="./assets/js/misc.js"></Script>
   </>
  )
}

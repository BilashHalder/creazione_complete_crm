
import {useSelector} from 'react-redux';
import Head from 'next/head'
import Script from 'next/script'
import Footer from '../../components/Footer'
import SideBar from '../../components/employee/SideBar';
import NavBar from '../../components/Navbar';
import Header from '../../components/Header';
import DashBoard from '../../components/employee/Dashboard';
import Profile from '../../components/employee/Profile';
import Accept from '../../components/employee/Accept';
import History from '../../components/employee/History';
import TodayReport from '../../components/employee/TodayReport';
import Performance from '../../components/employee/Performance';
import Salary from '../../components/employee/Salary';

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
    <title>Creazione Employee</title>
    </Head>
   
    <div class="container-scroller">
    <SideBar category="1"/>
      <div class="container-fluid page-body-wrapper">
       <NavBar/>
        <div class="main-panel">
          <div class="content-wrapper pb-0">
          <Header/>
           {menuId==1?<DashBoard/>:<></>}
           {menuId==2?<Profile/>:<></>}
           {menuId==3?<Accept/>:<></>}
           {menuId==4?<TodayReport/>:<></>}
           {menuId==5?<Performance/>:<></>}
           {menuId==6?<History/>:<></>}
           {menuId==7?<Salary/>:<></>}
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

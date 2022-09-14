import { useRouter } from 'next/router';
import {useSelector} from 'react-redux';
import { useEffect,useState } from 'react';
import Head from 'next/head'
import Script from 'next/script'
import Footer from '../../components/Footer'
import SideBar from '../../components/customer/SideBar';
import NavBar from '../../components/Navbar';
import Header from '../../components/Header'

//////////////////////////////////////////////////////////
import MyInvesments from '../../components/customer/MyInvesments';
import NewInvesMent from '../../components/customer/NewInvesMent';
import BankAccount from '../../components/customer/BankAccount';
import CustomerNominee from '../../components/customer/CustomerNominee';
import CustomerProfile from '../../components/customer/CustomerProfile';
import Dashboard from '../../components/customer/Dashboard';
import Pending from '../../components/customer/Pending';
import Rejected from '../../components/customer/Rejected';
import Successfull from '../../components/customer/Successfull';
import axios from 'axios';







export default function Index() {
  const [userInfo, setUserInfo] = useState(null)
  const router = useRouter();
  useEffect(() => {
    if(localStorage.getItem('customerKey')){
      axios.post('http://localhost:5000/api/customer/info',{token:localStorage.getItem('customerKey')}).
      then((response)=>{
        setUserInfo(response.data.result);
      })
      .catch((err)=>{
        localStorage.removeItem('customerKey');
        router.push('/');
      });
    }
    else{
      router.push('/');
    }
  }, [])
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
    <title>Creazione Customer</title>
    </Head>
   
    <div class="container-scroller">
    <SideBar user={userInfo}/>
      <div class="container-fluid page-body-wrapper">
       <NavBar/>
        <div class="main-panel">
          <div class="content-wrapper pb-0">
          <Header/>
          {menuId==1?<Dashboard user={userInfo}/>:<></>}
          {menuId==2?<Pending user={userInfo}/>:<></>}
          {menuId==3?<Successfull user={userInfo}/>:<></>}
          {menuId==4?<Rejected user={userInfo}/>:<></>}
          {menuId==5?<MyInvesments user={userInfo}/>:<></>}
          {menuId==6?<NewInvesMent user={userInfo}/>:<></>}
          {menuId==8?<BankAccount user={userInfo}/>:<></>}
          {menuId==9?<CustomerNominee user={userInfo}/>:<></>}
          {menuId==10?<CustomerProfile/>:<></>}
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

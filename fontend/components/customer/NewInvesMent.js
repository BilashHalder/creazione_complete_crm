import React,{useState,useEffect} from 'react'
import {apiUrl} from '../../locale';
import axios from 'axios';

export default function AllInvesments() {
  const [accounts, setaccounts] = useState(null);
  const [nominees, setnominees] = useState(null);
  const [offline, setoffline] = useState(false)
  useEffect(()=>{
    axios.post(apiUrl+'bank_account/user/',{
    user_id:localStorage.getItem("uid"),
    user_type:1
    }).then((response)=>{
      setaccounts(response.data);
    }).catch((err)=>{
      console.log(err);
    })

    axios.post(apiUrl+'nominee/user/',{
      user_id:localStorage.getItem("uid"),
      user_type:1
      }).then((response)=>{
        setnominees(response.data);
      }).catch((err)=>{
        console.log(err);
      })

  },[]);

  return (
    <div class="col-12 grid-margin">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title text-center">Add New Invesment</h4>
        <form class="form-sample">
          <div class="row">
            <div class="col-md-12">
              <div class="form-group row">
                <label class="col-sm-3 col-form-label">Ammount</label>
                <div class="col-sm-9">
                  <input type="number" class="form-control"/>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              {accounts==null?<p>Please Add Bank Account</p>:<>
              <div class="form-group row">
                <label class="col-sm-3 col-form-label">Select Account</label>
                <div class="col-sm-9">
                  <select class="form-control" name="account">
                    {
                      accounts.map((item)=>{
                        return(<option value={item.account_no} key={item.account_no}>{item.account_no+' ( '+item.branch+' ) '}</option>)
                      })
                    }
                  </select>
                </div>
              </div>
              </>}
            </div>
            <div class="col-md-12">
              {
                nominees==null?<p>Please Add a Nominee</p>:<div class="form-group row">
                <label class="col-sm-3 col-form-label">Select Nominee</label>
                <div class="col-sm-9">
                  <select class="form-control" name='nominee'>
                    {
                      nominees.map((item)=>{
                        return(<option value={item.nominee_id}>{item.name}</option>)
                      })
                    }
                  </select>
                </div>
              </div>
              }
            </div>
          </div>
        </form>


        <div class="row">
          <div class="col-md-6">
            {
              offline?<div class="form-group">
              <label for="exampleInputUsername1">Transaction Id</label>
              <input type="text" class="form-control" id="exampleInputUsername1" placeholder="Transaction Id" />
            </div>:<button class="btn btn-outline-primary bg-white mb-2 mb-md-0" onClick={()=>setoffline(true)}>Already Paid?</button>
            }
          
              
          </div>
          <div class="col-md-6">
            {
              offline?<button class="btn btn-primary mb-2 mb-md-0 me-2 mt-4">Save</button>:
              <button class="btn btn-primary mb-2 mb-md-0 me-2">Payment Now</button>
            }
          
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

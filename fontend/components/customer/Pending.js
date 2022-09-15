import React,{useState,useEffect} from 'react'
import DataTable from 'react-data-table-component';
import { apiUrl, imageUrl } from '../../locale';
import axios from 'axios';

export default function Pending() {
  const columns = [
    {
        name: 'Transaction Id',
        selector: row => row.transaction_id,
    },
    {
        name: 'Amount',
        selector: row => row.amount,
    },
    {
      name: 'Date',
      selector: row => row.transaction_time,
  },
  {
    name: 'Status',
    selector: row => row.status,
},
];
const [data, setdata] = useState(null);
const [count, setCount] = useState(0);
useEffect(() => {
  let user_id = localStorage.getItem("uid")
  axios.post(`${apiUrl}off_transaction/user`,{
    customer_id:user_id
  }).then((response) => {

    setdata(response.data);
  }).catch((err) => {
    console.log(err);
  });
}, [count])


const handleform=(event)=>{
  event.preventDefault();

  var formData = new FormData();
  var imagefile = document.querySelector('#formFile');
  formData.append("file", imagefile.files[0]);
  formData.append('transaction_id',event.target.transaction_id.value)
  formData.append('amount',event.target.amount.value);
  formData.append('customer_id',localStorage.getItem("uid"));
  
  axios.post(`${apiUrl}off_transaction`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
}).then(function (result) {
  console.log(result.data.data[0]);
  setCount(count + 1)
})
.catch(function (err) {
  console.log(err);
});
}

  return (
    <div className="row">
      
      <div className="col-md-4 ">
        <div className="card">
        <div className="card-body">
                    <h4 className="card-title">Enter New Transaction</h4>
                    <form className="forms-sample" onSubmit={handleform}>
                      <div className="form-group">
                        <label htmlfor="exampleInputName1">Transaction Id</label>
                        <input type="text" className="form-control" id="exampleInputName1" name="transaction_id" placeholder="Transaction Id"/>
                      </div>
                      <div className="form-group">
                        <label htmlfor="exampleInputEmail3">Amount</label>
                        <input type="number" className="form-control" id="exampleInputEmail3" name="amount" placeholder="Amount"/>
                      </div>
                      <div className="form-group">
                        <label>File upload</label>
                        <input className="form-control" name="file" type="file" id="formFile"/>
                        
                      </div>
                      <button type="submit" className="btn btn-primary me-2">Submit</button>
                      <button className="btn btn-light">Cancel</button>
                    </form>
                  </div>
        </div>
      </div>
      <div className="col-md-8 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title text-center">Offline Transaction History</h4>
           {data? <DataTable
            columns={columns}
            data={data}
            pagination
        />:<p className="text-center">No Offline Transaction Found</p> }

          </div>
        </div>
      </div>
    </div>
  )
}

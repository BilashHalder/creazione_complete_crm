import React, { useState, useEffect } from 'react'
const validator = require('validator');
import { apiUrl, calCulateSalary } from '../../locale';
const axios = require('axios').default;



export default function Designation() {
  const [desgList, setDesgList] = useState();
  const [title, setTitle] = useState("");
  const [count, setcount] = useState(0);
  const [err, setErr] = useState();
  const [success, setSucess] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get(`${apiUrl}designation`).then((response) => {
      setDesgList(response.data);
      console.log(response.data)
    }).catch((err) => {
      console.log(err);
    });
  }, [count]);


  const handleForm = (event) => {
    event.preventDefault();
    var formData = new FormData();
    formData.append('title', title)

    axios.post(apiUrl + 'designation', formData).then((response) => {
      setMessage("Designation Information Saved Successfully");
      setErr(false);
      setSucess(true);
      setTitle("");
      setcount(count + 1);
    }).catch((err) => {
      setMessage(err.response.data.message);
      setErr(true);
      setSucess(false);
    });

  }


  const resetForm=(e)=>{
    e.preventDefault();
    setTitle("");

  }

  return (
    <div className='row ps-2'>
      <div className="col-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title text-center">Designation List </h3>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th> Id </th>
                  <th> Title </th>
                  <th> Edit </th>
                  <th> Delete </th>
                </tr>
              </thead>
              <tbody>
                {
                  desgList?
                  <>
                  {
                    desgList.map((item,index)=>{
                      return(
                        <tr key={index}>
                  <td> {item.designation_id} </td>
                  <td> {item.title} </td>
                  <td> <button type="button" className="btn btn-outline-secondary btn-icon-text btn-xs"> Edit <i className="mdi mdi-file-check btn-icon-append"></i>
                  </button> </td>
                  <td> <button type="button" className="btn btn-outline-warning btn-xs btn-icon-text">
                    <i className="mdi mdi-delete-forever btn-icon-prepend"></i> Delete </button>
                  </td>
                </tr>
                      )
                    })
                  }
                  </>:<p>Sorry No Designation Information Saved</p>
                }

              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="col-6 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title text-center">Add New Designation </h3>
            <form className="forms-sample pt-3" onSubmit={handleForm} >
             
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="title">Designation Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Designation Title"  value={title} onChange={(e)=> setTitle(e.target.value)} required/>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary me-2">Submit</button>
              <button className="btn btn-light" onClick={resetForm}>Reset</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

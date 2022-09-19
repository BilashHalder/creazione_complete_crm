import React, { useState, useEffect } from 'react'
const validator = require('validator');
import { apiUrl, calCulateSalary } from '../../locale';
const axios = require('axios').default;




export default function Salary() {
  const [salaryList, setsalaryList] = useState();

  const [basic, setbasic] = useState("");
  const [hra, sethra] = useState("");
  const [conveyance, setconveyance] = useState("");
  const [medical, setmedical] = useState("");
  const [special, setspecial] = useState("");
  const [pf, setpf] = useState("");
  const [insurance, setinsurance] = useState("");
  const [tax, settax] = useState("");
  const [count, setcount] = useState(0);

  const [err, setErr] = useState();
  const [success, setSucess] = useState("");
  const [message, setMessage] = useState("");



  useEffect(() => {
    axios.get(`${apiUrl}salary`).then((response) => {
      setsalaryList(response.data);
      console.log(response.data)
    }).catch((err) => {
      console.log(err);
    });
  }, [count])
  const handleForm = (event) => {
    event.preventDefault();
    var formData = new FormData();
    formData.append('basic', basic)
    formData.append('hra', hra)
    formData.append('conveyance', conveyance);
    formData.append('medical', medical)
    formData.append('special', special);
    formData.append('pf', pf);
    formData.append('insurance', insurance);
    formData.append('tax', tax);

    axios.post(apiUrl + 'salary', formData).then((response) => {
      setMessage("Salay Information Added Successfully");
      setErr(false);
      setSucess(true);
      setbasic("");
      sethra("");
      setconveyance("");
      setmedical("");
      setspecial("");
      setpf("");
      setinsurance("");
      settax("");
      setcount(count + 1);
    }).catch((err) => {
      setMessage(err.response.data.message);
      setErr(true);
      setSucess(false);
    });

  }

  const resetForm = (event) => {
    setMessage("");
    setSucess(false);
    setErr(false);
    setbasic("");
    sethra("");
    setconveyance("");
    setmedical("");
    setspecial("");
    setpf("");
    setinsurance("");
    settax("");
    //`basic``hra``conveyance``medical``special`, `pf`insurance``tax``
    event.preventDefault();
  }

  return (
    <div>
      <div className='row ps-2'>
        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Add New Salary </h3>
              <form className="forms-sample pt-3" onSubmit={handleForm}>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="basic">Basic</label>
                      <input type="number" className="form-control" min={0} id="basic" placeholder="Basic" value={basic} onChange={(e) => setbasic(e.target.value)} required />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="hra">HRA</label>
                      <input type="number" className="form-control" id="hra" min={0} placeholder="HRA" value={hra} onChange={(e) => sethra(e.target.value)} required />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="Conveyance">Conveyance</label>
                      <input type="number" className="form-control" id="Conveyance" min={0} placeholder="Conveyance" value={conveyance} onChange={(e) => setconveyance(e.target.value)} required />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="Medical">Medical</label>
                      <input type="number" className="form-control" id="Medical" min={0} placeholder="Medical" value={medical} onChange={(e) => setmedical(e.target.value)} required />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="Special">Special</label>
                      <input type="number" className="form-control" id="Special" min={0} placeholder="Special" value={special} onChange={(e) => setspecial(e.target.value)} required />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="pf">PF</label>
                      <input type="number" className="form-control" id="pf" min={0} placeholder="PF" value={pf} onChange={(e) => setpf(e.target.value)} required />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="Insurance">Insurance</label>
                      <input type="number" className="form-control" id="Insurance" min={0} placeholder="Insurance" value={insurance} onChange={(e) => setinsurance(e.target.value)} required />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="Tax">Tax</label>
                      <input type="number" className="form-control" id="Tax" min={0} placeholder="Tax" value={tax} onChange={(e) => settax(e.target.value)} required />
                    </div>
                  </div>
                  {/* <div className='col-md-4'>
                   <p> Total Salary: {total} </p>
                   <p> Deduction: {deduction}</p>
                   <p> In Hand : {inhand}</p>
                  </div> */}
                </div>
                {
                  message ? <div className={err ? "alert alert-danger" : success ? "alert alert-success" : "hide"} role="alert"> {message} </div> : <></>
                }
                <button type="submit" className="btn btn-primary me-2">Submit</button>
                <button className="btn btn-light" onClick={resetForm}>Reset</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center"> Salary List </h3>
              {salaryList ? <>
                <table className="table table-bordered table-hover table-responsive">
                  <thead>
                    <tr>
                      <th> Id </th>
                      <th> Basic </th>
                      <th> HRA </th>
                      <th>Conveyance</th>
                      <th>Medical</th>
                      <th>Special</th>
                      <th>Insurance</th>
                      <th>PF</th>
                      <th>Tax</th>
                      <th>Total Salary </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      salaryList.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.salary_id}</td>
                            <td>{item.basic}</td>
                            <td>{item.hra}</td>
                            <td>{item.conveyance}</td>
                            <td>{item.medical}</td>
                            <td>{item.special}</td>
                            <td>{item.insurance}</td>
                            <td>{item.pf}</td>
                            <td>{item.tax}</td>
                            <td>{calCulateSalary(item)}</td>
                            <td><button className="btn btn-outline-warning">Edit</button></td>
                          </tr>
                        )
                      })
                    }

                  </tbody>
                </table>
              </> : <p className='text-danger'>No Salary Added</p>}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

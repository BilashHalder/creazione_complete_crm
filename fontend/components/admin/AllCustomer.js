import React, {useEffect,useState}from 'react'
const axios = require('axios').default;
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AllCustomer() {
  const [customers, setcustomers] = useState(null);
  const [isloading, setisloading] = useState(true);
  const [edit, setEdit] = useState(null);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);


  useEffect(()=>{
    axios.get('http://localhost:5000/api/customer')
  .then(function (response) {
    setcustomers(response.data);
    console.log(response.data)
    setisloading(false);
  })
  .catch(function (error) {
    console.log(error);
  })
  },[]);

  const customerEdit=(id)=>{
  setEdit(id);
  setOpen(true);
  }
  const customerDelete=(id)=>{
   console.log( document.getElementById(`data${id}`).style.display='none')
    
      }
  return (
    <div className='row px-4'>
    <div className="col-12 grid-margin stretch-card">
    <div className="card">


    
                  <div className="card-body">
                    {
                      isloading?<div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                       </div>:
                       <>
                       <h3 className="card-title text-center">All Customer </h3>
                    <table className="table table-bordered table-responsive">
                        <thead>
                          <tr >
                            <th> Id </th>
                            <th> Name </th>
                            <th> Phone No </th>
                            <th> Email Id </th>
                            <th> Gender </th>
                            <th> Images </th>
                            <th> Status </th>
                            <th> Edit </th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                              customers.map((item, i)=>{
                                return (
                                  <tr key={i} id={`data${i}`}>
                                  <td> {item.customer_id} </td>
                                  <td> {item.name}</td>
                                  <td>{item.phone} </td>
                                  <td> {item.email} </td>
                                  <td> {item.gender==0?"Male":item.gender==1?"Female":"Others"} </td>
                                  <td> <img src={`http://localhost:5000/uploads/images/${item.image}`} /> </td>
                                  <td>{item.status==0?"Deactive":"Active"}</td>
                                  <td><button onClick={()=>{customerEdit(i)}} className="btn btn-outline-warning">Edit</button></td>
                                </tr>
                                )
                              })

                          }
                          
                        </tbody>
                      </table>
                       </>
                    }
                   
                  </div>
                  <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {
          edit!=null?<Box sx={style}>
          <h3 className="text-center">Edit Customer Information</h3>
             <form>
             <div className='row'>
             <div className="col-md-4 ">
             <label htmlFor="recipient-name" className="col-form-label">Full Name</label>
             <input type="text" className="form-control" id="name" value={customers[edit].name}/>
             </div>
             <div className="col-md-4">
             <label htmlFor="recipient-name" className="col-form-label">Email</label>
             <input type="email" className="form-control" id="email" value={customers[edit].email}/>
             </div>
             <div className="col-md-4">
             <label htmlFor="recipient-name" className="col-form-label">Phone No</label>
             <input type="number" className="form-control" id="phone" value={customers[edit].phone}/>
             </div>
            </div>
             </form>
             
        </Box>:  <></>
        }
      </Modal>
           </div>
    </div>
    </div>
  )
}

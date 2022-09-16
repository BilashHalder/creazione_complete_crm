import React, {useEffect,useState}from 'react'
const axios = require('axios').default;
import { apiUrl, imageUrl } from '../../locale';
export default function AllEmployee() {

  const [associate, setassociate] = useState()
  useEffect(()=>{
axios.get(`${apiUrl}associate`).then((response)=>{
  setassociate(response.data);
})
  },[])
  return (
    <div className='row px-4'>
    <div className="col-12 grid-margin stretch-card">
    <div className="card">
                  <div className="card-body">
                    <h3 className="card-title text-center">All Associate </h3>
                    {
                      associate?<>
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th> Associate id </th>
                            <th>Image</th>
                            <th> Name </th>
                            <th> Email </th>
                            <th> Phone No </th>
                            <th> Status </th>
                            <th> View </th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            associate.map((item,index)=>{
                              return(<tr key={index}>
                                <td>CRZNASST000{item.employee_id}</td>
                                <td><img src={`${imageUrl}${item.image}`}/></td>
                                <td>{item.name} </td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td> {item.status?"Active":"De-Active"}</td>
                                <td><button className='btn btn-primary-outline'>View</button></td>
                              </tr>)
                            })
                          }
                        </tbody>
                      </table>
                      </>:<><p>No Associate Found</p></>
                    }
                  </div>
           </div>
    </div>
    </div>
  )
}

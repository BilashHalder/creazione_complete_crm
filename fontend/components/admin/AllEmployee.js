import React from 'react'

export default function AllEmployee() {
  return (
    <div className='row px-4'>
    <div class="col-12 grid-margin stretch-card">
    <div class="card">
                  <div class="card-body">
                    <h3 class="card-title text-center">All Employee </h3>
                    <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th> Id </th>
                            <th> Basic </th>
                            <th> HRA </th>
                            <th> Edit </th>
                            <th> Delete </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td> 1 </td>
                            <td> Herman Beck </td>
                            <td>
                              Dummy
                            </td>
                            <td> $ 77.99 </td>
                            <td> May 15, 2015 </td>
                          </tr>
                        </tbody>
                      </table>
                  </div>
           </div>
    </div>
    </div>
  )
}

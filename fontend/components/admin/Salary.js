import React from 'react'

export default function Salary() {
  return (
    <div>
        <div className='row ps-2'>
    <div class="col-6 grid-margin stretch-card">
    <div class="card">
                  <div class="card-body">
                    <h3 class="card-title text-center">All Salary List </h3>
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
                              <div class="progress">
                                <div class="progress-bar bg-success" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </td>
                            <td> $ 77.99 </td>
                            <td> May 15, 2015 </td>
                          </tr>
                        </tbody>
                      </table>
                  </div>
           </div>
    </div>
    <div class="col-6 grid-margin stretch-card">
           <div class="card">
                  <div class="card-body">
                    <h3 class="card-title text-center">Add New Salary </h3>
                    <form class="forms-sample pt-3">
                      <div class="row">
                        <div class="col-md-4">
                        <div class="form-group">
                        <label for="exampleInputName1">Basic</label>
                        <input type="number" class="form-control" id="exampleInputName1" placeholder="Basic"/>
                        </div>
                        </div>
                        <div class="col-md-4">
                        <div class="form-group">
                        <label for="exampleInputName1">HRA</label>
                        <input type="number" class="form-control" id="exampleInputName1" placeholder="Basic"/>
                        </div>
                        </div>
                        <div class="col-md-4">
                        <div class="form-group">
                        <label for="exampleInputName1">Conveyance</label>
                        <input type="number" class="form-control" id="exampleInputName1" placeholder="Basic"/>
                        </div>
                        </div>
                        <div class="col-md-4">
                        <div class="form-group">
                        <label for="exampleInputName1">Medical</label>
                        <input type="number" class="form-control" id="exampleInputName1" placeholder="Basic"/>
                        </div>
                        </div>
                        <div class="col-md-4">
                        <div class="form-group">
                        <label for="exampleInputName1">Special</label>
                        <input type="number" class="form-control" id="exampleInputName1" placeholder="Basic"/>
                        </div>
                        </div>
                        <div class="col-md-4">
                        <div class="form-group">
                        <label for="exampleInputName1">PF</label>
                        <input type="number" class="form-control" id="exampleInputName1" placeholder="Basic"/>
                        </div>
                        </div>
                        <div class="col-md-4">
                        <div class="form-group">
                        <label for="exampleInputName1">Insurance</label>
                        <input type="number" class="form-control" id="exampleInputName1" placeholder="Basic"/>
                        </div>
                        </div>
                        <div class="col-md-4">
                        <div class="form-group">
                        <label for="exampleInputName1">Tax</label>
                        <input type="number" class="form-control" id="exampleInputName1" placeholder="Basic"/>
                        </div>
                        </div>
                      </div>
                      <button type="submit" class="btn btn-primary me-2">Submit</button>
                      <button class="btn btn-light">Cancel</button>
                    </form>
                  </div>
           </div>
    </div>
    </div>
    </div>
  )
}

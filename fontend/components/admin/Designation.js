import React from 'react'

export default function Designation() {
  return (
    <div className='row ps-2'>
    <div class="col-6 grid-margin stretch-card">
    <div class="card">
                  <div class="card-body">
                    <h3 class="card-title text-center">Designation List </h3>
                    <table class="table table-bordered">
                        <thead>
                          <tr>
                            <th> Id </th>
                            <th> Title </th>
                            <th> Salary </th>
                            <th> Edit </th>
                            <th> Delete </th>
                          </tr>
                        </thead>
                        <tbody>
                         
                         
                         
                          <tr>
                            <td> 1 </td>
                            <td> HR </td>
                            <td>
                              12555
                            </td>
                            <td> <button type="button" class="btn btn-outline-secondary btn-icon-text btn-xs"> Edit <i class="mdi mdi-file-check btn-icon-append"></i>
                          </button> </td>
                            <td> <button type="button" class="btn btn-outline-warning btn-xs btn-icon-text">
                            <i class="mdi mdi-delete-forever btn-icon-prepend"></i> Delete </button>
                            </td>
                          </tr>
                         
                      
                      
                         
                        
                        </tbody>
                      </table>
                  </div>
           </div>
    </div>
    <div class="col-6 grid-margin stretch-card">
           <div class="card">
                  <div class="card-body">
                    <h3 class="card-title text-center">Add New Designation </h3>
                    <form class="forms-sample pt-3">
                      <div class="row">
                        <div class="col-md-6">
                        <div class="form-group">
                        <label for="exampleInputName1">Designation Title</label>
                        <input type="number" class="form-control" id="exampleInputName1" placeholder="Designation Title"/>
                        </div>
                        </div>
                        <div class="col-md-6">
                        <div class="form-group">
                        <label for="exampleSelectGender">Salary</label>
                        <select class="form-control" id="exampleSelectGender">
                          <option>12500</option>
                          <option>7000</option>
                        </select>
                        </div>
                        </div>
                        <div class="col-md-12">
                        <div class="form-group">
                        <label for="exampleSelectGender">On Change Salary Information</label>
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
  )
}

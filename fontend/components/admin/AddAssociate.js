import React from 'react'

export default function AddAssociate() {
  return (
    <div className='row'>
    <div class="col-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h3 class="card-title text-center">Add Associate</h3>
                    <form class="forms-sample pt-3">

                      <div class="row">
                        <div class="col-md-6">
                        <div class="form-group">
                        <label for="exampleInputName1">Name</label>
                        <input type="text" class="form-control" id="exampleInputName1" placeholder="Name"/>
                      </div>
                        </div>
                        <div class="col-md-6">
                        <div class="form-group">
                        <label for="exampleInputEmail3">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail3" placeholder="Email"/>
                      </div>
                        </div>

                        <div class="col-md-6">
                        <div class="form-group">
                        <label for="exampleInputPassword4">Phone No</label>
                        <input type="number" class="form-control" id="exampleInputPassword4" placeholder="Phone No"/>
                      </div>
                        </div>
                        <div class="col-md-6">
                        <div class="form-group">
                        <label for="exampleSelectGender">Gender</label>
                        <select class="form-control" id="exampleSelectGender">
                          <option value={0}>Male</option>
                          <option value={1}>Female</option>
                          <option value={2}>Others</option>
                        </select>
                      </div>
                        </div>
                        <div class="col-md-6">
                        <div class="form-group">
                        <label>Upload Image</label>
                        <input type="file" name="img[]" class="file-upload-default"/>
                        <div class="input-group col-xs-12">
                          <input type="file" class="form-control file-upload-info" disabled="" placeholder="Upload Image"/>
                        </div>
                      </div>
                        </div>
                        <div class="col-md-4">
                        <div class="form-group">
                        <label for="exampleInputCity1">Commision Rate</label>
                        <input type="number" class="form-control" id="exampleInputCity1" placeholder="Commision Rate"/>
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

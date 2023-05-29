import React from 'react'
import { useState } from 'react'

export default function Contact() {
  const [Name, setName]=useState('Suresh Rokaya')

  const btnsubmit=((q)=>{
    q.preventDefault();
    console.log("Suresh Rokaya Rfom ");
  })

  const InputBtn=(tt)=>{
    setName(tt.target.value)
  }


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-5 offset-lg-1">
          <h3>ADD Form</h3>
            <form onSubmit={btnsubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={InputBtn} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>


        </div>


        <div className="col-lg-5 offset-lg-1">
          <h3> Add List </h3>
          <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
    
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{Name}</td>
      <td>Otto</td>
    
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
    
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

        </div>
      </div>
    </div>
  )
}

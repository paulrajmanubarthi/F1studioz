import React from 'react';
import { PlusCircle } from 'react-bootstrap-icons';
import { Link } from 'react-bootstrap-icons';


const Header = () => {
  return (
    <div>
          <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Product info</th>
      <th scope="col">Cart Name</th>
      <th scope="col">Shipping Point</th>
      <th scope="col">Created by</th>
      <th scope="col">Expiry</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2classic garage door</td>
      <td>Jhonson classic</td>
      <td>Russian Plant</td>
      <td>Manoj Bajpayee</td>
      <td className='text-danger'>Expires in 6days</td>
    </tr>


    <tr>
    <td>Door Intellicore</td>
      <td>Carter Classic</td>
      <td>Russia Plant</td>
      <td>Steve Benneth</td>
      <td className='text-danger'> Expires in 6days</td>
    </tr>
    
    <tr>
    <td> canyon ridge</td>
      <td>Michgan Classic</td>
      <td>ABC Plant</td>
      <td>Steve Benneth</td>
      <td>Expires in 90days <span className='text-success border border-2 ms-3 bg-white rounded p-1'>NEW</span></td>
    </tr>

    <tr>
      <td>Hardware special</td>
      <td>Jhon david</td>
      <td>Russia plant</td>
      <td>Manhotton Cree</td>
      <td>Expires in 90days <span className='text-success border border-2 ms-3 bg-white rounded p-1'>NEW</span></td> 
      
    </tr>

    <tr>
      <td>1classic collection door</td>
      <td>Christopher classic</td>
      <td>ABC plant</td>
      <td>Jamie Sunshine</td>
      <td className='text-danger'>Expires in 5days</td>
     
    </tr>

    <tr>
      <td>2classic collection door</td>
      <td>Jhonclassic</td>
      <td>Russia Plant</td>
      <td>Jonathon peter</td>
      <td className='text-danger'>Expires in 6days</td>
    </tr>

    <tr>
    <td>Door Intellicore</td>
      <td>Carter Classic</td>
      <td>Russia Plant</td>
      <td>Steve Benneth</td>
      <td>Expires in 90days <span className='text-success border border-2 ms-3 bg-white rounded p-1'>NEW</span></td>
     <Link to="/Page3">  <PlusCircle size={40} className=""/>  </Link>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Header
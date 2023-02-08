import React, { useState } from "react";
import {   BellSlash,  Filter, Grid3x3, QuestionCircle} from "react-bootstrap-icons";
import './Navbar.css'
import Img from '../../images/f1std1.png'
import Img2 from '../../images/paul-round-pic.png';
import { PlusCircle } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
function Navbar() {
  const [searchValue, setsearchValue] = useState ();

  const onSearch = (e)=>{
    setsearchValue(e.target.value)
    console.log(searchValue);

  }
  return (
    <div>
       <nav class="navbar navbar-expand-lg bg-dark sticky-top">
        
       
        <img src={Img} alt="" className="ms-3"/>
       

        <a class="navbar-brand ms-3 text-light" href="https//www.youtube.com ">
          <b>studioz</b>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav mx-auto">
            <a class="nav-item nav-link active text-light  invisible" href="www.google.com">
              Home (current)
            </a>
            <input
              type="text"
              placeholder="Amazon search"
              className="text-center border-rounded  invisible"
            />
            <a class="nav-item nav-link text-light invisible" href="www.paul.com">
              Pricing
            </a>
          </div>
          <Grid3x3 className="text-white me-4"/>
          
          {<BellSlash className="text-white me-4"/>}
          <QuestionCircle className="text-white me-4" />
          <img src={Img2} alt="" className="me-4"/>


        </div>
      </nav> 



      <nav class="nabvar navbar-expand-lg bg-secondary ">
        <div class="nabvar-nav d-flex justify-content-center">
          <a
            className="nav-item nav-link text-white mt-3 mb-1"
            href="www.paul.com"
            target="_blank">
           
            <u> <strong>CARTS</strong></u>
          </a>
          <Link to='/Favourites'
            className="nav-item nav-link text-white ms-5 mt-3"
           
          >
            
            <u> <strong>FAVOURITES</strong></u>
          </Link>
        </div>
      </nav>



      <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-lg">
        <a class="navbar-brand" href="#www.paul.com" >
         <u><b> Active Carts</b></u>
        </a>
        <Link to='/Favourites' class="navbar-brand" >
          Archived Carts
        </Link>
        <div class="navbar-nav mx-auto">
        </div>
        {<Filter className="me-3" size={30}/>}
        <form
          action="form-control"
          className="nav justify-content-end justify-content-end border-rounded"
        >
          <input type="text" value={searchValue} name="searchValue" id="searchValue" className="nav me-3 ps-3" placeholder="Search" onChange={onSearch}/>
        </form>
      </nav>{" "}










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
    <Link  to="/Page2"><PlusCircle size={40} className="text-danger"/> </Link> 
      
    </tr>
  
  </tbody>



</table>



    </div>







  
  );
} 
export default Navbar;

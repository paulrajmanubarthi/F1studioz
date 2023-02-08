import React from 'react';
import { ArrowLeft, BellSlash, Grid3x3, Link, QuestionCircle, ThreeDotsVertical } from 'react-bootstrap-icons';
import "./Page3.css";
import { ArrowRight } from 'react-bootstrap-icons';
import Img from '../../images/f1std1.png'
import Img2 from '../../images/paul-round-pic.png';
// import Button from '@material-ui/core/Button';
import {NavLink} from "react-router-dom";

const Page3 = () => {
  return (
    <div>

       <nav class="navbar navbar-expand-lg bg-dark ">
        
       
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


      <nav class="navbar navbar-expand bg-secondary">

        <div className="navbar-nav align-items-center">
           
           
        <NavLink Component={Link} to="/Page2" style={{color:"white"}}> <ArrowLeft className="ms-3"/>  </NavLink>

            <a href="#hai.com" className="text-white ms-3"> Configure a new door 2of3 </a>

         <a href="#hai.com"> <ThreeDotsVertical style={{marginLeft:"1000px",color:"white"}} /> </a> 
        
        

        </div>
      </nav>





<div id='id3' class="mt-3 rounded shadow-lg">

    <div className="row m-3">
        <div className="col-lg mt-4">
            <label htmlFor="" >Select Category</label>
            <select name="" id="" className='ms-5 pe-5 ps-3'>
                <option value="">Residential door</option>
                <option value="">canyon ridge</option>
                <option value="">Can 12</option>
            </select>
        </div>
    </div>

    <div className="row m-3">
        <div className="col-lg">
            <label htmlFor="" >Select  &nbsp; series</label>
            <ArrowLeft/>
            <select name="" id="" className='ms-5 pe-5 ps-3'>
                <option value="">Canyon Ridge@ </option>
                <option value="">Residential door</option>
                <option value="">Can 12</option>
            </select>
        </div>
    </div>

    <div className="row m-3">
        <div className="col-lg">
            <label htmlFor="" >Door &nbsp; type</label>
            <ArrowRight/>
            <select name="" id="" className='ms-5 pe-5 ps-3'>
                <option value="">Can 12# r</option>
                <option value="">canyon ridge</option>
                <option value="">select category</option>
            </select>
        </div>
    </div>
    </div>

    <div id="id4">
    <div class="d-grid gap-2 d-md-flex justify-content-md-end shadow-lg">
 
    <NavLink component={Link} to="/Page4" className='btn btn-danger'>
 Configure
</NavLink>
</div>
    </div>


        


    </div>
  )
}

export default Page3
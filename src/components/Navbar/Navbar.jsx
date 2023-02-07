import React from "react";
import {   BellSlash,  Filter, Grid3x3, QuestionCircle} from "react-bootstrap-icons";
import './Navbar.css'
import Img from '../../images/f1std1.png'
import Img2 from '../../images/paul-round-pic.png'

function Navbar() {
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
          <a
            className="nav-item nav-link text-white ms-5 mt-3"
            href="www.lavu.com"
            target="_blank"
          >
            
            <u> <strong>FAVOURITES</strong></u>
          </a>
        </div>
      </nav>



      <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-lg">
        <a class="navbar-brand" href="#www.paul.com" >
         <u><b> Active Carts</b></u>
        </a>
        <a class="navbar-brand" href="#www.paul.com">
          Archived Carts
        </a>
        <div class="navbar-nav mx-auto">
        </div>
        {<Filter className="me-3" size={30}/>}
        <form
          action="form-control"
          className="nav justify-content-end justify-content-end border-rounded"
        >
          <input type="text" name="" id="" className="nav me-3 ps-3" placeholder="Search"/>{" "}
        </form>
      </nav>{" "}
    </div>
  );
}
export default Navbar;

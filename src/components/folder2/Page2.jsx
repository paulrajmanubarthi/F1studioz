import React from "react";
import { ArrowLeft, ArrowRight, BellSlash, Grid3x3, QuestionCircle, ThreeDotsVertical,} from "react-bootstrap-icons";
import "./page.css";
import Img from '../../images/f1std1.png'
import Img2 from '../../images/paul-round-pic.png'


const Page2 = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-dark ">
        
       
        <img src={Img} alt="" className="ms-3"/>
       

        <a class="navbar-brand ms-3 text-light" href="https//www.youtube.com ">
          <b>studioz studioz</b>
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
            <a href="#paul.com " style={{color:"red"}}> <ArrowLeft className="ms-3"/>  </a>

            <a href="#hai.com" className="text-white ms-3"> Create a New Order </a>

            <a href="#hai.com"> <ThreeDotsVertical style={{marginLeft:"1050px",color:"red"}} /> </a> 
        

        </div>
      </nav>




      
             <div id="id1" className="mt-3 bg-secondary">       
               <div className=" d-flex align-items-center "> 
             
               <a href="#paul.com" class='fs-5 nav-link disabled'> <b className="text-dark ms-4 ">configure your door from scratch</b>
               </a>
               <a href="#paul.com" className="ms-auto text-dark">   <ArrowRight className="ms-auto me-3 mt-4"/> </a>
               </div>
               <p class="fs-6 p-2 ps-4">Residential, commercial entry doors</p> 
               </div> 

               
             <div id="id1" className="mt-3 bg-secondary">       
               <div className=" d-flex align-items-center "> 
             
               <a href="#paul.com" class='fs-5 nav-link disabled'> <b className="text-dark ms-4 ">Parts/Openers</b>
               </a>
               <a href="#paul.com" className="ms-auto text-dark">   <ArrowRight className="ms-auto me-3 mt-4"/> </a>
               </div>
               <p class="fs-6 p-2 ps-4">Order parts and openors</p> 
               </div> 

               
             <div id="id1" className="mt-3 bg-secondary">       
               <div className=" d-flex align-items-center "> 
             
               <a href="#paul.com" class='fs-5 nav-link disabled'> <b className="text-dark ms-4 ">Direct Item Entry</b>
               </a>
               <a href="#paul.com" className="ms-auto text-dark">   <ArrowRight className="ms-auto me-3 mt-4"/> </a>
               </div>
               <p class="fs-6 p-2 ps-4"> Order Parts/Openers using Id</p> 
               </div> 

               
             <div id="id1" className="mt-3 bg-secondary">       
               <div className=" d-flex align-items-center "> 
             
               <a href="#paul.com" class='fs-5 nav-link disabled'> <b className="text-dark ms-4 ">Choose From Favourites</b>
               </a>
             <a href="#paul.com" className="ms-auto text-dark">   <ArrowRight className="ms-auto me-3 mt-4"/> </a>
               </div>
               <p class="fs-6 p-2 ps-4">Re-order Door from favouties</p> 
               </div> 

          



    </div>



  );
};

export default Page2;

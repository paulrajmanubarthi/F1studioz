import React from 'react'
import { ArrowLeft, BellSlash, CloudLightningFill, CollectionPlay, EmojiDizzyFill, Grid3x3, HeartFill, QuestionCircle, ThreeDotsVertical } from 'react-bootstrap-icons';
import Img from '../../images/f1std1.png'
import Img2 from '../../images/paul-round-pic.png'

export default function Page5() {
  return (
    <div>

         
       <nav class="navbar navbar-expand-lg bg-dark">
        
       
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
            <a href="#paul.com " style={{color:"red"}}> <ArrowLeft className="ms-3"/>  </a>

            <a href="#hai.com" className="text-white ms-3"> Create a New Order </a>
            

            <a href="#hai.com"> <ThreeDotsVertical style={{marginLeft:"1050px",color:"red",position:"relative"}} /> </a> 
           
        

        </div>
      </nav>





      

<div class="card ">
  <div class="card-body justify-content-center " style={{width:"1000px",marginLeft:"200px"}}>

<div class="card " style={{width:"600px"}}>  
  <div class="card-body  ">
    <h6 class="card-title "> 10' 0'' X 10' 0.0'' CAN211 CC W1 COMPLETE DOOR INTELLICORE OBSCURE, 5TH GENERATION FINISH WALDER DOOR
Job Name: Front door with glass  Change
Product #CWD •  Garage Door</h6>
    <p class="card-text">Job Name: Front door with glass  Change
Product #CWD •  Garage Door
Availability: <b className='text-success'>IN STOCK</b> Available for Pickup</p>
  </div>
</div>



<div className="row mt-2">
    <div className="col ms-3 ">
        <a href="#paul" class="btn btn-white text-dark btn-sm active ps-2" role="button" aria-disabled="true">-</a>
    <a href="#paul" class="btn btn-white text-dark btn-sm active ms-1 ps-2" role="button" aria-disabled="true">1</a>
    <a href="#paul" class="btn btn-white text-dark btn-sm active ms-1 ps-2" role="button" aria-disabled="true">+</a>
    </div>
    <div className="col text-success"><b> Standard Multiplier: .432 <br />
Secondary Multipliers Applied </b>
</div>
    <div className="col">
    Net Price: <b>$4500.00</b><br />
Unit Price: $4800.00
    </div>
</div>

<div className="row mt-2">
    <div className="col border border-1 p-3">   <HeartFill/> Favourites</div>
    <div className="col border border-1 p-3">  <EmojiDizzyFill/>  Edit</div>
    <div className="col border border-1 p-3">  <CollectionPlay/> Copy</div>
    <div className="col border border-1 p-3">  <CloudLightningFill/>  Delete</div>
</div>




<div className="row mt-5">
    <div className="col">
<div class="card " style={{width:"500px"}}>  
  <div class="card-body">
    <label htmlFor="" className=''> Change Delivery Date</label> <br />
   <input type="datetime-local" className='mt-2 form-control' /> <br />
   <label htmlFor="" className='mt-2 ' > Standard Deliver Date</label>
   </div> </div>
    
  </div>

  <div className="col border border-1">
    <div style={{width:"400PX"}}>
  <strong>Bill Summary</strong> <br />
  Sub Total:  &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  $4500 <br />
  Energy srchage:   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;     $70.41           <br />
  Sales Tax:  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; $490.41       <br />      
  <strong>TOTAL</strong>:   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  $5061.41  
  </div>

  </div>
</div>


<div className="row mt-5">
    <div className="col">
<div class="card " style={{width:"500px"}}>  
  <div class="card-body">
    <label htmlFor="" className=''> Billing to</label> <br />
<h6> <b>Bement jareed</b></h6>
<p> 144 curt shores,50,madison <br /> avenue
    hixson - 42040 <br />
    contact:9010840240
</p>
   </div> </div>
    
  </div>
  

  <div className="col border border-1">
    <div style={{width:"400PX"}}>
    <label htmlFor="" className='mt-2'>Shipping To</label>
    <h6> <b>Bement jareed</b></h6>
<p> 144 curt shores,50,madison <br /> avenue
    hixson - 42040 <br />
    contact:9010840240
</p>


  </div>

  

  </div>
</div>
<p>TOTAL</p>
<nav class="navbar navbar-light bg-light justify-content-between">
    
   <h5>$5061.41</h5>
  <form class="form-inline">
    <button class="btn btn-outline-success me-3 bg-white text-danger" type="submit">Search</button>
    <button class="btn btn-outline-success bg-danger text-dark" type="submit">Search</button>

  </form>
</nav>

  
    </div>
</div>

    </div>
  )
}

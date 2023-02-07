import React from 'react';
import { ArrowLeft, BellSlash, Grid3x3, QuestionCircle, ThreeDotsVertical } from 'react-bootstrap-icons';
import './Page4.css'
import Img from '../../images/f1std1.png'
import Img2 from '../../images/paul-round-pic.png'


const Page4 = () => {
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
            <a href="#paul.com " style={{color:"red"}}> <ArrowLeft className="ms-3"/>  </a>

            <a href="#hai.com" className="text-white ms-3"> Configure a new door 2of3 </a>

            <a href="#hai.com"> <ThreeDotsVertical style={{marginLeft:"1000px",color:"red",position:"relative"}} /> </a> 
    

        </div>
      </nav>

      
     <div className="nav justify-content-center mt-4"><input type="range"  min="1" max="100" className='bg-success ' style={{width:"400px",background:"green"}}/></div>
     <div className='nav justify-content-center'>47% completed</div>
           
    
            <form>
        <div class="container-fluid">
        <div class="container mt-3 border rounded shadow-lg">
        
            <div class="row">
                <h5 className='bg-secondary p-3 rounded'>Layout Options</h5>
            </div>
            <div class="row pt-3 m-4">
                <div class="col-sm-3">
                    <label>Assembly Type</label>
                </div>
                <div class="col">
                    <div class="form-group">
                        <select name="" id="" className='form-select'>
                          <option value=""> Complete Door</option>
                          <option value="">Single Door</option>
                          <option value="">Double Door</option>
                        </select>
                    </div>
                </div>
             
            </div>







            <div class="row pt-3 m-4">
                <div class="col-sm-3">
                    <label>Measure Size</label>
                </div>
                <div class="col">
                    <div class="form-group">
                        widt h &nbsp; <select name="" id="" className=''>
                          <option value=""> 8" ft.</option>
                          <option value="">Single Door</option>
                          <option value="">Double Door</option>
                        </select>
                    </div>
                    <div class="form-group mt-2">
                        height &nbsp; <select name="" id="" className=''>
                          <option value=""> 6" ft.</option>
                          <option value="">Single Door</option>
                          <option value="">Double Door</option>
                        </select>
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <select name="" id="" className=''>
                          <option value=""> 12" inch</option>
                          <option value="">Single Door</option>
                          <option value="">Measure Size</option>
                        </select>
                    </div>
                    <div class="form-group mt-2">
                        <select name="" id="" className=''>
                          <option value="">0" inch</option>
                          <option value="">Single Door</option>
                          <option value="">Double Door</option>
                        </select>
                    </div>
                </div>
             
            </div>




            <div class="row pt-3 m-4">
                <div class="col-sm-3">
                    <label>Window code</label>
                </div>
                <div class="col">
                    <div class="form-group">
                        <select name="" id="" className='form-select'>
                          <option value=""> Windowcode w1</option>
                          <option value="">Single Door</option>
                          <option value="">Double Door</option>
                        </select>
                    </div>
                </div>
             
            </div>
            <div class="row pt-3 m-4">
                <div class="col-sm-3">
                    <label>Design</label>
                </div>
                <div class="col">
                    <div class="form-group">
                        <select name="" id="" className='form-select'>
                          <option value=""> CC</option>
                          <option value="">Single Door</option>
                          <option value="">Double Door</option>
                        </select>
                    </div>
                </div>
             
            </div>
            <div class="row pt-3 m-4">
                <div class="col-sm-3">
                    <label>Colour</label>
                </div>
                <div class="col">
                    <div class="form-group">
                        <select name="" id="" className='form-select'>
                          <option value=""> Dark Finish</option>
                          <option value="">Single Door</option>
                          <option value="">Double Door</option>
                        </select>
                    </div>
                </div>
             
            </div>




 </div>
        </div>
    
    </form>
     <form>
        <div class="container-fluid">
        <div class="container mt-3 border rounded shadow-lg">
        
            <div class="row">
                <h5 className='bg-secondary p-3 rounded'>Window Oprions</h5>
            </div>




            <div class="row pt-3 m-4">
                <div class="col-sm-3">
                    <label>Glass type</label>
                </div>
                <div class="col">
                    <div class="form-group">
                        <select name="" id="" className='form-select'>
                          <option value=""> Solid no Windows</option>
                          <option value="">Single Door</option>
                          <option value="">Double Door</option>
                        </select>
                    </div>
                </div>
             
            </div>
            <div class="row pt-3 m-4">
                <div class="col-sm-3">
                    <label>Section Glazed</label>
                </div>
                <div class="col">
                    <div class="form-group">
                        <select name="" id="" className='form-select'>
                          <option value=""> sections" 4</option>
                          <option value="">Single Door</option>
                          <option value="">Double Door</option>
                        </select>
                    </div>
                </div>
             
            </div>
            <div class="row pt-3 m-4">
                <div class="col-sm-3">
                    <label>Framing</label>
                </div>
                <div class="col">
                    <div class="form-group">
                        <select name="" id="" className='form-select'>
                          <option value="">Arch 1"design</option>
                          <option value="">Single Door</option>
                          <option value="">Double Door</option>
                        </select>
                    </div>
                </div>
             
            </div>




 </div>
        </div>
    
    </form>




    <form>
        <div class="container-fluid">
        <div class="container mt-3 border rounded shadow-lg">
       
            <div class="row">
                <h5 className='bg-secondary p-3 rounded'>Track Options</h5>
            </div>
            <div class="row pt-3 m-4">
                <div class="col-sm-3">
                    <label>Spring</label>
                </div>
                <div class="col">
                    <div class="form-group">
                        <select name="" id="" className='form-select'>
                          <option value=""> Galvanized Torsion</option>
                          <option value="">Single Door</option>
                          <option value="">Double Door</option>
                        </select>
                    </div>
                </div>
             
            </div>







             




            <div class="row pt-3 m-4">
                <div class="col-sm-3">
                    <label>Track size</label>
                </div>
                <div class="col">
                    <div class="form-group">
                        <select name="" id="" className='form-select'>
                          <option value=""> 2"flag and jamb</option>
                          <option value="">Single Door</option>
                          <option value="">Double Door</option>
                        </select>
                    </div>
                </div>
             
            </div>
            <div class="row pt-3 m-4">
                <div class="col-sm-3">
                    <label>Track monut</label>
                </div>
                <div class="col">
                    <div class="form-group">
                        <select name="" id="" className='form-select'>
                          <option value=""> Bracket</option>
                          <option value="">Single Door</option>
                          <option value="">Double Door</option>
                        </select>
                    </div>
                </div>
             
            </div>
            <div class="row pt-3 m-4">
                <div class="col-sm-3">
                    <label>Track Lift</label>
                </div>
                <div class="col">
                    <div class="form-group">
                        <select name="" id="" className='form-select'>
                          <option value=""> Standard</option>
                          <option value="">Single Door</option>
                          <option value="">Double Door</option>
                        </select>
                    </div>
                </div>
             
            </div>
            <div class="row pt-3 m-4">
                <div class="col-sm-3">
                    <label>Track Radius</label>
                </div>
                <div class="col">
                    <div class="form-group">
                        <select name="" id="" className='form-select'>
                          <option value=""> 12" radius</option>
                          <option value="">Single Door</option>
                          <option value="">Double Door</option>
                        </select>
                    </div>
                </div>
             
            </div>




 </div>
        </div>
    
    </form>

        
       




    <form>
        <div class="container-fluid ">
        <div class="container mt-3 border rounded shadow-lg">
            <div class="row">
                <h5 className='bg-secondary p-3 rounded'>Other Options</h5>
            </div>
            <div class="row pt-3 m-4">
                <div class="col-sm-3">
                    <label>Lock</label>
                </div>
                <div class="col">
                    <div class="form-group">
                        <select name="" id="" className='form-select'>
                          <option value=""> Inside Side Lock</option>
                          <option value="">Single Door</option>
                          <option value="">Double Door</option>
                        </select>
                    </div>
                </div>
             
            </div>

            <div class="row pt-3 m-4">
                <div class="col-sm-3">
                    <label>Misc Lock Options</label>
                </div>
                <div class="col">
                    <div class="form-group">
                        <input type="radio" className='active' /> No lock Hole
                    </div>
                </div>
             
            </div>
            <div class="row pt-3 m-4">
                <div class="col-sm-3">
                    <label>Packaging</label>
                </div>
                <div class="col">
                    <div class="form-group">
                        <select name="" id="" className='form-select'>
                          <option value=""> x-Distibutour</option>
                          <option value="">Single Door</option>
                          <option value="">Double Door</option>
                          
                        </select>
                        
                        <label htmlFor="" className='text-danger'>Clopay CWD models Execlude Packing Options</label>
                    </div>
                </div>
             
            </div>
            <div class="row pt-3 m-4">
                <div class="col-sm-3">
                    <label>Additional Options</label>
                </div>
                <div class="col">
                    <div class="form-group">
                       <input type="checkbox"  className='active' id="flexCheckChecked"/> <span className='ms-3'> Extra Struts</span> <br /> 
                       <input type="checkbox"  id="flexCheckChecked"/> <span className='ms-3'>Spade Strap</span> <br /> 
                       <input type="checkbox" />  <span className='ms-3'>14GA queit Hinge</span> <br /> 
                       <input type="checkbox" /> <span className='ms-3'>Less Bottom Astragal</span> <br /> 
                       <input type="checkbox" /> <span className='ms-3'>Gold Bar Gurantee</span> <br /> 
                       <input type="checkbox"  id="flexCheckChecked"/> <span className='ms-3'>Medallion Hardware </span> <br /> 
                       <input type="checkbox" /> <span className='ms-3'>Light Steal Kit</span> <br /> 
                       <input type="checkbox" /> <span className='ms-3'>Side Lock Mounted</span> <br /> 
                       <input type="checkbox" /> <span className='ms-3'>2 Spear Lift</span> <br /> 
                    </div>
                </div>
                
             
            </div>
            <div className='nav justify-content-end me-3 mb-3'>
            <button type="button" class="btn btn-light btn-sm me-3 border border-danger">Small button</button>
<button type="button" class="btn btn-danger btn-sm  me-4 text-dark">Small button</button>
            </div>
 </div>
        </div>
    
    </form>

       

</div>

  )
}

export default Page4
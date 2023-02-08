import React from 'react';
import { Link } from 'react-router-dom';


const Favourites = () => {
  return (
    <div>
   

   <h1 className=' text-danger text-center mt-5'> NO DATA </h1>

   <Link to='/' className='btn btn-warning'> Previous Page</Link>  

    </div>
  )
}

export default Favourites
import React, { useEffect, useState } from 'react'
import "./Backtotop.css";
import up_arrow from "../assets/up_arrow.png";


const Backtotop = () => {
     const [Backtotop, setBacktotop] = useState(false);

     useEffect(() => {
      window.addEventListener('scroll',()=>{
             if(window.scrollY>100){
                setBacktotop(true);
             }else{
                setBacktotop(false);
             }
      })
     }, []);

     const scrolltop= ()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'

        })
     }
     
  return (
    <div>
       {
        Backtotop&&( <button onClick={scrolltop} className='back_to_top'><img src={up_arrow} className='img-fluid' style={{width:"50px"}} alt="vtx img" /></button>)
       }
    </div>
  )
}

export default Backtotop
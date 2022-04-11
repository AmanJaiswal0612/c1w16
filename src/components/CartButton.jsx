import { useState } from "react";
// keep the add to cart component here
const CartButton = () => {
    //manage state of the count 
    const[count,setState]=useState(0)
    const handleCart = ()=>{
      setState(count+1);
     
      }
      const handleplus= ()=>{
       setState(count+1)
      }
      const handleminus= ()=>{
        setState(count-1);
      }
  return <>
  {/* add to cart button */}


  {/* count with - and  + button */}

  <div >
       {
       !count?<button className="addtocart" onClick={()=>handleCart()}>Add to Cart</button>:
       <div className="pm">
       <button className="plus"onClick={()=>handleminus()}>-</button>
       <p className="count-item">{count}</p>
         <button  className="plus"onClick={()=>handleplus()} >+</button>
       </div>
       }
   </div>

  </>;
};
export default CartButton

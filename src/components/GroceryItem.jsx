// reusable card component

import CartButton from "./CartButton";
const GroceryItem = ({imgURL,title,mrp,sellingPrice,discount}) => {

  
  return <>
      <div>
        <img src={imgURL}></img>
        <h3>{title}</h3>
        <div className="price">
          <h4>{mrp}</h4>
           <p>{sellingPrice}</p>
        </div>
       <h3>{discount}</h3> 
      <CartButton/>
      </div>
  </>;
};
export default GroceryItem;

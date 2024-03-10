import { useState } from "react";

let itemsInCart = 0;
const handleAddToCartClick = () => {
  itemsInCart++;
  alert(`you added ${itemsInCart}`);
};

export default function ProductCard({ product }) {
  const [currentImageIndex, setcurrentImageIndex]  = useState(0);
  const [isClick, setClick] = useState(true);
  
  return (
    <>
      <div id="image-carousel">
        <img
          src={product.imageUrls[currentImageIndex] + " " + product.name}
          alt={product.name}
        />
      
        <button disabled={currentImageIndex == product.imageUrls.length-1 ? true : false} onClick={() => setcurrentImageIndex(currentImageIndex + 1)}>Next</button>
        <button disabled={currentImageIndex ? false : true} onClick={() => setcurrentImageIndex(currentImageIndex - 1)}>Previous</button>
      </div>

      <h3>{product.name}</h3>
      <p>{isClick ?"" :product.description}</p>
      <button onClick={()=> setClick(!isClick)}> {isClick ? "Show Description":"Hide Description"} </button>
      
      
      <div className="price">${product.price}</div>

      <button disabled={product.isInStock ? false : true} onClick={handleAddToCartClick}>Add to Cart</button>

      {!product.isInStock && "The product is out of stock"}
    </>
  );
}

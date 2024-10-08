import React, { useEffect } from "react";
import Syltherine from "./Images/Syltherine.svg";
import Discount_30 from "./Images/discount30.svg";
import Share from "./Images/share.svg";
import Compare from "./Images/compare.svg";
import Like from "./Images/like.svg";
import Liviosa from "./Images/Leviosa.svg";
import Lolito from "./Images/Lolito.svg";
import ResPira from "./Images/Respira.svg";
import Discount_50 from "./Images/discount50.svg";
import New from "./Images/New.svg";

// Define the products array
const products = [
  {
    id: 1,
    img: Syltherine,
    discountImg: Discount_30,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: 25,
    originalPrice: 3500000,
  },
  {
    id: 2,
    img: Liviosa,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: 30,
  },
  {
    id: 3,
    img: Lolito,
    discountImg: Discount_50,
    name: "Lolito",
    description: "Luxury big sofa",
    price: 40,
    originalPrice: 14000000,
  },
  {
    id: 4,
    img: ResPira,
    newImg: New,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: 50,
  },
];

// Create an array with 12 items (by duplicating the existing products)
const allProducts = [...products, ...products, ...products, ...products];

const CartItem = ({
  id,
  img,
  title,
  description,
  price,
  originalPrice,
  discountImg,
  addToCart,
}) => (
  <div className="bg-customGray flex-col flex items-start justify-center gap-4 relative">
    <img src={img} alt={title} />
    {discountImg && (
      <img
        src={discountImg}
        alt="Discount"
        className="absolute top-6 right-8"
      />
    )}
    <div className="flex justify-center items-center flex-col gap-4 cursor-pointer text-center bg-opacityGray absolute h-full w-full opacity-0 transition-all ease-in-out duration-500 hover:opacity-100">
      <button
        className="px-8 py-2 bg-white text-orange-400 font-semibold rounded-full"
        onClick={
          () => addToCart({ id, image: img, name: title, price }) // Use the correct id
        }
      >
        Add to Cart
      </button>
      <div className="flex gap-4 px-2">
        <img src={Share} alt="Share" />
        <img src={Compare} alt="Compare" />
        <img src={Like} alt="Like" />
      </div>
    </div>
    <div className="pl-4 pb-8">
      <h2 className="font-bold text-xl">{title}</h2>
      <p className="text-lightGray">{description}</p>
      <div>
        <span className="font-bold mr-4">Rp {price}</span>
        {originalPrice && <s className="text-creamGray">Rp {originalPrice}</s>}
      </div>
    </div>
  </div>
);

export default function Cart({ setCartCount, addToCart }) {
  useEffect(() => {
    // Set the cart count to the number of products
    setCartCount(allProducts.length);
  }, [setCartCount]); // Add setCartCount as a dependency

  return (
    <div className="grid grid-cols-4 px-14 gap-y-20 gap-10 py-6 mt-14">
      {allProducts.map((product) => (
        <CartItem
          key={product.id} // Use unique ID as key
          id={product.id} // Pass product id to CartItem
          img={product.img}
          title={product.name}
          description={product.description}
          price={product.price}
          originalPrice={product.originalPrice}
          discountImg={product.discountImg || product.newImg} // Use discountImg or newImg
          addToCart={addToCart} // Pass addToCart to CartItem
        />
      ))}
    </div>
  );
}

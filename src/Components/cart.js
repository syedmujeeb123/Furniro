import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import { WishlistContext } from "../context/WishlistContext";
import { useContext } from "react";

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
    newImg: New,
  },
  {
    id: 2,
    img: Liviosa,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: 30,
    originalPrice: 3500000,
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
    originalPrice: 3500000,
  },
];

// Create an extended product array with unique IDs
const allProducts = [
  // First set (original IDs)
  ...products,
  // Second set with unique IDs (5-8)
  ...products.map((product) => ({ ...product, id: product.id + 4 })),
  // Third set with unique IDs (9-12)
  ...products.map((product) => ({ ...product, id: product.id + 8 })),
  // Fourth set with unique IDs (13-16)
  ...products.map((product) => ({ ...product, id: product.id + 12 })),
];
const CartItem = ({
  id,
  img,
  name,
  originalPrice,
  New,
  discountImg,
  description,
  price,
  addToCart,
}) => {
  const { wishlist, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);
  const isWishlisted = wishlist.some((item) => item.id === id);

  const navigate = useNavigate();

  const toggleWishlist = () => {
    const product = { id, img, name, description, price };
    console.log("Adding to wishlist:", product);
    if (isWishlisted) {
      removeFromWishlist(id);
    } else {
      addToWishlist(product);
    }
  };

  // Handler for viewing product details
  const handleViewProduct = () => {
    navigate(`/product/${id}`, {
      state: { id, img, name, description, price },
    });
  };

  // Handler for adding to cart
  const handleAddToCart = (e) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const position = {
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
    };
    addToCart({ id, image: img, name: name, price }, position);
  };

  return (
    <div className="bg-customGray flex-col flex items-start justify-center gap-4 relative cursor-pointer rounded-lg">
      {/* Image Wrapper with hover overlay */}
      <div className="relative w-full" onClick={handleViewProduct}>
        <img src={img} alt={name} className="w-full" />

        {discountImg && (
          <img
            src={discountImg}
            alt="Discount"
            className="absolute top-6 right-8"
          />
        )}

        {/* Hover overlay */}
        <div className="flex justify-center items-center flex-col gap-4 text-center bg-opacityGray absolute inset-0 opacity-0 transition-all ease-in-out duration-500 hover:opacity-100">
          <button
            className="px-8 py-2 bg-white text-orange-400 font-semibold rounded-full"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <div className="flex gap-4 px-2">
            <img src={Share} alt="Share" />
            <img src={Compare} alt="Compare" />
            <img
              src={Like}
              alt="Like"
              onClick={(e) => {
                e.stopPropagation();
                toggleWishlist();
              }}
              className={isWishlisted ? "filter-red" : ""}
            />
          </div>
        </div>
      </div>

      {/* Product details below */}
      <div className="pl-4 pb-8" onClick={handleViewProduct}>
        <h2 className="font-bold text-xl">{name}</h2>
        <p className="text-lightGray">{description}</p>
        <div>
          <span className="font-bold mr-4">Rp {price}</span>
          {originalPrice && (
            <s className="text-creamGray">Rp {originalPrice}</s>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Cart({ setCartCount, addToCart }) {
  useEffect(() => {
    setCartCount(allProducts.length);
  }, [setCartCount]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:px-14 gap-y-20 gap-10 py-6 mt-14">
      {allProducts.map((product, index) => (
        <CartItem
          key={`${product.id}-${index}`}
          id={product.id}
          img={product.img}
          name={product.name}
          discountImg={product.discountImg || product.newImg}
          description={product.description}
          price={product.price}
          originalPrice={product.originalPrice}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

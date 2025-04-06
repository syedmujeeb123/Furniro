import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Discount_30 from "./Images/discount30.svg";
import Share from "./Images/share.svg";
// import Compare from "./Images/compare.svg";
import Like from "./Images/like.svg";
// import Eye from "./Images/eye.gif";
import { Eye } from "lucide-react";
import Discount_50 from "./Images/discount50.svg";
import New from "./Images/New.svg";
import { WishlistContext } from "../context/WishlistContext";
import { useContext } from "react";
import hoverImgOne from "./Images/Flone - React eCommerce Template Preview - ThemeForest_files/1.jpg";
import hoverImgTwo from "./Images/Flone - React eCommerce Template Preview - ThemeForest_files/23.jpg";
import hoverImgThree from "./Images/Flone - React eCommerce Template Preview - ThemeForest_files/30.jpg";
import hoverImgFour from "./Images/Flone - React eCommerce Template Preview - ThemeForest_files/5(1).jpg";
import hoverImgFive from "./Images/Flone - React eCommerce Template Preview - ThemeForest_files/6.jpg";
import hoverImgSix from "./Images/Flone - React eCommerce Template Preview - ThemeForest_files/24.jpg";
import hoverImgSeven from "./Images/Flone - React eCommerce Template Preview - ThemeForest_files/8.jpg";
import hoverImgEight from "./Images/Flone - React eCommerce Template Preview - ThemeForest_files/29.jpg";
import hoverImgNine from "./Images/Flone - React eCommerce Template Preview - ThemeForest_files/8.jpg";
import hoverImgTen from "./Images/Flone - React eCommerce Template Preview - ThemeForest_files/2.jpg";

// Store all hover images in an array
const hoverImages = [
  hoverImgOne,
  hoverImgTwo,
  hoverImgThree,
  hoverImgFour,
  hoverImgFive,
  hoverImgSix,
  hoverImgSeven,
  hoverImgEight,
  hoverImgNine,
  hoverImgTen,
];
// Define the products array
const products = [
  {
    id: 1,
    img: hoverImgTen,
    discountImg: Discount_30,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: 25,
    originalPrice: 3500000,
    newImg: New,
    isOutOfStock: false,
  },
  {
    id: 2,
    img: hoverImgNine,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: 30,
    originalPrice: 3500000,
    isOutOfStock: true,
  },
  {
    id: 3,
    img: hoverImgEight,
    discountImg: Discount_50,
    name: "Lolito",
    description: "Luxury big sofa",
    price: 40,
    originalPrice: 14000000,
    isOutOfStock: false,
  },
  {
    id: 4,
    img: hoverImgSix,
    newImg: New,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: 50,
    originalPrice: 3500000,
    isOutOfStock: true,
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

// Preload all images to avoid blinking
const preloadImages = () => {
  hoverImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
  products.forEach((product) => {
    if (!product.img) return;
    const img = new Image();
    img.src = product.img;
  });
};

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
  index,
}) => {
  const { wishlist, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);
  const isWishlisted = wishlist.some((item) => item.id === id);
  const [showQuickView, setShowQuickView] = useState(false); // Added state for quick view
  const [activeSlide, setActiveSlide] = useState(0); // Define activeSlide state
  const [quantity, setQuantity] = useState(1); // Define quantity state
  const [cartFeedback, setCartFeedback] = useState(false); // Define cartFeedback state
  const [wishlistFeedback, setWishlistFeedback] = useState(false); // Define wishlistFeedback state

  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  // Get the hover image based on index, with fallback
  const hoverImg = hoverImages[index % hoverImages.length];

  const [selectedColor, setSelectedColor] = useState("blue");
  const [selectedSize, setSelectedSize] = useState("X");

  // Available colors with their hex values
  const colors = [
    { name: "blue", hex: "#3b82f6" },
    { name: "red", hex: "#7f1d1d" },
    { name: "black", hex: "#1f2937" },
  ];

  // Available sizes
  const sizes = ["X", "M", "XL"];

  const toggleWishlist = () => {
    const product = { id, img, name, description, price };
    console.log("Adding to wishlist:", product);
    if (isWishlisted) {
      removeFromWishlist(id);
    } else {
      addToWishlist(product);
    }

    // Show wishlist feedback
    setWishlistFeedback(true);
    setTimeout(() => setWishlistFeedback(false), 2000);
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

  // Added quick view handler
  const openQuickView = (e) => {
    e.stopPropagation();
    setShowQuickView(true);
  };

  return (
    <div
      className="flex-col flex items-start justify-center gap-4 relative cursor-pointer rounded-lg group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Wrapper with hover overlay */}
      <div className="relative w-full" onClick={handleViewProduct}>
        <div className="w-full relative">
          {/* Original image */}
          <img
            src={img}
            alt={name}
            className="w-full absolute top-0 left-0"
            style={{
              opacity: isHovered ? 0 : 1,
              transition: "opacity 4s ease-in-out",
            }}
          />

          {/* Hover image */}
          <img
            src={hoverImg}
            alt={`${name} hover`}
            className="w-full"
            style={{
              opacity: isHovered ? 1 : 0,
              position: "absolute",
              top: 0,
              left: 0,
              transition: "opacity 0.6s ease-in-out",
              zIndex: isHovered ? 1 : 0,
            }}
          />

          {/* Spacer div to maintain height */}
          <div style={{ paddingTop: "100%" }}></div>
        </div>

        {discountImg && (
          <img
            src={discountImg}
            alt="Discount"
            className="absolute top-6 right-8"
            style={{ zIndex: 2 }}
          />
        )}

        {/* Hover overlay */}
        <div
          className="flex justify-end items-center flex-col gap-4 text-center absolute inset-0 opacity-0 transition-all ease-in-out duration-500 group-hover:opacity-100 hover:-mb-20 -mb-4"
          style={{ zIndex: 3 }}
        >
          <button
            className="px-8 py-2 bg-custom-pink hover:bg-black text-white font-semibold rounded-full"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <div className="flex gap-[1px] items-center rounded-md group hover:text-black">
            {/* Icon 1 - Left */}
            <div className="opacity-0 px-2 py-1 rounded-l-md bg-custom-pink hover:bg-black group-hover:opacity-100 transition-opacity duration-500 delay-[700ms]">
              <img src={Share} alt="Share" />
            </div>

            {/* Icon 2 - Middle - Eye icon for zoom */}
            <div className="opacity-0 px-2 py-1 bg-custom-pink hover:bg-black group-hover:opacity-100 transition-opacity duration-500 delay-[900ms]">
              <Eye
                alt="Quick View"
                className="w-6 h-6 text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  openQuickView(e);
                }}
              />
            </div>

            {/* Icon 3 - Right */}
            <div className="opacity-0 px-2 py-1 rounded-r-md bg-custom-pink hover:bg-black group-hover:opacity-100 transition-opacity duration-500 delay-[1000ms]">
              <img
                src={Like}
                alt="Like"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleWishlist();
                }}
                className={`${isWishlisted ? "filter-red" : ""}`}
              />
            </div>
          </div>{" "}
        </div>
      </div>

      {/* Product details below - displayed similar to the image */}
      <div className="w-full text-center mt-20" onClick={handleViewProduct}>
        <h2 className="font-medium text-gray-800 text-lg">{name}</h2>
        <div className="flex items-center justify-center mt-1">
          <div className="flex text-yellow-400">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span className="text-gray-300">★</span>
          </div>
        </div>
        <div className="mt-1">
          <span className="font-semibold">€{price}</span>
          {originalPrice && (
            <s className="text-gray-500 ml-2">€{originalPrice}</s>
          )}
        </div>
      </div>

      {/* Quick View Modal */}
      {showQuickView && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowQuickView(false)}
          style={{
            animation: "fadeIn 0.4s ease-in-out",
          }}
        >
          <div
            className="bg-white p-6 rounded-lg max-w-4xl w-full mx-4 relative"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: "scaleIn 0.5s ease-in-out",
              transformOrigin: "center",
            }}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
              onClick={() => setShowQuickView(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 hover:scale-110"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                {/* Product Image Carousel */}
                <div className="relative">
                  <div className="overflow-hidden ">
                    <div
                      className="flex transition-transform duration-300 ease-in-out "
                      style={{
                        transform: `translateX(-${activeSlide * 100}%)`,
                      }}
                    >
                      {/* Main product image */}
                      <div className="w-full flex-shrink-0">
                        <img src={img} alt={name} className="w-full" />
                      </div>
                      {/* Additional product images - assuming you have these in an array */}
                      <div className="w-full flex-shrink-0">
                        <img
                          src={hoverImg}
                          alt={`${name} view 2`}
                          className="w-full"
                        />
                      </div>
                      <div className="w-full flex-shrink-0">
                        <img
                          src={img}
                          alt={`${name} view 3`}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Carousel Navigation */}
                  <button
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-70 w-8 h-8 rounded-full flex items-center justify-center shadow-md hover:bg-opacity-100 transition-all"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveSlide((prev) => (prev === 0 ? 2 : prev - 1));
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>

                  <button
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-70 w-8 h-8 rounded-full flex items-center justify-center shadow-md hover:bg-opacity-100 transition-all"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveSlide((prev) => (prev === 2 ? 0 : prev + 1));
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>

                  {/* Carousel Indicators */}
                </div>

                {/* Thumbnail Gallery */}
                <div className="flex gap-2 overflow-x-auto justify-center  mt-2">
                  <div
                    className={`border-2  ${
                      activeSlide === 0
                        ? "border-gray-800"
                        : "border-transparent"
                    } cursor-pointer`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveSlide(0);
                    }}
                  >
                    <img
                      src={img}
                      alt={name}
                      className="w-16 h-16 object-cover"
                    />
                  </div>
                  <div
                    className={`border-2 ${
                      activeSlide === 1
                        ? "border-gray-800"
                        : "border-transparent"
                    } cursor-pointer`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveSlide(1);
                    }}
                  >
                    <img
                      src={hoverImg}
                      alt={`${name} view 2`}
                      className="w-16 h-16 object-cover"
                    />
                  </div>
                  <div
                    className={`border-2 ${
                      activeSlide === 2
                        ? "border-gray-800"
                        : "border-transparent"
                    } cursor-pointer`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveSlide(2);
                    }}
                  >
                    <img
                      src={img}
                      alt={`${name} view 3`}
                      className="w-16 h-16 object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-2">{name}</h2>
                <div className="flex text-yellow-400 mb-2">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span className="text-gray-300">★</span>
                </div>
                <p className="text-xl font-semibold text-red-500 mb-4">
                  €{price}{" "}
                  <s className="text-gray-500 text-lg ml-2">
                    {originalPrice && `€${originalPrice}`}
                  </s>
                </p>
                <p className="mb-6">{description}</p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div>
                    <h3 className="font-semibold mb-2">Color</h3>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-gray-300 cursor-pointer"></div>
                      <div className="w-6 h-6 rounded-full bg-red-800 border-2 border-transparent cursor-pointer"></div>
                      <div className="w-6 h-6 rounded-full bg-gray-800 border-2 border-transparent cursor-pointer"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Size</h3>
                    <div className="flex gap-2">
                      <button className="w-8 h-8 bg-purple-500 text-white rounded-sm flex items-center justify-center">
                        X
                      </button>
                      <button className="w-8 h-8 border border-gray-300 rounded-sm flex items-center justify-center">
                        M
                      </button>
                      <button className="w-8 h-8 border border-gray-300 rounded-sm flex items-center justify-center">
                        XL
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 items-center mb-6">
                  <div className="flex border border-gray-300 rounded-m">
                    <button
                      className="px-3 py-1 bg-gray-100"
                      onClick={(e) => {
                        e.stopPropagation();
                        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
                      }}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={quantity}
                      readOnly
                      className="w-10 text-center"
                    />
                    <button
                      className="px-3 py-1 bg-gray-100"
                      onClick={(e) => {
                        e.stopPropagation();
                        setQuantity((prev) => prev + 1);
                      }}
                    >
                      +
                    </button>
                  </div>

                  <div className="flex gap-2">
                    <button
                      className="bg-gray-800 text-white px-6 py-2 hover:bg-custom-pink transition-colors flex items-center gap-2 rounded-md"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(e);
                        // Optional feedback
                        setCartFeedback(true);
                        setTimeout(() => setCartFeedback(false), 2000);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                      </svg>
                      ADD TO CART
                    </button>

                    <button
                      className={`w-10 h-10 border border-gray-300 rounded flex items-center justify-center transition-colors ${
                        isWishlisted ? "bg-red-50" : "hover:bg-gray-100"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist();
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill={isWishlisted ? "red" : "none"}
                        stroke={isWishlisted ? "red" : "currentColor"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={
                          isWishlisted ? "text-red-500" : "text-gray-600"
                        }
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Feedback message for cart */}
                {cartFeedback && (
                  <div className="bg-green-100 text-green-700 p-2 rounded animate-fade-in mb-4">
                    Product added to cart!
                  </div>
                )}

                {/* Feedback message for wishlist */}
                {wishlistFeedback && (
                  <div className="bg-red-100 text-red-700 p-2 rounded animate-fade-in mb-4">
                    {isWishlisted ? "Added to" : "Removed from"} wishlist!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function Cart({ setCartCount, addToCart }) {
  useEffect(() => {
    setCartCount(allProducts.length);
    // Preload images when component mounts
    preloadImages();
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
          index={index}
        />
      ))}
    </div>
  );
}

import React, { useState, useEffect, useContext } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import {
  FaHeart,
  FaShoppingCart,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaArrowLeft,
  FaArrowRight,
  FaStar,
  FaEye,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { WishlistContext } from "../context/WishlistContext";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Compare from "./Images/compare-nav.png";
import Syltherine from "./Images/Syltherine.svg";
import Liviosa from "./Images/Leviosa.svg";
import Lolito from "./Images/Lolito.svg";
import ResPira from "./Images/Respira.svg";
import Profile1 from "./Images/reviewOne.jpg";
import Profile2 from "./Images/reviewTwo.jpg";

// Define products array
const products = [
  {
    id: 1,
    name: "Syltherine",
    productInfo: "Stylish cafe chair",
    price: 25,
    images: [Syltherine, Liviosa, Lolito, ResPira],
    additionalInfo: {
      weight: "400g",
      dimensions: "10 x 10 x 15 cm",
      materials: "60% cotton, 40% polyester",
      other: "American heirloom jean shorts pug seitan letterpress",
    },
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    rating: 4,
  },
  {
    id: 2,
    name: "Leviosa",
    productInfo: "Stylish cafe chair",
    price: 30,
    images: [Liviosa, Syltherine, Lolito, ResPira],
    additionalInfo: {
      weight: "350g",
      dimensions: "12 x 10 x 18 cm",
      materials: "70% cotton, 30% polyester",
      other: "Eco-friendly design with durable fabric",
    },
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    rating: 5,
  },
  {
    id: 3,
    name: "Lolito",
    productInfo: "Luxury big sofa",
    price: 40,
    images: [Lolito, Syltherine, Liviosa, ResPira],
    additionalInfo: {
      weight: "5kg",
      dimensions: "200 x 80 x 100 cm",
      materials: "Leather and premium foam",
      other: "High-end luxury sofa for modern living spaces",
    },
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    rating: 4,
  },
  {
    id: 4,
    name: "Respira",
    productInfo: "Outdoor bar table and stool",
    price: 50,
    images: [ResPira, Syltherine, Liviosa, Lolito],
    additionalInfo: {
      weight: "3kg",
      dimensions: "80 x 50 x 100 cm",
      materials: "Wood and metal",
      other: "Perfect for outdoor patios and gardens",
    },
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    rating: 3,
  },
];

export default function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState("M");
  const [zoomedProduct, setZoomedProduct] = useState(null);

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedTab, setSelectedTab] = useState("additional");
  const { wishlist, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);

  // Reviews state
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "White Lewis",
      image: Profile1,
      rating: 5,
      text: "Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullamper euismod vehicula. Phasellus quam nisi, congue id nulla.",
    },
    {
      id: 2,
      name: "White Lewis",
      image: Profile2,
      rating: 5,
      text: "Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullamper euismod vehicula. Phasellus quam nisi, congue id nulla.",
    },
  ]);

  const [newReview, setNewReview] = useState({
    name: "",
    email: "",
    message: "",
    rating: 5,
  });

  // Find product by ID - FIXED: Ensure ID is properly parsed as number
  const productId = parseInt(id);

  // First try to get product from location state
  let product = location.state?.product;

  // If not available in location state, find in products array
  if (!product) {
    product = products.find((p) => p.id === productId);

    // If still not found, try to construct a product from wishlist data
    if (!product && wishlist) {
      const wishlistItem = wishlist.find((item) => item.id === productId);
      if (wishlistItem) {
        // Create a fallback product object from wishlist data
        product = {
          id: wishlistItem.id,
          name: wishlistItem.name,
          productInfo: wishlistItem.description,
          price: wishlistItem.price,
          images: wishlistItem.img ? [wishlistItem.img] : [],
          additionalInfo: {
            weight: "Not specified",
            dimensions: "Not specified",
            materials: "Not specified",
            other: "Additional information not available for this product",
          },
          description:
            wishlistItem.description ||
            "No detailed description available for this product.",
          rating: 5,
        };
      }
    }
  }

  // Debug logs
  console.log("Product ID from params:", productId);
  console.log("Product from location state:", location.state?.product);
  console.log("Found product:", product);

  // Check if product is in wishlist
  const isWishlisted = product
    ? wishlist.some((item) => item.id === product.id)
    : false;

  // Handle wishlist toggle
  const toggleWishlist = () => {
    if (!product) return;

    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist({
        id: product.id,
        img:
          product.images && product.images.length > 0
            ? product.images[0]
            : null,
        name: product.name,
        description: product.productInfo,
        price: product.price,
      });
    }
  };

  // Handle review submission
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.email && newReview.message) {
      setReviews([
        ...reviews,
        { ...newReview, id: reviews.length + 1, image: Profile1 },
      ]);
      setNewReview({ name: "", email: "", message: "", rating: 5 });
    }
  };

  // Handle quantity change
  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  // Handle add to cart with current quantity
  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        image:
          product.images && product.images.length > 0
            ? product.images[0]
            : null,
        name: product.name,
        price: product.price,
        quantity: quantity,
      });
    }
  };

  // Navigation functions for product images
  const nextImage = () => {
    if (product?.images?.length > 1) {
      setSelectedImage((prev) => (prev + 1) % product.images.length);
    }
  };

  const prevImage = () => {
    if (product?.images?.length > 1) {
      setSelectedImage(
        (prev) => (prev - 1 + product.images.length) % product.images.length
      );
    }
  };

  // Handle product selection from related products
  const handleProductSelect = (selectedProduct) => {
    navigate(`/product/${selectedProduct.id}`, {
      state: { product: selectedProduct },
    });
  };

  // If no product found
  if (!product || !product.images || product.images.length === 0) {
    return (
      <div className="container mx-auto py-8 px-3 md:py-16 md:px-4">
        <h1 className="text-center text-xl md:text-2xl font-bold">
          Product Not Found
        </h1>
        <p className="text-center mt-2 md:mt-4">
          Could not find product with ID: {id}
        </p>
        <div className="text-center mt-4 md:mt-6">
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white py-2 px-4 md:py-3 md:px-6 rounded-md hover:bg-blue-700 transition"
          >
            Return to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto flex flex-col md:flex-row gap-4 md:gap-8 py-5 md:py-10 px-3 md:px-5">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2">
          <div className="relative">
            <span className="absolute top-2 left-2 bg-purple-500 text-white px-2 py-1 text-xs rounded z-10">
              New
            </span>

            {/* Navigation arrows - Only show if more than one image */}
            {product.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-1 md:p-2 rounded-full shadow-md hover:bg-gray-700 transition-colors z-10"
                >
                  <FaArrowLeft size={16} className="md:w-5 md:h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-1 md:p-2 rounded-full shadow-md hover:bg-gray-700 transition-colors z-10"
                >
                  <FaArrowRight size={16} className="md:w-5 md:h-5" />
                </button>
              </>
            )}

            {/* Main Image */}
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-auto object-cover rounded-md"
            />
          </div>

          {/* Thumbnails - Only show if more than one image */}
          {product.images.length > 1 && (
            <div className="mt-2 md:mt-4 flex gap-1 md:gap-2 flex-wrap">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-16 h-16 md:w-24 md:h-24 object-cover cursor-pointer border rounded-md transition-all ${
                    selectedImage === index
                      ? "border-2 border-black"
                      : "border hover:border-gray-500"
                  }`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Right Product Info Section */}
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>
          <p className="text-red-500 text-xl md:text-2xl font-semibold mt-1 md:mt-2">
            €{product.price}
          </p>

          {/* Star Rating */}
          <div className="flex my-1 md:my-2 items-center">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-sm md:text-base ${
                    i < (product.rating || 5)
                      ? "text-yellow-500"
                      : "text-gray-400"
                  }`}
                />
              ))}
            <span className="ml-2 text-xs md:text-sm text-gray-600">
              ({reviews.length} reviews)
            </span>
          </div>

          {/* Product Info */}
          <p className="text-sm md:text-base text-gray-600 my-2 md:my-4">
            {product.productInfo}
          </p>

          {/* Color Selection */}
          <div className="my-3 md:my-4">
            <h4 className="font-semibold text-sm md:text-base">Color</h4>
            <div className="flex gap-2 md:gap-3 mt-1 md:mt-2">
              {["black", "red", "brown", "blue"].map((color, index) => (
                <div
                  key={index}
                  className={`w-6 h-6 md:w-8 md:h-8 rounded-full cursor-pointer transition duration-300 border-2 ${
                    selectedColor === color
                      ? "border-gray-900 ring-2 ring-offset-1 md:ring-offset-2 ring-gray-400"
                      : "border-gray-300 hover:border-gray-500"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                ></div>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="my-3 md:my-4">
            <h4 className="font-semibold text-sm md:text-base">Size</h4>
            <div className="flex flex-wrap gap-1 md:gap-2 mt-1 md:mt-2">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className={`border px-3 py-1 md:px-4 md:py-1 text-sm md:text-base rounded-md transition-colors ${
                    selectedSize === size
                      ? "bg-purple-500 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex flex-wrap items-center my-3 md:my-4 gap-2">
            <div className="flex items-center">
              <button
                onClick={decrementQuantity}
                className="border px-3 py-1 md:px-4 md:py-2 hover:bg-gray-100 transition-colors"
              >
                -
              </button>
              <span className="px-3 md:px-4 text-sm md:text-base">
                {quantity}
              </span>
              <button
                onClick={incrementQuantity}
                className="border px-3 py-1 md:px-4 md:py-2 hover:bg-gray-100 transition-colors"
              >
                +
              </button>
            </div>
            <button
              className="bg-black text-white px-4 py-1 md:px-6 md:py-2 flex items-center rounded-md hover:bg-purple-500 transition-colors text-sm md:text-base"
              onClick={handleAddToCart}
            >
              <FaShoppingCart className="mr-1 md:mr-2 text-base md:text-lg" />{" "}
              ADD TO CART
            </button>

            <div className="flex items-center gap-2 md:gap-4">
              <button
                className="text-gray-600 hover:text-red-700 text-xl md:text-2xl relative group"
                onClick={toggleWishlist}
              >
                <FaHeart className={isWishlisted ? "text-red-500" : ""} />
                {/* Tooltip */}
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap z-10">
                  {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
                </span>
              </button>

              <button className="text-gray-600 hover:text-purple-500 text-xl md:text-2xl relative group transition-colors">
                <img
                  src={Compare}
                  className="w-5 h-5 md:w-6 md:h-6"
                  alt="Compare Icon"
                />
                {/* Tooltip */}
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded-md z-10">
                  Compare
                </span>
              </button>
            </div>
          </div>

          {/* Categories & Tags */}
          <p className="text-xs md:text-sm text-gray-600 mt-3 md:mt-4">
            <strong>Categories:</strong> furniture, home decor
          </p>
          <p className="text-xs md:text-sm text-gray-600">
            <strong>Tags:</strong> modern, design, comfort, style
          </p>

          {/* Social Media Links */}
          <div className="flex gap-3 md:gap-4 mt-4 md:mt-6 text-xl md:text-2xl">
            <FaFacebook className="cursor-pointer text-gray-500 hover:text-blue-600 transition-colors" />
            <FaTwitter className="cursor-pointer text-gray-500 hover:text-blue-400 transition-colors" />
            <FaLinkedin className="cursor-pointer text-gray-500 hover:text-blue-800 transition-colors" />
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="container mx-auto px-3 md:px-5 mt-6 md:mt-10">
        {/* Tabs Navigation */}
        <div className="flex border-b overflow-x-auto scrollbar-hide">
          {[
            { label: "Additional Information", key: "additional" },
            { label: "Description", key: "description" },
            { label: `Reviews (${reviews.length})`, key: "reviews" },
          ].map((tab, index) => (
            <button
              key={index}
              onClick={() => setSelectedTab(tab.key)}
              className={`py-1 px-3 md:py-2 md:px-6 text-sm md:text-lg font-semibold whitespace-nowrap ${
                selectedTab === tab.key
                  ? "border-b-2 border-black text-black"
                  : "text-gray-500 hover:text-black transition-colors"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-4 md:mt-6 py-2 md:py-4">
          {selectedTab === "additional" && product.additionalInfo && (
            <div className="space-y-1 md:space-y-2 text-sm md:text-base">
              <p className="py-1 md:py-2 border-b border-gray-200">
                <strong className="font-semibold">Weight:</strong>{" "}
                {product.additionalInfo.weight}
              </p>
              <p className="py-1 md:py-2 border-b border-gray-200">
                <strong className="font-semibold">Dimensions:</strong>{" "}
                {product.additionalInfo.dimensions}
              </p>
              <p className="py-1 md:py-2 border-b border-gray-200">
                <strong className="font-semibold">Materials:</strong>{" "}
                {product.additionalInfo.materials}
              </p>
              <p className="py-1 md:py-2">
                <strong className="font-semibold">Other Info:</strong>{" "}
                {product.additionalInfo.other}
              </p>
            </div>
          )}

          {selectedTab === "description" && (
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {product.description}
            </p>
          )}

          {selectedTab === "reviews" && (
            <div className="mt-2 md:mt-4 flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Reviews List */}
              <div className="w-full md:w-1/2">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">
                  Customer Reviews
                </h3>
                {reviews.length > 0 ? (
                  reviews.map((review) => (
                    <div
                      key={review.id}
                      className="flex gap-2 md:gap-4 mb-4 md:mb-6 pb-4 md:pb-6 border-b border-gray-200"
                    >
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-bold text-sm md:text-base">
                          {review.name}
                        </h4>
                        <div className="flex my-1">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={`text-xs md:text-sm ${
                                i < review.rating
                                  ? "text-yellow-500"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">
                          {review.text}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-xs md:text-sm text-gray-500">
                    No reviews yet. Be the first to review this product!
                  </p>
                )}
              </div>

              {/* Review Form */}
              <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">
                  Add a Review
                </h3>
                <div className="flex items-center my-2 md:my-3">
                  <span className="mr-2 text-xs md:text-sm">Your rating:</span>
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`cursor-pointer text-base md:text-lg ${
                        i < newReview.rating
                          ? "text-yellow-500"
                          : "text-gray-400"
                      }`}
                      onClick={() =>
                        setNewReview({ ...newReview, rating: i + 1 })
                      }
                    />
                  ))}
                </div>

                <form
                  onSubmit={handleReviewSubmit}
                  className="space-y-2 md:space-y-4"
                >
                  <div className="flex flex-col md:flex-row gap-2 md:gap-4">
                    <input
                      type="text"
                      placeholder="Name"
                      value={newReview.name}
                      onChange={(e) =>
                        setNewReview({ ...newReview, name: e.target.value })
                      }
                      className="border p-1 md:p-2 w-full md:w-1/2 rounded-md text-sm md:text-base"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={newReview.email}
                      onChange={(e) =>
                        setNewReview({ ...newReview, email: e.target.value })
                      }
                      className="border p-1 md:p-2 w-full md:w-1/2 rounded-md text-sm md:text-base"
                      required
                    />
                  </div>
                  <textarea
                    placeholder="Message"
                    value={newReview.message}
                    onChange={(e) =>
                      setNewReview({ ...newReview, message: e.target.value })
                    }
                    className="border p-1 md:p-2 w-full h-24 md:h-32 rounded-md text-sm md:text-base"
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-purple-500 text-white py-1 md:py-2 px-4 md:px-6 rounded-md hover:bg-purple-600 transition-colors text-sm md:text-base"
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products Section */}
      <div className="container mx-auto px-3 md:px-5 mt-8 md:mt-16 mb-6 md:mb-10 relative">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6 relative">
          Related Products
          <div className="w-12 md:w-16 border-b-2 border-black mx-auto mt-1 md:mt-2"></div>
        </h2>

        {/* Custom Navigation Buttons */}
        <div className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2">
          <button className="swiper-button-prev-custom bg-gradient-to-r from-purple-600 to-pink-500 text-white p-2 md:p-3 rounded-full shadow-lg hover:scale-110 transform transition-all ease-in-out">
            <FaChevronLeft size={12} className="md:w-4 md:h-4" />
          </button>
        </div>
        <div className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2">
          <button className="swiper-button-next-custom bg-gradient-to-l from-purple-600 to-pink-500 text-white p-2 md:p-3 rounded-full shadow-lg hover:scale-110 transform transition-all ease-in-out">
            <FaChevronRight size={12} className="md:w-4 md:h-4" />
          </button>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            350: { slidesPerView: 1.5, spaceBetween: 10 },
            480: { slidesPerView: 2, spaceBetween: 15 },
            640: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
          }}
          className="mySwiper py-4 md:py-6"
        >
          {products.map((relatedProduct, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-white shadow-md rounded-lg p-2 md:p-4 relative group transition-transform duration-300 hover:shadow-lg hover:-translate-y-2 cursor-pointer"
                onClick={() => handleProductSelect(relatedProduct)}
              >
                {/* Product Image */}
                <div className="relative h-32 md:h-48 overflow-hidden rounded-md">
                  <img
                    src={relatedProduct?.images?.[0]}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                  />
                </div>

                {/* Product Details */}
                <h3 className="mt-2 md:mt-4 text-center font-medium text-sm md:text-base truncate">
                  {relatedProduct.name}
                </h3>

                {/* Star Rating */}
                <div className="flex justify-center my-1 md:my-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-xs md:text-sm ${
                        i < (relatedProduct.rating || 0)
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Pricing */}
                <div className="text-center">
                  <span className="font-semibold text-base md:text-lg">
                    €{relatedProduct.price}
                  </span>
                </div>

                {/* Hover Actions */}
                <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-pink-500 flex justify-center items-center gap-2 md:gap-4 p-1 rounded-b-lg">
                    <button
                      className="group/icon transition-all duration-500 ease-in-out delay-100 bg-transparent p-1 md:p-2 rounded-full hover:bg-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        setZoomedProduct(relatedProduct);
                      }}
                    >
                      <FaEye className="text-white group-hover/icon:text-pink-500 transition-all duration-500 text-xs md:text-base" />
                    </button>
                    <button
                      className="group/icon transition-all duration-500 ease-in-out delay-200 bg-transparent p-1 md:p-2 rounded-full hover:bg-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart({
                          id: relatedProduct.id,
                          image: relatedProduct.images[0],
                          name: relatedProduct.name,
                          price: relatedProduct.price,
                          quantity: 1,
                        });
                      }}
                    >
                      <FaShoppingCart className="text-white group-hover/icon:text-pink-500 transition-all duration-500 text-xs md:text-base" />
                    </button>
                    <button
                      className="group/icon transition-all duration-500 ease-in-out delay-300 bg-transparent p-1 md:p-2 rounded-full hover:bg-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        const isItemWishlisted = wishlist.some(
                          (item) => item.id === relatedProduct.id
                        );
                        if (isItemWishlisted) {
                          removeFromWishlist(relatedProduct.id);
                        } else {
                          addToWishlist({
                            id: relatedProduct.id,
                            img: relatedProduct.images[0],
                            name: relatedProduct.name,
                            description: relatedProduct.productInfo,
                            price: relatedProduct.price,
                          });
                        }
                      }}
                    >
                      <FaHeart
                        className={`text-white group-hover/icon:text-pink-500 transition-all duration-500 text-xs md:text-base ${
                          wishlist.some((item) => item.id === relatedProduct.id)
                            ? "fill-current text-red-500"
                            : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Zoom Modal */}
      {zoomedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center px-4">
          <div className="bg-white p-4 md:p-6 rounded-lg relative max-w-lg w-full">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-lg font-bold"
              onClick={() => setZoomedProduct(null)}
            >
              ×
            </button>
            <img
              src={zoomedProduct?.images?.[0]}
              alt={zoomedProduct?.name}
              className="w-full h-auto rounded"
            />
            <h3 className="mt-4 text-center text-lg font-semibold">
              {zoomedProduct?.name}
            </h3>
          </div>
        </div>
      )}
    </>
  );
}

import React, { useState } from "react";
import Share from "./Images/share.svg";
import Like from "./Images/like.svg";
import { Eye } from "lucide-react";

import { Link } from "react-router-dom";
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
import ElectronicsImg from "./Images/laptop.jpg";
import FurnitureImg from "./Images/breakfast_Table.jpg";
import PlantImg from "./Images/plant.jpg";
import OrganicFoodImg from "./Images/organic_Food.jpg";
import FlowerImg from "./Images/flower.jpg";
import BookImg from "./Images/book.jpg";
import CosmeticsImg from "./Images/cosmetics.jpg";
import AccessoriesImg from "./Images/Accessories.jpg";
import HandmadeImg from "./Images/Handmade.jpg";
import KidsImg from "./Images/kids.jpg";
import CakesImg from "./Images/Cakes.jpg";
import MedicalImg from "./Images/medical.jpg";
import Fashion from "./Images/Flone - React eCommerce Template Preview - ThemeForest_files/26.jpg";
import Men from "./Images/Flone - React eCommerce Template Preview - ThemeForest_files/29.jpg";
import Women from "./Images/Flone - React eCommerce Template Preview - ThemeForest_files/7.jpg";

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
  ElectronicsImg,
  FurnitureImg,
  PlantImg,
  OrganicFoodImg,
  FlowerImg,
  BookImg,
  CosmeticsImg,
  AccessoriesImg,
  HandmadeImg,
  KidsImg,
  CakesImg,
  MedicalImg,
];

export default function Shop() {
  const [view, setView] = useState("grid"); // grid, list
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOption, setSortOption] = useState("default"); // Add sort option state

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Smartphone",
      price: 399.99,
      oldPrice: 450.0,
      image: ElectronicsImg,
      hoverImage: hoverImgOne,
      categories: ["Electronics"],
      discount: "10%",
      rating: 4,
      isNew: true,
      isOutOfStock: false,
      isWishlisted: false,
    },
    {
      id: 2,
      name: "Wooden Table",
      price: 89.5,
      oldPrice: 120.0,
      image: FurnitureImg,
      hoverImage: hoverImgTwo,
      categories: ["Furniture"],
      discount: "25%",
      rating: 5,
      isNew: false,
      isOutOfStock: false,
      isWishlisted: true,
    },
    {
      id: 3,
      name: "Potted Plant",
      price: 19.99,
      oldPrice: 25.0,
      image: PlantImg,
      hoverImage: hoverImgThree,
      categories: ["Plant"],
      discount: "20%",
      rating: 3,
      isNew: false,
      isOutOfStock: false,
      isWishlisted: false,
    },
    {
      id: 4,
      name: "Organic Honey",
      price: 12.5,
      oldPrice: 15.0,
      image: OrganicFoodImg,
      hoverImage: hoverImgFour,
      categories: ["Organic Food"],
      discount: "16%",
      rating: 4,
      isNew: true,
      isOutOfStock: false,
      isWishlisted: false,
    },
    {
      id: 5,
      name: "Fresh Flower Bouquet",
      price: 25.0,
      oldPrice: 30.0,
      image: FlowerImg,
      hoverImage: hoverImgFive,
      categories: ["Flower"],
      discount: "17%",
      rating: 5,
      isNew: false,
      isOutOfStock: false,
      isWishlisted: true,
    },
    {
      id: 6,
      name: "Book: JavaScript Essentials",
      price: 14.99,
      oldPrice: 20.0,
      image: BookImg,
      hoverImage: hoverImgSix,
      categories: ["Book"],
      discount: "25%",
      rating: 5,
      isNew: true,
      isOutOfStock: false,
      isWishlisted: false,
    },
    {
      id: 7,
      name: "Face Cream",
      price: 9.99,
      oldPrice: 12.0,
      image: CosmeticsImg,
      hoverImage: hoverImgSeven,
      categories: ["Cosmetics"],
      discount: "15%",
      rating: 3,
      isNew: false,
      isOutOfStock: false,
      isWishlisted: false,
    },
    {
      id: 8,
      name: "Gold Necklace",
      price: 299.99,
      oldPrice: 349.0,
      image: AccessoriesImg,
      hoverImage: hoverImgEight,
      categories: ["Accessories"],
      discount: "14%",
      rating: 4,
      isNew: false,
      isOutOfStock: false,
      isWishlisted: true,
    },
    {
      id: 9,
      name: "Handmade Vase",
      price: 34.0,
      oldPrice: 40.0,
      image: HandmadeImg,
      hoverImage: hoverImgNine,
      categories: ["Handmade"],
      discount: "15%",
      rating: 4,
      isNew: true,
      isOutOfStock: false,
      isWishlisted: false,
    },
    {
      id: 10,
      name: "Kids Toy Set",
      price: 22.5,
      oldPrice: 30.0,
      image: KidsImg,
      hoverImage: hoverImgTen,
      categories: ["Kids"],
      discount: "25%",
      rating: 5,
      isNew: false,
      isOutOfStock: false,
      isWishlisted: true,
    },
    {
      id: 11,
      name: "Chocolate Cake",
      price: 18.0,
      oldPrice: 22.0,
      image: CakesImg,
      hoverImage: hoverImgOne,
      categories: ["Cakes"],
      discount: "18%",
      rating: 4,
      isNew: true,
      isOutOfStock: false,
      isWishlisted: false,
    },
    {
      id: 12,
      name: "Medical First Aid Kit",
      price: 35.0,
      oldPrice: 45.0,
      image: MedicalImg,
      hoverImage: hoverImgTwo,
      categories: ["Medical"],
      discount: "22%",
      rating: 4,
      isNew: false,
      isOutOfStock: false,
      isWishlisted: true,
    },
    {
      id: 13,
      name: "Fashion Clothes",
      price: 35.0,
      oldPrice: 45.0,
      image: Fashion,
      hoverImage: hoverImgTwo,
      categories: ["Fashion"],
      discount: "22%",
      rating: 4,
      isNew: false,
      isOutOfStock: false,
      isWishlisted: true,
    },
    {
      id: 14,
      name: "Men Clothes",
      price: 35.0,
      oldPrice: 45.0,
      image: Men,
      hoverImage: hoverImgTwo,
      categories: ["Men"],
      discount: "22%",
      rating: 4,
      isNew: false,
      isOutOfStock: false,
      isWishlisted: true,
    },
    {
      id: 15,
      name: "Women Clthes",
      price: 35.0,
      oldPrice: 45.0,
      image: MedicalImg,
      hoverImage: Women,
      categories: ["Women"],
      discount: "22%",
      rating: 4,
      isNew: false,
      isOutOfStock: false,
      isWishlisted: true,
    },
  ]);

  // Add the missing functions
  const handleAddToCart = (e) => {
    e.stopPropagation();
    // Add your cart logic here
    console.log("Product added to cart");
  };

  const openQuickView = (e) => {
    e.stopPropagation();
    // Add your quick view logic here
    console.log("Quick view opened");
  };

  const toggleWishlist = (e, productId) => {
    if (e) e.stopPropagation();
    // Add your wishlist logic here
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, isWishlisted: !product.isWishlisted }
          : product
      )
    );
    console.log("Toggle wishlist for product ID:", productId);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) => {
      if (category === "All Categories") {
        // If "All Categories" is selected/deselected, clear/set all categories
        return prev.includes(category) ? [] : ["All Categories"];
      } else {
        // Remove "All Categories" if it was selected and another category is being selected
        const newCategories = prev.filter((cat) => cat !== "All Categories");

        // Toggle the selected category
        if (newCategories.includes(category)) {
          return newCategories.filter((cat) => cat !== category);
        } else {
          return [...newCategories, category];
        }
      }
    });
  };

  // New function to handle sorting change
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Filter products based on selected categories
  const filteredProducts = products.filter((product) => {
    // If no categories are selected or "All Categories" is selected, show all products
    if (
      selectedCategories.length === 0 ||
      selectedCategories.includes("All Categories")
    ) {
      return true;
    }

    // Show products that match at least one selected category
    return product.categories.some((category) =>
      selectedCategories.includes(category)
    );
  });

  // Sort the filtered products based on the selected sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "price-low-high":
        return a.price - b.price;
      case "price-high-low":
        return b.price - a.price;
      case "name-a-z":
        return a.name.localeCompare(b.name);
      default:
        return 0; // Default sort (no sorting)
    }
  });

  const categories = [
    "All Categories",
    "Fashion",
    "Men",
    "Women",
    "Electronics",
    "Furniture",
    "Plant",
    "Organic Food",
    "Flower",
    "Book",
    "Cosmetics",
    "Accessories",
    "Handmade",
    "Kids",
    "Cakes",
    "Medical",
  ];

  const colors = ["All Colors"];

  return (
    <div className="bg-gray-50">
      {/* Breadcrumb */}
      <div className="flex justify-center py-4 bg-gray-100">
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">HOME</span>
          <span className="text-gray-400">/</span>
          <span className="font-medium">SHOP</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Sidebar */}
          <div className="w-full md:w-1/4">
            {/* Search */}
            <div className="mb-8">
              <h3 className="font-medium text-lg mb-4">Search</h3>
              <div className="flex border border-gray-300">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="p-2 w-full focus:outline-none"
                />
                <button className="bg-white p-2">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="font-medium text-lg mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`cat-${index}`}
                      className="mr-2"
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                    />
                    <label htmlFor={`cat-${index}`} className="text-gray-700">
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div className="mb-8">
              <h3 className="font-medium text-lg mb-4">Color</h3>
              <div className="space-y-2">
                {colors.map((color, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`color-${index}`}
                      className="mr-2"
                    />
                    <label htmlFor={`color-${index}`} className="text-gray-700">
                      {color}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4">
            {/* Filter Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <p className="text-gray-600 mb-4 md:mb-0">
                Showing {sortedProducts.length} of {products.length} result
              </p>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <select
                    className="border border-gray-300 p-2 pr-8 appearance-none focus:outline-none bg-white"
                    value={sortOption}
                    onChange={handleSortChange}
                  >
                    <option value="default">Default</option>
                    <option value="price-low-high">Price: Low to High</option>
                    <option value="price-high-low">Price: High to Low</option>
                    <option value="name-a-z">Name: A to Z</option>
                  </select>
                </div>

                <div className="flex items-center space-x-2">
                  {/* Grid layout options */}
                  <button
                    onClick={() => setView("grid-large")}
                    className={`p-1 ${
                      view === "grid-large" ? "text-pink-500" : "text-gray-500"
                    }`}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M10 3H3v7h7V3zm0 11H3v7h7v-7zm11-11h-7v7h7V3zm0 11h-7v7h7v-7z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setView("grid")}
                    className={`p-1 ${
                      view === "grid" ? "text-pink-500" : "text-gray-500"
                    }`}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setView("list")}
                    className={`p-1 ${
                      view === "list" ? "text-pink-500" : "text-gray-500"
                    }`}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div
              className={`grid ${
                view === "grid-large"
                  ? "grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6"
                  : view === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                  : "grid-cols-1 gap-6"
              }`}
            >
              {sortedProducts.map((product, index) => (
                <div
                  key={index}
                  className={`bg-white group relative ${
                    view === "list" ? "flex flex-row" : ""
                  }`}
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  {/* Product Image Container - Fixed height and aspect ratio */}
                  <div
                    className={`relative overflow-hidden rounded-md shadow-md group-hover:shadow-lg transition-shadow duration-300 ${
                      view === "list" ? "w-1/3" : ""
                    }`}
                    style={{ height: view === "list" ? "220px" : "300px" }}
                  >
                    {/* Default image - Fixed size with object-cover */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-opacity duration-500 absolute top-0 left-0"
                      style={{
                        opacity: hoveredProduct === product.id ? 0 : 1,
                      }}
                    />

                    {/* Hover image - Fixed size with object-cover */}
                    <img
                      src={
                        product.hoverImage ||
                        hoverImages[(index + 1) % hoverImages.length]
                      }
                      alt={`${product.name} hover`}
                      className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500"
                      style={{
                        opacity: hoveredProduct === product.id ? 1 : 0,
                      }}
                    />

                    {/* Discount Label */}
                    {product.discount && (
                      <div className="absolute top-2 left-2 bg-pink-500 text-white text-xs px-2 py-1 rounded">
                        -{product.discount}
                      </div>
                    )}

                    {/* New Label */}
                    {product.isNew && (
                      <div className="absolute top-2 right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded">
                        New
                      </div>
                    )}

                    {/* Actions Overlay */}
                    <div
                      className="flex justify-end items-center flex-col gap-4 text-center absolute inset-0 opacity-0 transition-all ease-in-out duration-500 group-hover:opacity-100 hover:translate-y-4 -translate-y-24"
                      style={{ zIndex: 3 }}
                    >
                      {/* Add to Cart Button - Centered at bottom */}
                      {product.isOutOfStock ? (
                        <button
                          className="px-8 py-2 bg-red-600 text-white font-semibold rounded-full cursor-not-allowed"
                          disabled
                        >
                          Out of Stock
                        </button>
                      ) : (
                        <button
                          className="px-8 py-2 bg-custom-pink hover:bg-black text-white font-semibold rounded-full"
                          onClick={handleAddToCart}
                        >
                          Add to Cart
                        </button>
                      )}

                      {/* Row of Icons (Sequential display) */}
                      <div className="flex gap-[1px] -mt-2 items-center mb-6 rounded-md hover:text-black">
                        {/* Icon 1 - Share */}
                        <div className="opacity-0 px-2 py-1 rounded-l-md bg-custom-pink hover:bg-black group-hover:opacity-100 transition-opacity duration-500 delay-[700ms]">
                          <img src={Share} alt="Share" />
                        </div>

                        {/* Icon 2 - Eye icon for zoom */}
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

                        {/* Icon 3 - Like */}
                        <div className="opacity-0 px-2 py-1 rounded-r-md bg-custom-pink hover:bg-black group-hover:opacity-100 transition-opacity duration-500 delay-[1000ms]">
                          <img
                            src={Like}
                            alt="Like"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleWishlist(e, product.id);
                            }}
                            className={`${
                              product.isWishlisted ? "filter-red" : ""
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div
                    className={`p-4 ${
                      view === "list" ? "w-2/3 text-left" : "text-center"
                    }`}
                  >
                    <h3 className="text-gray-800 font-medium">
                      {product.name}
                    </h3>
                    <div
                      className={`flex ${
                        view === "list" ? "" : "justify-center"
                      } my-2`}
                    >
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < product.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <div
                      className={`flex ${
                        view === "list" ? "" : "justify-center"
                      } gap-2`}
                    >
                      <span className="text-gray-800 font-medium">
                        €{product.price.toFixed(2)}
                      </span>
                      {product.oldPrice && (
                        <span className="text-gray-500 line-through">
                          €{product.oldPrice.toFixed(2)}
                        </span>
                      )}
                    </div>

                    {view === "list" && (
                      <div className="mt-3">
                        <p className="text-gray-600 text-sm">
                          Ut enim ad minima veniam, quis nostrum exercitationem
                          ullam corporis suscipit laboriosam, nisi ut aliquid ex
                          ea commodi consequatur? Quis autem vel eum iure
                          reprehenderit qui in ea voluptate velit esse quam
                          nihil molestiae consequatur.
                        </p>
                        <div className="mt-4 flex gap-2">
                          <button className="bg-gray-800 text-white px-4 py-2 text-sm font-medium hover:bg-gray-700">
                            SELECT OPTION
                          </button>
                          <button className="border border-gray-300 p-2">
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                              />
                            </svg>
                          </button>
                          <button className="border border-gray-300 p-2">
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Products Grid */}
            <div
              className={`grid ${
                view === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1"
              } gap-4`}
            >
              {sortedProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white group relative"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  {/* Product Image Container - Fixed height and aspect ratio */}
                  <div
                    className="relative overflow-hidden rounded-md shadow-md group-hover:shadow-lg transition-shadow duration-300"
                    style={{ height: "300px" }}
                  >
                    {/* Default image - Fixed size with object-cover */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-opacity duration-500 absolute top-0 left-0"
                      style={{
                        opacity: hoveredProduct === product.id ? 0 : 1,
                      }}
                    />

                    {/* Hover image - Fixed size with object-cover */}
                    <img
                      src={
                        product.hoverImage ||
                        hoverImages[(index + 1) % hoverImages.length]
                      }
                      alt={`${product.name} hover`}
                      className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500"
                      style={{
                        opacity: hoveredProduct === product.id ? 1 : 0,
                      }}
                    />

                    {/* Discount Label */}
                    {product.discount && (
                      <div className="absolute top-2 left-2 bg-pink-500 text-white text-xs px-2 py-1 rounded">
                        -{product.discount}
                      </div>
                    )}

                    {/* New Label */}
                    {product.isNew && (
                      <div className="absolute top-2 right-2 bg-purple-500 text-white text-xs px-2 py-1 rounded">
                        New
                      </div>
                    )}

                    {/* Actions Overlay */}
                    <div
                      className="flex justify-end items-center flex-col gap-4 text-center absolute inset-0 opacity-0 transition-all ease-in-out duration-500 group-hover:opacity-100 hover:translate-y-4 -translate-y-24"
                      style={{ zIndex: 3 }}
                    >
                      {/* Add to Cart Button - Centered at bottom */}
                      {product.isOutOfStock ? (
                        <button
                          className="px-8 py-2 bg-red-600 text-white font-semibold rounded-full cursor-not-allowed"
                          disabled
                        >
                          Out of Stock
                        </button>
                      ) : (
                        <button
                          className="px-8 py-2 bg-custom-pink hover:bg-black text-white font-semibold rounded-full"
                          onClick={handleAddToCart}
                        >
                          Add to Cart
                        </button>
                      )}

                      {/* Row of Icons (Sequential display) */}
                      <div className="flex gap-[1px] -mt-2 items-center mb-6 rounded-md hover:text-black">
                        {/* Icon 1 - Share */}
                        <div className="opacity-0 px-2 py-1 rounded-l-md bg-custom-pink hover:bg-black group-hover:opacity-100 transition-opacity duration-500 delay-[700ms]">
                          <img src={Share} alt="Share" />
                        </div>

                        {/* Icon 2 - Eye icon for zoom */}
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

                        {/* Icon 3 - Like */}
                        <div className="opacity-0 px-2 py-1 rounded-r-md bg-custom-pink hover:bg-black group-hover:opacity-100 transition-opacity duration-500 delay-[1000ms]">
                          <img
                            src={Like}
                            alt="Like"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleWishlist(e, product.id);
                            }}
                            className={`${
                              product.isWishlisted ? "filter-red" : ""
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-4 text-center">
                    <h3 className="text-gray-800 font-medium">
                      {product.name}
                    </h3>
                    <div className="flex justify-center my-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < product.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <div className="flex justify-center gap-2">
                      <span className="text-gray-800 font-medium">
                        €{product.price.toFixed(2)}
                      </span>
                      {product.oldPrice && (
                        <span className="text-gray-500 line-through">
                          €{product.oldPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

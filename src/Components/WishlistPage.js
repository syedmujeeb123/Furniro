import { useContext } from "react";
import { Link } from "react-router-dom";
import { WishlistContext } from "../context/WishlistContext";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  console.log("Wishlist items:", wishlist);

  return (
    <div className="min-h-screen bg-white w-full pt-8 pb-16 md:pt-12 md:pb-20">
      {/* Page Title - Keep this outside the scrollable area */}
      <div className="text-center mb-8 md:mb-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold">Your Wishlist</h1>
        <p className="text-gray-500 mt-2">Items you've saved for later</p>
      </div>

      <div className="container mx-auto px-3 md:px-4">
        {wishlist.length === 0 ? (
          <div className="text-center py-12 md:py-16">
            <p className="text-gray-500 text-lg mb-6">
              Your wishlist is empty.
            </p>
            <Link
              to="/"
              className="bg-blue-600 text-white py-2 px-4 md:py-3 md:px-6 rounded-md hover:bg-blue-700 transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow">
            {/* Table container with responsive design */}
            <div className="overflow-x-auto">
              <div className="max-h-[500px] md:max-h-[700px] overflow-y-auto">
                <table className="min-w-full">
                  <thead className="sticky top-0 bg-gray-100 z-10">
                    <tr className="border-b">
                      <th className="py-3 px-3 md:py-4 md:px-6 text-left">
                        Image
                      </th>
                      <th className="py-3 px-3 md:py-4 md:px-6 text-left">
                        Product Name
                      </th>
                      <th className="hidden md:table-cell py-4 px-6 text-left">
                        Description
                      </th>
                      <th className="py-3 px-3 md:py-4 md:px-6 text-left">
                        Price
                      </th>
                      <th className="py-3 px-3 md:py-4 md:px-6 text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {wishlist.map((item) => (
                      <tr key={item.id} className="border-b hover:bg-gray-50">
                        {/* Product Image (Clickable) */}
                        <td className="py-4 px-3 md:py-6 md:px-6">
                          <Link to={`/product/${item.id}`}>
                            <img
                              src={item.img}
                              alt={item.name}
                              className="w-16 h-16 md:w-24 md:h-24 object-cover border rounded"
                            />
                          </Link>
                        </td>

                        {/* Product Name (Clickable) */}
                        <td className="py-4 px-3 md:py-6 md:px-6 font-medium">
                          <Link
                            to={`/product/${item.id}`}
                            className="text-blue-600 hover:text-blue-800 transition text-sm md:text-base"
                          >
                            {item.name || `Product ${item.id}`}
                          </Link>
                          {/* Mobile-only description */}
                          <p className="text-xs text-gray-500 mt-1 md:hidden">
                            {(item.description && item.description.length > 50
                              ? item.description.substring(0, 50) + "..."
                              : item.description) || "No description available"}
                          </p>
                        </td>

                        {/* Description - Hidden on mobile */}
                        <td className="hidden md:table-cell py-6 px-6 text-gray-500">
                          {item.description || "No description available"}
                        </td>

                        {/* Unit Price */}
                        <td className="py-4 px-3 md:py-6 md:px-6 font-semibold text-sm md:text-base">
                          €{item.price.toFixed(2)}
                        </td>

                        {/* Actions */}
                        <td className="py-4 px-3 md:py-6 md:px-6 text-center">
                          <div className="flex justify-center">
                            <button
                              onClick={() => removeFromWishlist(item.id)}
                              className="text-red-500 hover:text-red-700 transition"
                              aria-label="Remove from wishlist"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 md:h-6 md:w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Continue Shopping Button - Keep this outside the scrollable area */}
            <div className="mt-6 md:mt-8 text-center pb-4 md:pb-6">
              <Link
                to="/"
                className="bg-blue-600 text-white py-2 px-4 md:py-3 md:px-6 rounded-md hover:bg-blue-700 transition"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

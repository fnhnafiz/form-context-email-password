import { useNavigate } from "react-router-dom";
import products1 from "../../assets/HomeProducts1.jpg";
import products2 from "../../assets/HomeProducts2.jpg";
import products3 from "../../assets/HomeProducts3.webp";
import toast from "react-hot-toast";

const Home = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/register");
    toast.error("You are not Registered");
  };
  return (
    <section className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* Hero Section */}
      <div className="w-full max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Discover the Latest Fashion Trends
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mb-8">
          Shop from a wide range of premium clothing and accessories curated
          just for you!
        </p>
        <button
          onClick={handleShopNow}
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition"
        >
          Shop Now
        </button>
      </div>

      {/* Featured Products Section */}
      <div className="w-full max-w-7xl mx-auto mt-16 px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sample Product Card */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={products1}
              alt="Product 1"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Product 1</h3>
              <p className="text-gray-600 mt-2">$49.99</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                Add to Cart
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={products2}
              alt="Product 2"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Product 2</h3>
              <p className="text-gray-600 mt-2">$59.99</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                Add to Cart
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={products3}
              alt="Product 3"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">Product 3</h3>
              <p className="text-gray-600 mt-2">$69.99</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

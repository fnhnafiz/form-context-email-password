import { useNavigate } from "react-router-dom";
import products from "../../assets/products.jpg";

const ShopNow = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={products} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Watch</h2>
          <p>If someone chews on watches, which watch would they choose?</p>
          <div className="card-actions justify-between">
            <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
              Fashion
            </button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={products} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Watch</h2>
          <p>If someone chews on watches, which watch would they choose?</p>
          <div className="card-actions justify-between">
            <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
              Fashion
            </button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={products} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Watch</h2>
          <p>If someone chews on watches, which watch would they choose?</p>
          <div className="card-actions justify-between">
            <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
              Fashion
            </button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={products} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Watch</h2>
          <p>If someone chews on watches, which watch would they choose?</p>
          <div className="card-actions justify-between">
            <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
              Fashion
            </button>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={products} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Watch</h2>
          <p>If someone chews on watches, which watch would they choose?</p>
          <div className="card-actions justify-between">
            <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
              Fashion
            </button>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={products} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Watch</h2>
          <p>If someone chews on watches, which watch would they choose?</p>
          <div className="card-actions justify-between">
            <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
              Fashion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopNow;

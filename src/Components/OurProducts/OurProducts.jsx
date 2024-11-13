import React from "react";
import { useNavigate } from "react-router-dom";

const OurProducts = () => {
  const navigate = useNavigate();

  const hacndleShopNow = () => {
    navigate("/shop");
  };
  return (
    <div className="my-12 flex flex-col justify-center items-center border-2 rounded container p-8 mx-auto">
      <h1 className="font-bold text-center text-3xl">Our Products</h1>
      <p className="text-gray-400 text-lg font-semibold text-center">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod voluptas
        dolores officiis magnam nemo incidunt, tempore deleniti quam
        exercitationem veritatis necessitatibus voluptates quisquam nostrum
        blanditiis dolorum eaque eum eveniet doloribus aperiam praesentium vitae
        ipsum modi officia. Nemo distinctio exercitationem harum mollitia
        voluptatibus numquam laboriosam tempora laborum laudantium nam. Nisi
        praesentium deserunt repellat debitis, officia optio laborum repellendus
        autem eum amet rem soluta enim quam quos expedita quidem voluptatum nam
        labore cum eveniet nostrum laudantium consequuntur. Molestiae distinctio
        placeat consectetur labore aperiam, dolore fugiat dolorum ut nesciunt
        dolor itaque facilis ipsa, vitae ab! Repudiandae explicabo modi, optio
        maxime minima repellendus facilis.
      </p>
      <button onClick={hacndleShopNow} className="btn btn-success">
        Shop Now
      </button>
    </div>
  );
};

export default OurProducts;

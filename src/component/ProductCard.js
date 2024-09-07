import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="productCard">
      <img src={item?.img} />
      <div>{item && item.choice ? "Conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item && item.new ? "New" : ""}</div>
    </div>
  );
};

export default ProductCard;

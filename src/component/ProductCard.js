import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div className="productCard" onClick={showDetail}>
      <img src={item?.img} />
      <div>{item && item.choice ? "Conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item && item.new ? "New" : ""}</div>
    </div>
  );
};

export default ProductCard;

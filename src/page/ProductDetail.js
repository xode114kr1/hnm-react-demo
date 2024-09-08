import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ProductDetail = () => {
  const props = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `http://localhost:4000/products/${props.id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <div>
      <Container>
        <Row>
          <Col className="product-detail-img">
            <img width="300px" src={product?.img} />
          </Col>
          <Col className="product-detail-word">
            <div>{product?.title}</div>
            <div>₩ {product?.price}</div>
            <div>{product && product.choice ? "Conscious choice" : " "}</div>
            <Form.Select
              aria-label="Default select example"
              className="product-detail-select-size"
            >
              {product &&
                product.size.map((ops, index) => (
                  <option value={index}>{ops}</option>
                ))}
            </Form.Select>
            <Button className="product-detail-add-button" variant="dark">
              추가
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;

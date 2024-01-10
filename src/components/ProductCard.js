// src/components/ProductCard.js
import React from "react";
import { Card, Button } from "react-daisyui";

const ProductCard = ({ product, addToCart }) => {
  const { id, name, price } = product;

  return (
    <Card className="product-card">
      <Card.Image
        src={`https://placekitten.com/300/200?image=${id}`}
        alt={name}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <Button color="primary" onClick={() => addToCart(product)}>
          Tambah ke Keranjang
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

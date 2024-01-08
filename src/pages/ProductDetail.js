// src/pages/ProductDetail.js
import React from "react";
import { Theme, Button } from "react-daisyui";

const ProductDetail = () => {
  return (
    <div>
      <h2>Detail Produk</h2>

      <Theme dataTheme="dark">
        <Button color="primary">Beli Sekarang, dark!</Button>
      </Theme>

      <Theme dataTheme="light">
        <Button color="primary">Beli Sekarang, light!</Button>
      </Theme>
    </div>
  );
};

export default ProductDetail;

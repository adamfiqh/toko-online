// src/components/CartIcon.js
import React from "react";
import { Button, Dropdown, Badge } from "react-daisyui";

const CartIcon = ({ itemCount }) => {
  return (
    <Dropdown>
      <Button
        tag="label"
        tabIndex={0}
        color="ghost"
        className="cart-icon"
        shape="circle"
      >
        <Badge size="sm" className={Badge.Item.className()}>
          {itemCount}
        </Badge>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {/* ... (kode ikon keranjang seperti sebelumnya) */}
        </svg>
      </Button>
      {/* ... (kode dropdown keranjang seperti sebelumnya) */}
    </Dropdown>
  );
};

export default CartIcon;

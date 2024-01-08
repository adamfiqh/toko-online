// src/pages/Home.js
import React from "react";
import { Theme, Button } from "react-daisyui";

const Home = () => {
  return (
    <div>
      <h1>Selamat Datang di Toko Online Kami</h1>

      <Theme dataTheme="dark">
        <Button color="primary">Beli Sekarang, dark!</Button>
      </Theme>

      <Theme dataTheme="light">
        <Button color="primary">Beli Sekarang, light!</Button>
      </Theme>
    </div>
  );
};

export default Home;

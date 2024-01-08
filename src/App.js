import React from "react";
import { Theme, Button } from "react-daisyui";
import "./App.css"; // Pindahkan jika diperlukan, atau sesuaikan dengan kebutuhan styling Anda

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Selamat Datang di Toko Online Kami</h1>

        <Theme dataTheme="dark">
          <Button color="primary">Beli Sekarang, dark!</Button>
        </Theme>

        <Theme dataTheme="light">
          <Button color="primary">Beli Sekarang, light!</Button>
        </Theme>
      </header>
    </div>
  );
}

export default App;

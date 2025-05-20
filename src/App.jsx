import React from "react";
import Header from "./components/Header";
import Main from "./pages/Main";
import ClickEffect from "./components/effects/ClickEffect";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ClickEffect />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;

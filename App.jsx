import React, { useState } from "react";
import TranslateBox from "./components/TranslateBox";
import ReviewBox from "./components/ReviewBox";

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Bolo Translate</h1>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <TranslateBox type="input" />
        <TranslateBox type="output" />
      </div>
      <ReviewBox />
    </div>
  );
}

export default App;

import React from "react";

function TranslateBox({ type }) {
  return (
    <div className="bg-zinc-800 rounded-2xl shadow-md p-4 w-full md:w-1/2">
      <h2 className="text-xl mb-2">{type === "input" ? "Input" : "Output"} Box</h2>
      <textarea
        className="w-full bg-zinc-700 p-2 rounded text-white"
        placeholder={type === "input" ? "Type here..." : "Translation appears here..."}
        rows="6"
        readOnly={type === "output"}
      ></textarea>
      <button className="mt-2 p-2 bg-indigo-600 rounded hover:bg-indigo-700">
        {type === "input" ? "🎤 Voice Input" : "📋 Copy"}
      </button>
    </div>
  );
}

export default TranslateBox;

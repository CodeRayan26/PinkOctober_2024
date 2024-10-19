// ProductInput.jsx
import { useState } from 'react';

const ProductInput = ({ onAnalyze }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAnalyzeClick = (event) => {
    event.preventDefault();
    onAnalyze(inputValue);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full md:w-[40%] bg-[#FDF2F0] p-8 rounded-3xl shadow-lg">
      <h3 className="font-bold text-2xl md:text-3xl text-[#d02f46] text-center mb-6">
        Analyze Cosmetic Ingredients
      </h3>
      <form className="relative w-full mb-4">
        <input
          className="w-full placeholder:text-base px-6 py-4 rounded-lg bg-white shadow-md focus:outline-none"
          type="text"
          placeholder="Enter product name or ingredients"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          onClick={handleAnalyzeClick}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#ED8182] text-white font-semibold text-base px-6 py-2 rounded-lg hover:bg-[#d02f46] transition-colors"
        >
          Analyze
        </button>
      </form>
      <p className="text-base text-gray-500 mb-4">Or</p>
      <button className="text-lg font-semibold text-white bg-[#ED8182] rounded-full px-8 py-3 mb-2 hover:bg-[#d02f46] transition-colors">
        Upload Image
      </button>
      <p className="text-base text-gray-400">Or drop a file</p>
    </div>
  );
};

export default ProductInput;

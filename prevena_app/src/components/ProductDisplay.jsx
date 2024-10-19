
const ProductDisplay = ({ productData }) => {
  if (!productData) return null;

  return (
    <div className="relative w-full flex flex-col items-center justify-center mt-10">
      <h2 className="font-bold text-xl md:text-2xl text-[#d02f46] mb-4">
        Product Information
      </h2>
      <div className="bg-white rounded-xl p-6 shadow-lg w-full max-w-md">
        <h3 className="text-lg font-semibold">{productData.name}</h3>
        <p>Brand: {productData.brand}</p>
        <p>Barcode: {productData.barcode}</p>
        <h4 className="font-semibold mt-4">Ingredients:</h4>
        <ul>
          {productData.ingredients.map((ingredient) => (
            <li key={ingredient.id}>
              {ingredient.name} - Risk Score: {ingredient.risk_score} ({ingredient.risk_type})
            </li>
          ))}
        </ul>
        <p className="font-bold mt-4">
          Overall Risk Score: {productData.overall_risk}
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;

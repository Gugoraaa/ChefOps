import { X } from "lucide-react";
import { useState } from "react";
import { addProductToOrders } from "@services/products";
import { type Product } from "../types/types";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  orderSwitch?: ()=> void;
};
export default function NewOrderModal({ isOpen, onClose,orderSwitch }: Props) {
  if (!isOpen) return null;
 
  const [productName, setProductName] = useState("");
  const [productAmount, setProductAmount] = useState(1);
  const [products, setProducts] = useState<Product[]>([]);

  

  const handleAddProduct = () => {
    if (productName.trim() !== "" && productAmount > 0) {
      const newProduct: Product = {
        name: productName.trim(),
        amount: productAmount,
      };
      setProducts([...products, newProduct]);
      setProductName("");
      setProductAmount(1);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-xl relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <X />
        </button>

        <h2 className="text-xl font-bold mb-4">New Order</h2>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-2 flex-grow">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="name..."
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="border rounded-md px-3 py-2 w-full"
              />
              <input
                type="number"
                value={productAmount}
                onChange={(e) => setProductAmount(Number(e.target.value))}
                min={1}
                className="w-20 border rounded-md px-2 py-2"
              />
            </div>
            <button
              onClick={handleAddProduct}
              className="bg-gray-100 border rounded-md py-2 hover:bg-gray-200 transition"
            >
              Add product
            </button>
          </div>

          <div className="bg-gray-50 border rounded-md p-2 w-full md:w-1/3">
            <h3 className="font-semibold mb-1">List of Products</h3>
            <ul className="list-disc pl-5">
              {products.length > 0 ? (
                products.map((product, index) => (
                  <li key={index} className="text-gray-700">
                    {product.name} x{product.amount}
                  </li>
                ))
              ) : (
                <li className="text-gray-500">No products added yet</li>
              )}
            </ul>
          </div>
        </div>

        {/* Submit */}
        <button
          className="mt-6 w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition"
          onClick={() => {
            addProductToOrders(products);
            setProducts([]);
            onClose();
            orderSwitch?.();
          }}
        >
          Submit order
        </button>
      </div>
    </div>
  );
}

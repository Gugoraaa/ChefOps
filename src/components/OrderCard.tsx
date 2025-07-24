import { useState, useEffect } from "react";
import type { Order } from "src/types/types";
import {
  getNewStatus,
  updateStatus,
  cancelOrderService,
} from "@services/products";

type Props = {
  order: Order;
  statusSwitch: () => void;
};

export default function OrderCard({ order, statusSwitch }: Props) {
  const [statusCard, setNewStatus] = useState(order.status);

  const cancelOrder = () => {
    cancelOrderService(order);
  };
  const handleNewstatus = () => {
    return getNewStatus(order.status);
  };

  const handleUpdateStatus = () => {
    updateStatus(order);
    statusSwitch();
  };

  useEffect(() => {
    const newStatus: string = handleNewstatus();
    setNewStatus(newStatus);
  }, [order.status]);

  return (
    <div className="p-4 max-w-md">
      <div className="bg-white border border-gray-300 hover:border-blue-500 transition-all duration-200 px-4 py-4 rounded-2xl">
        <div className="flex flex-row justify-between items-center my-2">
          <h5 className="text-sm text-gray-500 mb-1">Order: {order.orderId}</h5>
          <span className="inline-block bg-gray-100 text-black text-sm px-4 py-1 rounded-full capitalize">
            {order.status}
          </span>
        </div>

        <hr className="border-t border-dotted border-gray-400" />

        {order.products.map((product, index) => (
          <div className="flex flex-row justify-between items-center my-2">
            <p key={index} className="font-semibold text-black">
              {product.name}
            </p>
            <p className="font-semibold text-black">x{product.amount}</p>
          </div>
        ))}

        <p className="text-sm text-gray-400 mb-4">
          Created at {order.createdAt}
        </p>
        {order.status !== "completed" && order.status !== "canceled" ? (
          <div className="flex flex-row justify-between items-center my-2">
            <button
              className="inline-block bg-black/90 hover:bg-black text-white text-sm px-4 py-1 rounded-full capitalize"
              onClick={handleUpdateStatus}
            >
              {statusCard}
            </button>
            <button
              className="px-4 py-2 border border-gray-300 rounded-lg text-black font-semibold hover:text-red-800"
              onClick={cancelOrder}
            >
              Cancel
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

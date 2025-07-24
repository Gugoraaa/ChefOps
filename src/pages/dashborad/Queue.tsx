import { useEffect, useState } from "react";
import NewOrderButton from "@components/NewOrderButton";
import OrderCard from "@components/OrderCard";
import type { Order } from "src/types/types";
import { getOrdersByStatus } from "@services/products";

export default function Cooking() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [newStatus, setNewStatus] = useState(false);

  const loadOrders = () => {
      const data = getOrdersByStatus("queue");
      setOrders(data);
    };

  useEffect(() => {
    setNewStatus(false)
    loadOrders()
    
  }, [newStatus]);

  if (orders.length == 0) {
    return (
      <>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-amber-300">Cooking Orders</h2>
          <p>This is where you can view all Cooking orders.</p>
        </div>
        <NewOrderButton />
      </>
    );
  }

  return (
    <>
      <div className="p-4  ">
        <div className="grid grid-cols-4 ">
          {orders.map((order) => (
            <OrderCard
              key={order.orderId}
              order={order}
              statusSwitch={() => setNewStatus(true)}
            />
          ))}
        </div>
      </div>
      <NewOrderButton />
    </>
  );
}

import type { Order } from "src/types/types";
import NewOrderButton from "@components/NewOrderButton";
import OrderCard from "@components/OrderCard";
import { useEffect, useState } from "react";
import { getOrders } from "../../services/products";

export default function All() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [newOrder, setNewOrder] = useState(false);
  const [newStatus, setNewStatus] = useState(false);

  const loadOrders = () => {
    const data = getOrders();
    setOrders(data);
  };

  useEffect(() => {
    setNewStatus(false)
    setNewOrder(false);
    loadOrders();
    const data = getOrders();
    setOrders(data);
  }, [newOrder,newStatus]);

  if (orders.length == 0) {
    return (
      <>
      <div>
        <h2 className="text-2xl font-bold mb-4 text-amber-300">All Orders</h2>
        <p>This is where you can view all orders.</p>
      </div>
      <NewOrderButton orderSwitch={() => setNewOrder(true)} />
      
      </>
    );
  }

  return (
    <>
      <div className="p-4  ">
        <div className="grid grid-cols-4 ">
          {orders.map((order) => (
            <OrderCard key={order.orderId} order={order} statusSwitch= {()=> setNewStatus(true)}/>
          ))}
        </div>
      </div>
      <NewOrderButton orderSwitch={() => setNewOrder(true)} />
    </>
  );
}

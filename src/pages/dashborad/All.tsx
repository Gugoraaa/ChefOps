import NewOrderButton from "@components/NewOrderButton";
import OrderCard from "@components/OrderCard";
import { useAllOrders } from "@hooks/useAllOrders";

export default function All() {
  const { orders, error, reload } = useAllOrders();

  
  if (error) return <p className="p-4 text-red-500">{error}</p>;

  if (orders.length === 0) {
    return (
      <>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-amber-300">All Orders</h2>
          <p>No orders yet.</p>
        </div>
        <NewOrderButton orderSwitch={reload} />
      </>
    );
  }

  return (
    <>
      <div className="p-4">
        <div className="grid grid-cols-4">
          {orders.map((order) => (
            <OrderCard
              key={order.orderId}
              order={order}
              statusSwitch={reload}
              cancelSwitch={reload}
            />
          ))}
        </div>
      </div>
      <NewOrderButton orderSwitch={reload} />
    </>
  );
}

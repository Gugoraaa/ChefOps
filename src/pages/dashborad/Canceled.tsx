import NewOrderButton from "@components/NewOrderButton";
import OrderCard from "@components/OrderCard";
import { useOrders } from "@hooks/useOrder";

export default function Cooking() {
  const { orders, reload } = useOrders("canceled");

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
              statusSwitch={reload}
            />
          ))}
        </div>
      </div>
      <NewOrderButton />
    </>
  );
}

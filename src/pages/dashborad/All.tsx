import NewOrderButton from "@components/NewOrderButton";
import OrderCard from "@components/OrderCard";
import NoOrder from "@components/NoOrders";
import { useAllOrders } from "@hooks/useAllOrders";
import { getStatusColor } from "@services/products";

export default function All() {
  const { orders, error, reload } = useAllOrders();

  const title: string = "No orders yet";
  const subtitle: string =
    "Start by creating a new order to begin managing your kitchen operations.";
  if (error) return <p className="p-4 text-red-500">{error}</p>;

  if (orders.length === 0) {
    return (
      <>
        <NoOrder title={title} subtitle={subtitle} />
        <NewOrderButton />
      </>
    );
  }

  return (
    <>
      <div className="p-4">
        <div className="grid grid-cols-4">
          {orders.map((order) => (
            <OrderCard
              status={getStatusColor(order.status)}
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

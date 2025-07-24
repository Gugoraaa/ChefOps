import NewOrderButton from "@components/NewOrderButton";
import OrderCard from "@components/OrderCard";
import NoOrder from "@components/NoOrders";
import { useOrders } from "@hooks/useOrder";

export default function Canceled() {
  const { orders, reload,statusColor } = useOrders("canceled");
  const title: string = "No cooking Orders";
  const subtitle: string = "This is where you can view all Canceled orders.";
  if (orders.length == 0) {
    return (
      <>
        <NoOrder title={title} subtitle={subtitle} />
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
              status={statusColor}
            />
          ))}
        </div>
      </div>
      <NewOrderButton />
    </>
  );
}

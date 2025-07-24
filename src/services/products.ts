import { type Product, type Order, Status } from "../types/types";

export function addProductToOrders(product: Product[]): void {
  const existingOrders: Order[] = JSON.parse(
    localStorage.getItem("orders") || "[]"
  );

  const lastId =
    existingOrders.length > 0
      ? existingOrders[existingOrders.length - 1].orderId
      : 0;

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const pad = (n: number) => n.toString().padStart(2, "0");
  const formatted_date = `${pad(hours)}:${pad(minutes)}`;
  

  const newOrder: Order = {
    orderId: lastId + 1,
    products: product,
    createdAt : formatted_date,
    status: Status.Queue,
  };

  existingOrders.push(newOrder);

  localStorage.setItem("orders", JSON.stringify(existingOrders));
}

export function getOrders(): Order[] {
  const orders: Order[] = JSON.parse(localStorage.getItem("orders") || "[]");

  return orders.sort((a, b) => b.orderId - a.orderId);
}


export function DeleteOrderById(id: number): void {
  const existingOrders: Order[] = JSON.parse(
    localStorage.getItem("orders") || "[]"
  );
  const updated = existingOrders.filter((order) => order.orderId !== id);
  localStorage.setItem("orders", JSON.stringify(updated));
}

export function getNewStatus (actualStatus:string): string{
    switch (actualStatus){
      case Status.Queue:
        return Status.Cooking
      case Status.Cooking:
        return Status.Completed
      case Status.Completed:
        return Status.Completed
    }
    return 'undefined'
}

export function updateStatus (order:Order): void {
  const newStatus = getNewStatus(order.status)
  order.status= newStatus
  DeleteOrderById(order.orderId)
  const existingOrders: Order[] = JSON.parse(
    localStorage.getItem("orders") || "[]"
  );
  existingOrders.push(order);
  localStorage.setItem("orders", JSON.stringify(existingOrders));
}

export function getOrdersByStatus(status:string):Order[]{
  const allOrders = JSON.parse(localStorage.getItem("orders") || "[]");
  const ordersByStatus = allOrders.filter((order:Order) => order.status == status);
  return ordersByStatus

}
export function cancelOrderService(order:Order): void{
  order.status = Status.Canceled
  DeleteOrderById(order.orderId)
  const existingOrders: Order[] = JSON.parse(
    localStorage.getItem("orders") || "[]"
  );
  existingOrders.push(order);
  localStorage.setItem("orders", JSON.stringify(existingOrders));

}
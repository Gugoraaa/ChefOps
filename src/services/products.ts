import { type Product, type NamedOrder } from "../types/types";

export function addProductToOrders(product: Product[]): void {
  const existingOrders: NamedOrder[] = JSON.parse(localStorage.getItem("orders") || "[]");

  const newOrder: NamedOrder = {
    orderName: `Order ${existingOrders.length + 1}`,
    products: product,
  };

  existingOrders.push(newOrder);

  localStorage.setItem("orders", JSON.stringify(existingOrders));
}

export function getOrders():Product[]{
    return JSON.parse(localStorage.getItem("orders") || "[]");
    
}

export function deleteOrderByName(name: string): void {
  const existingOrders: NamedOrder[] = JSON.parse(localStorage.getItem("orders") || "[]");
  const updated = existingOrders.filter(order => order.orderName !== name);
  localStorage.setItem("orders", JSON.stringify(updated));
}

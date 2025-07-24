import { useState, useEffect, useCallback } from "react";
import { getOrders } from "../services/products";
import type { Order } from "src/types/types";

export function useAllOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [error, setError] = useState<string | null>(null);
  

  const loadOrders = useCallback(() => {
    try {
      const data = getOrders(); 
      setOrders(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load orders");
    }
  }, []);

  useEffect(() => {
    loadOrders();

  }, [loadOrders]);

  return {
    orders,
    error,
    reload: loadOrders,
  };
}

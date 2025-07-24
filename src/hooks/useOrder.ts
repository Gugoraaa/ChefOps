import { useState, useEffect } from 'react';
import { getOrdersByStatus } from "@services/products"
import type { Order } from '../types/types';

export function useOrders(status: string) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [newStatus, setNewStatus] = useState(false);

  const loadOrders = () => {
    const data = getOrdersByStatus(status);
    setOrders(data);
  };

  useEffect(() => {
    setNewStatus(false);
    loadOrders();
  }, [status, newStatus]); 

  return {
    orders,
    reload: () => setNewStatus(true),
  };
}

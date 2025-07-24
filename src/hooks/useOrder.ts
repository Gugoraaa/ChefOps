import { useState, useEffect } from 'react';
import { getOrdersByStatus,getStatusColor } from "@services/products"
import type { Order } from '../types/types';

export function useOrders(status: string) {
  const [orders, setOrders] = useState<Order[]>([]);
  const [newStatus, setStatus] = useState(false);
  const [statusColor, setStatusColor]= useState("")

  const loadOrders = () => {
    const data = getOrdersByStatus(status);
    setOrders(data);
  };

  useEffect(() => {
    setStatus(false);
    setStatusColor(getStatusColor(status))
    loadOrders();
  }, [status, newStatus]); 

  return {
    orders,
    reload: () => setStatus(true),
    statusColor
  };
}

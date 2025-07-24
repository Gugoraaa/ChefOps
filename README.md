# ChefOps - Kitchen Order Management System

ChefOps is a kitchen order management application designed to help restaurants manage and track orders by status (Queued, Cooking, Completed, Canceled) in real time.

## Features

- 🧾 View all orders filtered by status:
  - Queue
  - Cooking
  - Completed
  - Canceled
- ➕ Create new orders with the "New Order" button
- 🧭 Real-time digital clock in the UI
- 📁 Modular structure with components, hooks, and services

## Project Structure



```graphql
src/
├── components/        # Reusable UI components
│   ├── Clock.tsx
│   ├── MenuTabs.tsx
│   ├── NavBar.tsx
│   ├── NewOrderButton.tsx
│   ├── NewOrderModal.tsx
│   └── OrderCard.tsx
├── hooks/             # Custom React hooks
│   ├── useAllOrders.ts
│   └── useOrder.ts
├── pages/             # Page views based on order status
│   ├── All.tsx
│   ├── Canceled.tsx
│   ├── Completed.tsx
│   ├── Cooking.tsx
│   └── Queue.tsx
├── services/          # order-related services
│   └── products.ts
├── types/             # TypeScript type definitions
│   └── types.ts
├── App.tsx            # Main application entry point
└── ...
```

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

```bash
git clone https://github.com/Gugoraaa/ChefOps.git
cd kitchen-manager
npm install
npm run dev
```

## Technologies Used

- React
- TypeScript
- Vite
- CSS Modules

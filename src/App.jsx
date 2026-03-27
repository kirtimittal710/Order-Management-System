import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import OrderList from './pages/OrderList';
import OrderDetail from './pages/OrderDetail';
import CreateOrder from './pages/CreateOrder';
import Notifications from './pages/Notifications';
import { notifications } from './data/mockData';
import './index.css';

const pageTitles = {
  dashboard: 'Dashboard',
  orders: 'Orders',
  create: 'New Order',
  notifications: 'Notifications',
  detail: 'Order Detail',
};

export default function App() {
  const [page, setPage] = useState('dashboard');
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  const navigate = (p) => {
    setPage(p);
    setSidebarOpen(false);
  };

  const selectOrder = (id) => {
    setSelectedOrderId(id);
    setPage('detail');
  };

  const goBack = () => {
    setPage('orders');
    setSelectedOrderId(null);
  };

  const renderPage = () => {
    switch (page) {
      case 'dashboard':
        return <Dashboard onNavigate={navigate} onSelectOrder={selectOrder} />;
      case 'orders':
        return <OrderList onSelectOrder={selectOrder} onNavigate={navigate} />;
      case 'detail':
        return <OrderDetail orderId={selectedOrderId} onBack={goBack} />;
      case 'create':
        return <CreateOrder onBack={() => navigate('orders')} />;
      case 'notifications':
        return <Notifications onSelectOrder={selectOrder} />;
      default:
        return <Dashboard onNavigate={navigate} onSelectOrder={selectOrder} />;
    }
  };

  const activeNav = ['dashboard', 'orders', 'create', 'notifications'].includes(page) ? page : 'orders';

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Sidebar
        active={activeNav}
        onNavigate={navigate}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        unreadCount={unreadCount}
      />

      <div style={{ marginLeft: '240px', flex: 1, minWidth: 0 }} className="main-content-area">
        <Navbar
          title={pageTitles[page] || 'OrderFlow'}
          onMenuToggle={() => setSidebarOpen(o => !o)}
          unreadCount={unreadCount}
          onNavigate={navigate}
        />
        <main style={{ minHeight: 'calc(100vh - 65px)' }}>
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

import React from 'react';
import {
  LayoutDashboard, ShoppingCart, Bell, Plus,
  Settings, ChevronRight, X, Package, Zap
} from 'lucide-react';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'orders', label: 'Orders', icon: ShoppingCart },
  { id: 'create', label: 'New Order', icon: Plus },
  { id: 'notifications', label: 'Notifications', icon: Bell },
];

export default function Sidebar({ active, onNavigate, isOpen, onClose, unreadCount }) {
  return (
    <>
     
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      
        <div className="flex items-center justify-between px-5 py-5 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'var(--gradient-primary)' }}>
              <Zap size={16} color="white" fill="white" />
            </div>
            <div>
              <div className="font-bold text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>OrderFlow</div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Pro Dashboard</div>
            </div>
          </div>
          <button
            className="md:hidden p-1 rounded-lg hover:bg-white/5 transition-colors"
            onClick={onClose}
            style={{ color: 'var(--text-secondary)' }}
          >
            <X size={16} />
          </button>
        </div>

        <nav className="flex-1 p-3 space-y-1 mt-2">
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => { onNavigate(id); onClose(); }}
              className={`nav-item w-full text-left ${active === id ? 'active' : ''}`}
            >
              <Icon size={18} />
              <span>{label}</span>
              {id === 'notifications' && unreadCount > 0 && (
                <span className="ml-auto text-xs px-2 py-0.5 rounded-full font-semibold"
                  style={{ background: 'var(--accent-violet)', color: 'white', fontSize: '10px' }}>
                  {unreadCount}
                </span>
              )}
              {active === id && (
                <ChevronRight size={14} className="ml-auto opacity-60" />
              )}
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-white/[0.06]">
          <button className="nav-item w-full">
            <Settings size={18} />
            <span>Settings</span>
          </button>

          <div className="mt-3 p-3 rounded-xl" style={{ background: 'rgba(124,92,252,0.08)', border: '1px solid rgba(124,92,252,0.15)' }}>
            <div className="flex items-center gap-2 mb-2">
              <Package size={14} style={{ color: 'var(--accent-violet)' }} />
              <span className="text-xs font-semibold" style={{ color: 'var(--accent-violet)', fontFamily: 'Syne' }}>Pro Plan</span>
            </div>
            <div className="text-xs" style={{ color: 'var(--text-muted)' }}>6/100 orders used this month</div>
            <div className="mt-2 h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--bg-hover)' }}>
              <div className="h-full rounded-full" style={{ width: '6%', background: 'var(--gradient-primary)' }} />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

import React, { useState, useEffect } from 'react';
import { Menu, Search, Bell, Sun, Moon } from 'lucide-react';

export default function Navbar({ title, onMenuToggle, unreadCount, onNavigate }) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <header className="sticky top-0 z-30 flex items-center gap-4 px-6 py-4"
      style={{
        background: isDark ? 'rgba(10,10,15,0.85)' : 'rgba(244,244,248,0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border)',
      }}>

      <button onClick={onMenuToggle}
        className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
        style={{ color: 'var(--text-secondary)' }}>
        <Menu size={20} />
      </button>

      <h1 className="text-lg font-bold"
        style={{ fontFamily: 'Syne, sans-serif', color: 'var(--text-primary)' }}>
        {title}
      </h1>

      <div className="flex-1" />

      <div className="relative hidden sm:block">
        <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2"
          style={{ color: 'var(--text-muted)' }} />
        <input className="input-field pl-9 py-2 text-sm w-48 lg:w-64"
          placeholder="Search orders..."
          style={{ borderRadius: '10px' }} />
      </div>

      <button onClick={() => setIsDark(d => !d)}
        className="p-2 rounded-xl transition-all"
        style={{
          color: isDark ? '#ffb300' : 'var(--accent-violet)',
          border: '1px solid var(--border)',
          background: isDark ? 'rgba(255,179,0,0.08)' : 'rgba(124,92,252,0.08)',
        }}>
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      <button onClick={() => onNavigate('notifications')}
        className="relative p-2 rounded-xl hover:bg-white/5 transition-colors"
        style={{ color: 'var(--text-secondary)', border: '1px solid var(--border)' }}>
        <Bell size={18} />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-xs flex items-center justify-center font-bold"
            style={{ background: 'var(--accent-rose)', color: 'white', fontSize: '9px' }}>
            {unreadCount}
          </span>
        )}
      </button>

     
    </header>
  );
}
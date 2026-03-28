import React from 'react';
import { ArrowLeft, Phone, Mail, Package, Calendar, Clock, CheckCircle, AlertCircle, Edit2 } from 'lucide-react';

const StatusBadge = ({ status }) => {
  const labels = { pending: 'Pending', in_progress: 'In Progress', completed: 'Completed', cancelled: 'Cancelled' };
  return <span className={`badge badge-${status} text-sm px-4 py-1.5`}>{labels[status]}</span>;
};

const statusSteps = ['pending', 'in_progress', 'completed'];

export default function OrderDetail({ orderId, onBack, orders }) {
  const order = orders.find(o => o.id === orderId);

  if (!order) return (
    <div className="p-6 flex flex-col items-center justify-center min-h-64">
      <AlertCircle size={48} style={{ color: 'var(--text-muted)' }} />
      <p className="mt-4 text-lg font-bold" style={{ fontFamily: 'Syne' }}>Order not found</p>
      <button onClick={onBack} className="btn-ghost mt-4 text-sm">Go Back</button>
    </div>
  );

  const currentStepIndex = statusSteps.indexOf(order.status);

  return (
    <div className="p-4 md:p-6 page-enter space-y-4">
      <div className="flex items-center gap-3">
        <button onClick={onBack}
          className="p-2 rounded-xl hover:bg-white/5 transition-colors"
          style={{ color: 'var(--text-secondary)', border: '1px solid var(--border)' }}>
          <ArrowLeft size={18} />
        </button>
        <div className="flex-1">
          <div className="flex items-center gap-3 flex-wrap">
            <h2 className="text-xl font-bold" style={{ fontFamily: 'Syne' }}>{order.id}</h2>
            <StatusBadge status={order.status} />
            {order.priority === 'high' && (
              <span className="badge" style={{ background: 'rgba(255,79,123,0.1)', color: '#ff4f7b', border: '1px solid rgba(255,79,123,0.2)' }}>
                🔥 High Priority
              </span>
            )}
          </div>
          <p className="text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>
            Created on {order.date} · Due {order.dueDate}
          </p>
        </div>
        <button className="btn-ghost text-sm hidden sm:flex">
          <Edit2 size={14} /> Edit Order
        </button>
      </div>

      {order.status !== 'cancelled' && (
        <div className="glass-card p-5">
          <p className="text-sm font-semibold mb-4" style={{ fontFamily: 'Syne' }}>Order Progress</p>
          <div className="flex items-center gap-0 relative">
            {statusSteps.map((step, i) => {
              const done = i <= currentStepIndex;
              const labels = { pending: 'Order Placed', in_progress: 'Processing', completed: 'Delivered' };
              return (
                <React.Fragment key={step}>
                  <div className="flex flex-col items-center gap-2 flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all`}
                      style={{
                        background: done ? 'var(--gradient-primary)' : 'var(--bg-secondary)',
                        color: done ? 'white' : 'var(--text-muted)',
                        border: done ? 'none' : '2px solid var(--border)',
                        boxShadow: done ? '0 0 16px rgba(124,92,252,0.4)' : 'none',
                        fontFamily: 'Syne'
                      }}>
                      {done ? <CheckCircle size={14} /> : i + 1}
                    </div>
                    <span className="text-xs whitespace-nowrap" style={{ color: done ? 'var(--text-primary)' : 'var(--text-muted)' }}>
                      {labels[step]}
                    </span>
                  </div>
                  {i < statusSteps.length - 1 && (
                    <div className="flex-1 h-0.5 mb-5 mx-1 transition-all"
                      style={{ background: i < currentStepIndex ? 'var(--gradient-primary)' : 'var(--border)' }} />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          <div className="glass-card p-5">
            <p className="font-bold mb-4" style={{ fontFamily: 'Syne' }}>Order Items</p>
            <div className="space-y-2">
              {order.items.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl"
                  style={{ background: 'var(--bg-secondary)' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(124,92,252,0.1)' }}>
                      <Package size={16} style={{ color: 'var(--accent-violet)' }} />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Qty: {item.qty}</p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold">₹{(item.qty * item.price).toLocaleString('en-IN')}</p>
                </div>
              ))}
              <div className="flex justify-between p-3 mt-2">
                <p className="font-bold" style={{ fontFamily: 'Syne' }}>Total</p>
                <p className="text-lg font-bold gradient-text">₹{order.amount.toLocaleString('en-IN')}</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-5">
            <p className="font-bold mb-4" style={{ fontFamily: 'Syne' }}>Order Timeline</p>
            <div className="space-y-0">
              {order.timeline.map((event, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`timeline-dot ${event.done ? 'done' : ''}`} />
                    {i < order.timeline.length - 1 && (
                      <div className="w-px flex-1 my-1" style={{ background: event.done ? 'rgba(124,92,252,0.3)' : 'var(--border)', minHeight: '28px' }} />
                    )}
                  </div>
                  <div className="pb-5">
                    <p className="text-sm font-medium" style={{ color: event.done ? 'var(--text-primary)' : 'var(--text-muted)' }}>
                      {event.status}
                    </p>
                    {event.time && (
                      <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{event.time}</p>
                    )}
                    {!event.time && !event.done && (
                      <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>Upcoming</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-5">
            <p className="font-bold mb-3" style={{ fontFamily: 'Syne' }}>Notes & Remarks</p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{order.notes}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="glass-card p-5">
            <p className="font-bold mb-4" style={{ fontFamily: 'Syne' }}>Customer</p>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white text-sm font-bold"
                style={{ background: 'var(--gradient-primary)', fontFamily: 'Syne' }}>
                {order.customer.avatar}
              </div>
              <div>
                <p className="font-semibold">{order.customer.name}</p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Regular Customer</p>
              </div>
            </div>
            <div className="space-y-2.5">
              {[
                { icon: Mail, label: order.customer.email },
                { icon: Phone, label: order.customer.phone },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5 text-sm"
                  style={{ color: 'var(--text-secondary)' }}>
                  <Icon size={14} style={{ color: 'var(--text-muted)' }} />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-5">
            <p className="font-bold mb-3" style={{ fontFamily: 'Syne' }}>Assigned To</p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-xs font-bold"
                style={{ background: 'linear-gradient(135deg, #00e5a0, #00b8d4)', fontFamily: 'Syne' }}>
                {order.assignedTo.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="font-medium text-sm">{order.assignedTo}</p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Account Manager</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-5">
            <p className="font-bold mb-3" style={{ fontFamily: 'Syne' }}>Important Dates</p>
            <div className="space-y-3">
              {[
                { icon: Calendar, label: 'Order Date', val: order.date },
                { icon: Clock, label: 'Due Date', val: order.dueDate },
              ].map(({ icon: Icon, label, val }) => (
                <div key={label} className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <Icon size={14} style={{ color: 'var(--text-muted)' }} /> {label}
                  </div>
                  <span className="text-sm font-medium">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
